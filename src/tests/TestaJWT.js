import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import { ProtectedRoute } from '../components/ProtectedRoute';
import placeholderImage from '../imgs/placeholders/placeholder.webp'

function TestaJWT() {
  const navigate = useNavigate(); // Hook para navegação

  // Função para lidar com o logoff
  const handleLogoff = () => {
    localStorage.removeItem('token'); // Remove o token do localStorage
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <ProtectedRoute>
      <div>
        <h1>Sua sessão deu certo!</h1>
        <button onClick={handleLogoff} className="btn btn-warning">Log Off</button> {/* Botão de logoff */}
        yay!
      </div>
      
    </ProtectedRoute>
  );
}

export default TestaJWT;
