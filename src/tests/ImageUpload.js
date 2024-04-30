import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
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
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Upload de Imagem</h1>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default ImageUpload;
