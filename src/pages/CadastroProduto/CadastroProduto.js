import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import { ProtectedRoute } from '../../components/ProtectedRoute';
import { useState, useEffect } from 'react';
import axios from 'axios';

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


        const [file, setFile] = useState(null);
        const handleFileChange = event => {
          setFile(event.target.files[0]);
        };
      
        const handleFormSubmit = async event => {
          event.preventDefault();
      
          if (!file) {
            alert('Por favor, selecione uma imagem para fazer upload.');
            return;
          }
      
          const formData = new FormData();
          formData.append('image', file);
      
          try {
            const response = await axios.post('http://localhost:3042/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            alert('Upload realizado com sucesso: ' + response.data.path);
          } catch (error) {
            console.error('Erro no upload:', error);
            alert('Erro ao fazer upload da imagem.');
          }
        };



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

            <div class="mb-3">
                <label for="NomeProduto" class="form-label">Email address</label>
                <input type="text" class="form-control" id="NomeProduto" placeholder="Nome do Produto"></input>
            </div>
            <div class="mb-3">
                <label for="TextoProduto" class="form-label">Insira uma descrição sobre o produto</label>
                <textarea class="form-control" id="TextoProduto" rows="3"></textarea>
            </div>

            <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Selecione a imagem para ser a capa do produto</h1>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit">Upload</button>
      </form>
      <form onSubmit={handleFormSubmit}>
        <h1>Selecione uma ou mais imagems para serem detalhes do produto</h1>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit">Upload</button>
      </form>
    </div>


        </ProtectedRoute>
    );
}

export default CadastroProduto;
