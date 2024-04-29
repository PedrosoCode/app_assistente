import React from 'react';
import { Navigate } from 'react-router-dom';

// Certifique-se de que isAuthenticated está definido corretamente aqui ou importado de outro lugar
const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
}

export function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
}
