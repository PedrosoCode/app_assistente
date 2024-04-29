import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate para redirecionamento

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = async (e) => {
    e.preventDefault(); // Impede o comportamento padrão de submissão do formulário

    try {
      // Substitua 'http://localhost:3042/login' pelo seu URL correto de API
      const response = await axios.post('http://localhost:3042/login', {
        email,
        password
      });

      localStorage.setItem('token', response.data.token); // Armazenar o token no localStorage
      navigate('/'); // Redirecionar para a página protegida
    } catch (error) {
      alert('Login failed: ' + error.response.data.error); // Exibir erro de login
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Login Page</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">Log In</button>
            <button type="button" className="btn btn-secondary w-100" onClick={() => navigate('/cadastrar')}>Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
