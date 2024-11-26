import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        birthdate: '',
        password: '',
        confirmPassword: ''
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
    
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas deben ser iguales.");
      return;
    }

    console.log('Registration attempt:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h2 className="text-center text-3xl font-bold text-[#2fb5b1] mb-8">Registrarse</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="sr-only">Usuario</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2fb5b1]"
                placeholder="Usuario"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2fb5b1]"
                placeholder="Email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">Telefono</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2fb5b1]"
                placeholder="Telefono"
              />
            </div>

            <div>
              <label htmlFor="birthdate" className="sr-only">Fecha de Nacimiento</label>
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                required
                value={formData.birthdate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2fb5b1]"
                placeholder="DD-MM-YYYY"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2fb5b1]"
                placeholder="Contraseña"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="sr-only">Repite tu Contraseña</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2fb5b1]"
                placeholder="Repite tu Contraseña"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2fb5b1] text-white py-3 rounded-lg hover:bg-[#27a09a] transition duration-300 text-xl font-bold"
            >
              Registrarse
            </button>
          </form>

          <div className="mt-4 text-center">
            <a className="text-[#2fb5b1] text-lg hover:underline cursor-pointer" onClick={()=>{navigate('/login')}}>
              ¿Ya tienes cuenta? Inicia Sesion
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;