import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-6xl font-bold text-[#2fb5b1]">404</h1>
        <p className="text-xl text-gray-700 mb-6">Página no encontrada</p>
        <p className="text-lg text-gray-500 mb-6">
          Lo sentimos, la página que buscas no existe.
        </p>
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-[#2fb5b1] text-white font-semibold rounded-lg hover:bg-[#27a09a] transition duration-300"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default NotFound;
