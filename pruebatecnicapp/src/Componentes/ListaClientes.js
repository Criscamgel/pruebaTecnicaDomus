import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Listaclientes extends Component {

    state = {
        clientes: [
            {
                "nombre": "James",
                "sector": "57",
                "tiempoCompleto": true,
                "manager": true,
                "direccion": "dir1",
                "email": "James@James.com"
            },
            {
                "nombre": "María",
                "sector": "27",
                "tiempoCompleto": false,
                "manager": false,
                "direccion": "dir1",
                "email": "maria@maria.com"
            },
            {
                "nombre": "Saul",
                "sector": "25",
                "tiempoCompleto": true,
                "manager": false,
                "direccion": "dir1",
                "email": "saul@saul.com"
            }
        ]
    }

    componentDidMount() {

        let nuevoCliente = this.props.nuevoCliente;

        do{            
            let clientes = this.state.clientes
            clientes.push(nuevoCliente)

            this.setState({
                clientes
            })
        }while(nuevoCliente.nombre)       
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