import React,{Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './Login';
import '../Css/estilos.css';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <Redirect from="/" to="/login"/>                                      
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;