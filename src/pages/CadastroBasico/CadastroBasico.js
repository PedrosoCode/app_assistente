import React from 'react';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import MainNavbar from '../../components/MainNavbar';
import MainFooter from '../../components/MainFooter';
import TipoMaquina from '../../components/TipoMaquina';

import styles from './CadastroBasico.module.scss';


function CadastroBasico() {

    return (
        <ProtectedRoute>
            <MainNavbar />


            <div className={styles.formContainer}>
                <form>
                    <div class="mb-3">
                        <label for="InputTipoMaquina" class="form-label">Insira o tipo de máquina</label>
                        <input type="text" class="form-control" id="InputTipoMaquina" aria-describedby="InputTipoMaquinaHelp"></input>
                        <div id="InputTipoMaquinaHelp" class="form-text">Isso será usado para separar e organizar as entradas</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>


            <MainFooter />
        </ProtectedRoute>
    );
}

export default CadastroBasico;
