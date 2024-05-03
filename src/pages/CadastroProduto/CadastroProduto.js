import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ProtectedRoute } from '../../components/ProtectedRoute';

function CadastroProduto() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [descricaoProduto, setDescricaoProduto] = useState('');
    const [capa, setCapa] = useState(null);
    const [detalhes, setDetalhes] = useState([]);

    useEffect(() => {
        async function fetchCategorias() {
            try {
                const response = await fetch('http://localhost:3042/api/categorias');
                const data = await response.json();
                setCategorias(data);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        }
        fetchCategorias();
    }, []);

    const handleCapaChange = event => {
        setCapa(event.target.files[0]);
    };

    const handleDetalhesChange = (event, index) => {
        const newDetalhes = [...detalhes];
        newDetalhes[index] = event.target.files[0];
        setDetalhes(newDetalhes);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        if (!capa || !nomeProduto || !descricaoProduto || !categoriaSelecionada) {
            alert('Por favor, preencha todos os campos e selecione uma imagem para a capa.');
            return;
        }

        const formData = new FormData();
        formData.append('capa', capa);
        detalhes.forEach((file, index) => {
            if (file) formData.append(`detalhe${index + 1}`, file);
        });
        formData.append('nome', nomeProduto);
        formData.append('descricao', descricaoProduto);
        formData.append('categoria', categoriaSelecionada);

        try {
            const response = await axios.post('http://localhost:3042/api/produto/cadastro', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Produto cadastrado com sucesso: ' + response.data.message);
            navigate('/alguma-rota-apos-cadastro'); // Atualize conforme necessário
        } catch (error) {
            console.error('Erro no cadastro:', error);
            alert('Erro ao cadastrar o produto.');
        }
    };

    return (
        <ProtectedRoute>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <select className="form-select form-select-lg mb-3" aria-label="Seleção de categoria"
                            value={categoriaSelecionada} onChange={e => setCategoriaSelecionada(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        {categorias.map(categoria => (
                            <option key={categoria.id} value={categoria.id}>{categoria.categoria}</option>
                        ))}
                    </select>
                    <div className="mb-3">
                        <label htmlFor="NomeProduto" className="form-label">Nome do Produto</label>
                        <input type="text" className="form-control" id="NomeProduto" placeholder="Nome do Produto"
                               value={nomeProduto} onChange={e => setNomeProduto(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="TextoProduto" className="form-label">Descrição do Produto</label>
                        <textarea className="form-control" id="TextoProduto" rows="3" value={descricaoProduto}
                                  onChange={e => setDescricaoProduto(e.target.value)}></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="capaInput" className="form-label">Capa do Produto</label>
                        <input type="file" className="form-control" id="capaInput" onChange={handleCapaChange} accept="image/*" />
                    </div>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="mb-3">
                            <label htmlFor={`detalheInput${index + 1}`} className="form-label">{`Imagem de Detalhe ${index + 1}`}</label>
                            <input type="file" className="form-control" id={`detalheInput${index + 1}`}
                                   onChange={(e) => handleDetalhesChange(e, index)} accept="image/*" />
                        </div>
                    ))}
                    
                    <button type="submit" className="btn btn-primary">Cadastrar Produto</button>
                </form>
            </div>
        </ProtectedRoute>
    );
}

export default CadastroProduto;
