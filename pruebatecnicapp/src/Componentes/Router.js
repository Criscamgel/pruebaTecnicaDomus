import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import '../Css/estilos.css';

import Header from './Header';
import Login from './Login';
import Listaclientes from './ListaClientes';
import Creacliente from './Creacliente';
import Swal from 'sweetalert2';

export default class Router extends Component {

    state = {
        nuevoCliente:{}
    }

    nuevoCliente = (nuevoCliente) => {
        
        this.setState({nuevoCliente})

        Swal.fire(
            'Has Creado un Cliente!',
            'Proceso correctamente registrado!',
            'success'
        )

    }

    render() {
        return (                
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/login" component={Login}></Route>
                        <Redirect exact from="/" to="/login" />

                        <Route path="/lista" render={() => {
                            return (
                            <Listaclientes nuevoCliente={this.state.nuevoCliente}
                            />
                                )
                        }}/>


                        <Route path="/creacliente" render={() => {
                            return (
                            <Creacliente nuevoCliente={this.nuevoCliente}
                            />
                                )
                        }}/>
                    </Switch>
                </BrowserRouter>
        );
    }
}