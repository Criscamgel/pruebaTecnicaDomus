import React, { Component } from 'react';
import Sidenav from 'react-simple-sidenav';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    state = {
        showNav: false
    }

    abrirSideNav = () => {

        const showNav = this.state.showNav;
        this.setState({
            showNav: !showNav
        })
    }

    render() {
        return (
            <React.Fragment>
                <Sidenav

                    showNav={this.state.showNav}
                    navStyle={{
                        background: '#242424'
                    }}
                >

                    <div className="contMenu">

                        <Link to={'/Lista'}>
                            <div className="contItem" onClick={this.abrirSideNav}>
                            <i className="fa fa-list-ol"/><p>Lista de Clientes</p>
                            </div>
                        </Link>

                        <Link to={'/creacliente'}>
                            <div className="contItem" onClick={this.abrirSideNav}>
                                <i className="fa fa-plus-circle" /><p>Crear Cliente</p>
                            </div>
                        </Link>

                        <Link to={'/login'}>
                            <div className="contItem">
                                <i className="fa fa-share-square" /><p>Cerrar Sesión</p>
                            </div>
                        </Link>

                    </div>

                </Sidenav>
                <div className="contHeader">
                    <i id="btnMenu" className="fa fa-bars" onClick={this.abrirSideNav}></i>
                    <h1 className="tituLoginHeader">TuEmpresa <i className="fa fa-align-center"></i></h1>
                    <Link to={'/login'}>
                        <div className="contItemHeader">
                            <i className="fa fa-share-square" /><p>Cerrar Sesión</p>
                        </div>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}   