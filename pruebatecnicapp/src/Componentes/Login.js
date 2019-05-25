import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div className="gridLogin">
                <div className="contLogin">                    
                    <form className="formLogin">
                    <h1 className="tituLogin">TuEmpresa <i class="fa fa-align-center"></i></h1>
                        <input type="text" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <button disabled>Continuar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;