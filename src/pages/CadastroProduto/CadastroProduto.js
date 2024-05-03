import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import { ProtectedRoute } from '../../components/ProtectedRoute';
import { useState, useEffect } from 'react';

function CadastroProduto() {
    const navigate = useNavigate(); // Hook para navegação

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await fetch('http://localhost:3042/api/categorias');
                const data = await response.json();
                setCategorias(data);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };

        fetchCategorias();
    }, []);



    return (
        <ProtectedRoute>

            <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Selecione uma categoria</option>
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                        {categoria.categoria}
                    </option>
                ))}
            </select>


        </ProtectedRoute>
    );
}

export default CadastroProduto;
