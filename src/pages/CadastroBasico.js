import React from 'react';
import { ProtectedRoute } from '../components/ProtectedRoute';
import MainNavbar from '../components/MainNavbar';
import MainFooter from '../components/MainFooter';
import TipoMaquina from '../components/TipoMaquina';


function CadastroBasico() {

    return (
        <ProtectedRoute>
            <MainNavbar />
            <div>
                <h1>Sua sessão deu certo!</h1>

            </div>
            <div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
            </div>

            <TipoMaquina />

           
            <MainFooter />
        </ProtectedRoute>
    );
}

export default CadastroBasico;
