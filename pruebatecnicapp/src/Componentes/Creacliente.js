import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "./Header";

class Creacliente extends Component {
  state = {
    cliente: {
      nombre: "",
      email: "",
      direccion: "",
      sector: "",
      antiguo: false
    },
    btnDesabilitado: "true",
    mensajeError: "",
    showClient: false
  };

  handleChange = (e) => {
    this.setState({
        cliente:{
            ...this.state.cliente,
            [e.target.name] : e.target.value
        } 
    })
    this.validarCampos();
  }

  validarCampos = () => {
    const { nombre, email, direccion, sector } = this.state.cliente;

    if (nombre !== "" && email !== "" && direccion !== "" && sector !== "") {
      this.setState({
        btnDesabilitado: false,
        mensajeError: ""
      });
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        this.setState({
          btnDesabilitado: false,
          mensajeError: ""
        });
      } else {
        this.setState({
          btnDesabilitado: true,
          mensajeError: "Correo Electrónico Invalido"
        });
      }
    } else {
      this.setState({
        btnDesabilitado: true,
        mensajeError: "Debe diligenciar todos los campos"
      });
    }
  };

  crearCliente = (e) => {
    e.preventDefault();
    const nuevoCliente = { ...this.state.cliente };

    this.props.nuevoCliente(nuevoCliente);
    this.props.history.push("/lista");
  };

    cambioChecked = () => {
    this.setState({
      cliente:{
          ...this.state.cliente,
          antiguo: !this.state.cliente.antiguo
        }  
    });
    };

  showClient = e => {
    e.preventDefault();

    this.setState({
      showClient: !this.state.showClient
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="conTablaCrea">
          <h3>Crear Cliente</h3>

          <form className="formCrear">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="direccion"
              placeholder="Dirección"
              onChange={this.handleChange}
            />

            <select
              name="sector"
              onClick={this.validarCampos}
              onChange={this.handleChange}
            >
              <option value="" selected>
                Selecciona el sector
              </option>
              <option value="57">Finanzas</option>
              <option value="27">Tributario</option>
              <option value="25">Tecnología</option>
            </select>

            <div className="formCheckTabla">
              <input
                type="checkbox"
                checked={this.state.cliente.antiguo}
                onChange={this.cambioChecked}
              />
              <p>Es antiguo?</p>
            </div>

            <div className="btnsForm" onClick={this.showClient}>
              <button> Añadir Contácto</button>
            </div>

            {this.state.showClient ? (
              <div className="cliente">
                <input placeholder="Nombre" />
                <input placeholder="Cliente" />
                <button className="btnBorrar" onClick={this.showClient}>
                  Borrar
                </button>
              </div>
            ) : null}

            <div className="btnsForm">
              <button
                disabled={this.state.btnDesabilitado}
                onClick={this.crearCliente}
              >
                Guardar Cliente
              </button>
            </div>

            <span className="formErrores">{this.state.mensajeError}</span>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Creacliente);
