import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {

    state = {
        inputEmail: '',
        inputPassword: '',
        mensajeError: '',
        btnDesabilitado: true
    }

    validarCampos = () => {

        if (this.state.inputEmail !== '' && this.state.inputPassword !== '') {
            this.setState({
                btnDesabilitado: false,
                mensajeError: ''
            });
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.inputEmail)) {
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

    render() {
        return (
            <div className="gridLogin">
                <div className="contLogin">
                    <form className="formLogin">
                        <h1 className="tituLogin">TuEmpresa <i className="fa fa-align-center"></i></h1>

                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.inputEmail}
                            onChange={e => { this.setState({ inputEmail: e.target.value }); this.validarCampos() }}
                        ></input>

                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={this.state.inputPassword}
                            onChange={e => { this.setState({ inputPassword: e.target.value }); this.validarCampos() }}
                        ></input>

                        <span className="formErrores">{this.state.mensajeError}</span>
                        <Link to={'/lista'}>
                            <button
                                disabled={this.state.btnDesabilitado}
                            >
                                Continuar</button>
                        </Link>
                        <input type="checkbox"/>Recordarme                                              
                    </form>                    
                </div>
            </div>
        );
    }
}