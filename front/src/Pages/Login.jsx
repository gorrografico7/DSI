import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function Login() {
  const navigate = useNavigate();
  const {login} = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    if(login(formData.email)){
      navigate('/dashboard');
    }else{
      alert('datos incorrectos.');
    }
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h2 className="text-center text-3xl font-bold text-[#2fb5b1] mb-8">Iniciar Sesion</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="text"
                name="email"
                required
                onChange={(e) => handleChange(e)}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2fb5b1]"
                placeholder="Email"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                type="password"
                name="password"
                required
                onChange={(e) => handleChange(e)}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2fb5b1]"
                placeholder="Contraseña"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2fb5b1] text-white py-3 rounded-lg hover:bg-[#27a09a] transition duration-300 text-xl font-bold"
            >
              Iniciar Sesion
            </button>
          </form>

          <div className="mt-6 text-center">
            <a 
              href="#" 
              className="text-[#2fb5b1] hover:underline text-lg"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="mt-4 text-center">
            <p className="text-[#2fb5b1] text-lg hover:underline cursor-pointer" onClick={()=>{navigate('/register')}}>
              ¿No tienes cuenta? Registrate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;