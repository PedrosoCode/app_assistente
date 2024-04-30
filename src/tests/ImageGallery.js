import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3042/images');
        setImages(response.data);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={`http://localhost:3042/${img.caminho}`} alt="Upload" style={{ width: '150px', height: '150px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
