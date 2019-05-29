import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "../Css/estilos.css";

import Login from "./Login";
import Listaclientes from "./ListaClientes";
import Creacliente from "./Creacliente";
import Swal from "sweetalert2";

export default class Router extends Component {
  state = {
    clientes: [
      {
        nombre: "James",
        sector: "57",
        direccion: "dir1",
        email: "James@James.com",
        antiguo: true
      },
      {
        nombre: "María",
        sector: "27",
        direccion: "dir1",
        email: "maria@maria.com",
        antiguo: false
      },
      {
        nombre: "Saul",
        sector: "25",
        direccion: "dir1",
        email: "saul@saul.com",
        antiguo: true
      }
    ]
  };

  nuevoCliente = (nuevoCliente) => {

    const clientes = [...this.state.clientes, nuevoCliente]
    this.setState({
        clientes
         });

    Swal.fire(
      "Has Creado un Cliente!",
      "Proceso correctamente registrado!",
      "success"
    );
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Redirect exact from="/" to="/login" />

          <Route
            path="/lista"
            render={() => {
              return <Listaclientes 
              clientes={this.state.clientes}
              />;
            }}
          />

          <Route
            path="/creacliente"
            render={() => {
              return <Creacliente 
              nuevoCliente={this.nuevoCliente} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
