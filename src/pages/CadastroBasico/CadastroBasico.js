import React from 'react';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import MainNavbar from '../../components/MainNavbar';
import MainFooter from '../../components/MainFooter';
import styles from './CadastroBasico.module.scss';

function CadastroBasico() {

    const handleSubmitTipoMaquina = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        const tipoMaquina = document.getElementById('InputTipoMaquina').value;
        const response = await fetch('http://localhost:3042/tipoMaquinaInsert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tipo: tipoMaquina })
        });
        const responseData = await response.json();
        console.log(responseData);
    };

    const handleSubmitItem = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        const tipoMaquina = document.getElementById('InputItem').value;
        const response = await fetch('http://localhost:3042/ItemInsert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tipo: tipoMaquina })
        });
        const responseData = await response.json();
        console.log(responseData);
    };

    const handleSubmitDefeito = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        const tipoMaquina = document.getElementById('InputDefeito').value;
        const response = await fetch('http://localhost:3042/DefeitoInsert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tipo: tipoMaquina })
        });
        const responseData = await response.json();
        console.log(responseData);
    };

    return (
        <ProtectedRoute>
            <MainNavbar />

            <div className={styles.formContainer}>
                <form onSubmit={handleSubmitTipoMaquina}>
                    <div className="mb-3">
                        <label htmlFor="InputTipoMaquina" className="form-label">Insira o tipo de máquina</label>
                        <input type="text" className="form-control" id="InputTipoMaquina" aria-describedby="InputTipoMaquinaHelp" />
                        <div id="InputTipoMaquinaHelp" className="form-text">Isso será usado para separar e organizar as entradas</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>

            <div className={styles.formContainer}>
                <form onSubmit={handleSubmitItem}>
                    <div className="mb-3">
                        <label htmlFor="InputItem" className="form-label">Insira o produto ou peça a ser cadastrado</label>
                        <input type="text" className="form-control" id="InputItem" aria-describedby="InputItemHelp" />
                        <div id="InputItemHelp" className="form-text">Isso será usado em orçamentos</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>

            <div className={styles.formContainer}>
                <form onSubmit={handleSubmitDefeito}>
                    <div className="mb-3">
                        <label htmlFor="InputDefeito" className="form-label">Insira o defeito/problema a ser cadastrado</label>
                        <input type="text" className="form-control" id="InputDefeito" aria-describedby="InputDefeitoHelp" />
                        <div id="InputDefeitoHelp" className="form-text">Isso será usado em entradas</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>

            <MainFooter />
        </ProtectedRoute>
    );
}

export default CadastroBasico;
