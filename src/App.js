import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FooterNavbarDashboard from './pages/FooterNavbarDashboard';
import './bootstrap/bootstrap/css/bootstrap.min.css'
import './bootstrap/bootstrap/js/bootstrap.min'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastrar" element={<SignupPage />} />
        <Route path="/FNDashboard" element={<FooterNavbarDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
