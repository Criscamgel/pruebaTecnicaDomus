import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Header';

class Creacliente extends Component {

    state = {
        nombre: '',
        email: '',
        direccion: '',
        sector: '',
        antiguo:false,
        btnDesabilitado: 'true',
        mensajeError: '',
        showClient: false
    }

    validarCampos = () => {

        if (this.state.sector !== '' && this.state.nombre !== '' && this.state.email !== '' && this.state.direccion !== '') {
            this.setState({
                btnDesabilitado: false,
                mensajeError: ''
            });
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
                this.setState({
                    btnDesabilitado: false,
                    mensajeError: ''
                });
            } else {
                this.setState({
                    btnDesabilitado: true,
                    mensajeError: 'Correo Electrónico Invalido'
                });
            }

        } else {
            this.setState({
                btnDesabilitado: true,
                mensajeError: 'Debe diligenciar todos los campos'
            });
        }

    }

    crearCliente = (e) => {

        e.preventDefault();

        const nuevoCliente = {
            nombre: this.state.nombre,
            email: this.state.email,
            direccion: this.state.direccion,
            sector: this.state.sector,
            antiguo: this.state.antiguo
        }

        this.props.nuevoCliente(nuevoCliente)
        this.props.history.push('/lista')
    }

    cambioChecked = () =>{
        this.setState({
            antiguo: !this.state.antiguo
          });        
    }

    showClient = (e) =>{

        e.preventDefault();

        this.setState({
            showClient: true
        })
    }

    hideClient = (e) => {
        e.preventDefault();

        this.setState({
            showClient: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="conTablaCrea">

                    <h3>Crear Cliente</h3>

                    <form className="formCrear">
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={this.state.nombre}
                            onChange={e => { this.setState({ nombre: e.target.value }); this.validarCampos() }}
                        ></input>

                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={e => { this.setState({ email: e.target.value }); this.validarCampos() }}
                        ></input>

                        <input
                            type="text"
                            placeholder="Dirección"
                            value={this.state.direccion}
                            onChange={e => { this.setState({ direccion: e.target.value }); this.validarCampos() }}
                        ></input>

                        <select value={this.state.sector}
                            onClick={this.validarCampos}
                            onChange={e => { this.setState({ sector: e.target.value }) }}
                        >
                            <option value='' selected>Selecciona el sector</option>
                            <option value="57">Finanzas</option>
                            <option value="27">Tributario</option>
                            <option value="25">Tecnología</option>
                        </select>

                        <div className="formCheckTabla">
                            <input
                            type="checkbox"
                            checked={this.state.antiguo}
                            onChange={this.cambioChecked} 
                            /><p>Es antiguo?</p>
                        </div>

                        <div className="btnsForm" onClick={this.showClient}>
                            <button> Añadir Contácto</button>
                        </div>

                        {this.state.showClient ? 
                            
                            <div className="cliente">
                            <input placeholder="Nombre"></input>
                            <input placeholder="Cliente"></input>
                            <button className="btnBorrar" onClick={this.hideClient}>Borrar</button>
                            </div>
                            
                            : null}

                        <div className="btnsForm">
                        <button disabled={this.state.btnDesabilitado} onClick={this.crearCliente}> Guardar Cliente</button>
                        </div>

                        <span className="formErrores">{this.state.mensajeError}</span>

                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Creacliente);