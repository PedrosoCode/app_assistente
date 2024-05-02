import React, { useState } from 'react';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import MainNavbar from '../../components/MainNavbar';
import MainFooter from '../../components/MainFooter';
import InputMask from 'react-input-mask';
import axios from 'axios';

function EntradaMaquina() {
    const [isCnpj, setIsCnpj] = useState(true);
    const [formData, setFormData] = useState({
        nome_contato: '',
        telefone: '',
        endereco: '',
        nome_fantasia: '',
        razao_social: '',
        cpf_cnpj: '',
        tipo_pessoa: 'J' // Default to CNPJ
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleToggle = () => {
        setIsCnpj(!isCnpj);
        setFormData({
            ...formData,
            cpf_cnpj: '',
            tipo_pessoa: isCnpj ? 'F' : 'J' // Toggle between CPF and CNPJ
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3042/api/cadastro', formData);
            console.log('Resposta do servidor:', response.data);
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            console.error('Erro no cadastro:', error.response.data);
            alert('Erro ao realizar o cadastro. Verifique os dados e tente novamente.');
        }
    };

    return (
        <ProtectedRoute>
            <MainNavbar />
            <div className="container mt-5">
                <h2>Cadastro de Cliente</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nome do Contato</label>
                        <input type="text" className="form-control" name="nome_contato" value={formData.nome_contato} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Telefone</label>
                        <input type="text" className="form-control" name="telefone" value={formData.telefone} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Endereço</label>
                        <input type="text" className="form-control" name="endereco" value={formData.endereco} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nome Fantasia</label>
                        <input type="text" className="form-control" name="nome_fantasia" value={formData.nome_fantasia} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Razão Social</label>
                        <input type="text" className="form-control" name="razao_social" value={formData.razao_social} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" checked={isCnpj} onChange={handleToggle} />
                            <label className="form-check-label">{isCnpj ? 'CNPJ' : 'CPF'}</label>
                        </div>
                        <label className="form-label">CPF/CNPJ</label>
                        <InputMask mask={isCnpj ? "99.999.999/9999-99" : "999.999.999-99"} className="form-control" name="cpf_cnpj" value={formData.cpf_cnpj} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
            <MainFooter />
        </ProtectedRoute>
    );
}

export default EntradaMaquina;
