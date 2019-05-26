import React, { Component } from 'react';
import Header from './Header';

import { Link } from 'react-router-dom';

export default class Listaclientes extends Component {

    state = {
        clientes: [
            {
                "nombre": "James",
                "sector": "57",
                "direccion": "dir1",
                "email": "James@James.com",
                "antiguo": true,
            },
            {
                "nombre": "María",
                "sector": "27",
                "direccion": "dir1",
                "email": "maria@maria.com",
                "antiguo": false,
            },
            {
                "nombre": "Saul",
                "sector": "25",
                "direccion": "dir1",
                "email": "saul@saul.com",
                "antiguo": true,
            }
        ]
    }

    componentDidMount() {

        let nuevoCliente = this.props.nuevoCliente;

        if(nuevoCliente.nombre){
            let clientes = this.state.clientes
            clientes.push(nuevoCliente)

            this.setState({
                clientes
            })
        }
    }

    mostrarClientes = () => {

        const clientes = this.state.clientes;
        if (clientes.length === 0) return null;

        return (
            <React.Fragment>
                {Object.keys(clientes).map((cliente, i) => (
                    <tr key={i}>
                        <td>{clientes[cliente].nombre}</td>
                        <td>{clientes[cliente].sector}</td>
                        <td>{clientes[cliente].direccion}</td>
                        <td>{clientes[cliente].email}</td>
                        <td>
                            <div className="formCheckT">
                                <input type="checkbox" checked={clientes[cliente].antiguo} disabled/>
                            </div>
                        </td>
                    </tr>
                ))}
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="conTabla">

                    <h3>Lista de Clientes</h3>

                    <div className="btnCrear">
                        <Link to={'/creacliente'}>
                            <button>Crear Cliente</button>
                        </Link>
                    </div>

                    <table className="table-dark">
                        <thead>
                            <tr>
                                <th className="" scope="col">Nombre</th>
                                <th className="text-center" scope="col">Sector</th>
                                <th className="" scope="col">Direccion</th>
                                <th className="" scope="col">Email</th>
                                <th className="" scope="col">Antiguo</th>
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