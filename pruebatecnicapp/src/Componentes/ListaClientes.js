import React, { Component } from 'react';
import Header from './Header';

export default class Listaclientes extends Component {

    state = {
        clientes: []
    }

    componentDidMount() {
        const clientes = [
            {
                "nombre": "James",
                "sector": 57,
                "tiempoCompleto": true,
                "manager": true
            },
            {
                "nombre": "María",
                "sector": 27,
                "tiempoCompleto": false,
                "manager": false
            },
            {
                "nombre": "Saul",
                "sector": 25,
                "tiempoCompleto": true,
                "manager": false
            }
        ]

        this.setState({
            clientes
        })
    }

    mostrarClientes = () => {

        const clientes = this.state.clientes;
        console.log(clientes);
        if (clientes.length === 0) return null;

        return (
            <React.Fragment>
                {Object.keys(clientes).map((cliente, i) => (
                    <tr key={i}>
                        <td>{clientes[cliente].nombre}</td>
                        <td>{clientes[cliente].sector}</td>
                        <td>{clientes[cliente].sector}</td>
                        <td>{clientes[cliente].sector}</td>
                    </tr>
                ))}
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="contListado">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="" scope="col">Nombre</th>
                                <th className="text-center" scope="col">Sector</th>
                                <th className="" scope="col">Tiempo Completo</th>
                                <th className="" scope="col">Manager</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.mostrarClientes()}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}