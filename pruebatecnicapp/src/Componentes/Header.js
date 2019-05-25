import React, { Component } from 'react';
import Sidenav from 'react-simple-sidenav';

export default class Header extends Component {

    state={
        showNav: false
    }

    render() {
        return (
            <React.Fragment>
                <Sidenav showNav={this.state.showNav}>Hola</Sidenav>
                <div className="contHeader">
                    <h1 className="tituLogin">TuEmpresa <i className="fa fa-align-center"></i></h1>
                </div>
            </React.Fragment>
        );
    }
}   