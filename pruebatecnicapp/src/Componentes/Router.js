import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import '../Css/estilos.css';
import Listaclientes from './ListaClientes';

export default class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>                    
                    <Route exact path="/login" component={Login}></Route>
                    <Redirect exact from="/" to="/login" />
                    <Route path="/lista" component={Listaclientes}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}