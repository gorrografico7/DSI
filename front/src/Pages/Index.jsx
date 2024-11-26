import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'; 
import { useState } from "react";

function Index() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  return (
    <div className="w-full min-h-screen bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="w-[340px]">
            LOGO
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => { navigate('/register') }} className="text-[#48cfcb] text-2xl font-semibold">Registrarse</button>
            <div className="bg-[#48cfcb]/95 rounded-[10px] shadow px-4 py-2">
              <button onClick={() => { navigate('/login') }} className="text-white text-xl font-semibold">Iniciar Sesion</button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto mb-8">
          <form onSubmit={handleSubmit} className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Buscar..."
              className="w-full p-2 pl-4 pr-10 text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-[#2fb5b1]"
            />
            <button type="submit" className="p-2 bg-[#2fb5b1] text-white">
              <FaSearch size={20} />
            </button>
          </form>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-[#2fb5b1] text-4xl font-bold">Preparate para Viajar</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#f1f1f1] rounded-[5px] shadow p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Manejo de Intinerarios</h3>
            <p className="text-lg">Podras visualizar toda tu agenda de viaje con nostotros mediante el portal ¡Registrate!</p>
          </div>

          <div className="bg-[#f1f1f1] rounded-[5px] shadow p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Servicio al Cliente</h3>
            <p className="text-lg">Ofrecemos un excelente servicio al cliente para todo tipo de situaciones</p>
          </div>

          <div className="bg-[#f1f1f1] rounded-[5px] shadow p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Requisitos de Viaje</h3>
            <p className="text-lg">Requisitos los cuales son indispensables para esta nueva aventura</p>
          </div>
        </div>

        <div className="bg-[#f1f1f1] rounded-[10px] shadow p-8 mb-16">
          <h2 className="text-[#2fb5b1] text-3xl font-semibold text-center mb-8">Lugares que te recomendamos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Cancún', 'Medellín', 'París', 'Ibiza', 'Cartagena', 'Lisboa'].map((place, index) => (
              <div key={index} className="bg-[#f1f1f1] rounded-[5px] shadow p-4 text-center">
                <h3 className="text-2xl font-semibold">{place}</h3>
                <div className="text-[#117401] text-5xl">^</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {['Medellín', 'Cartagena', 'Cancún'].map((destination, index) => (
            <div key={index} className="bg-white rounded-[10px] shadow">
              <img
                className="w-full h-64 object-cover rounded-t-[10px]"
                src={`https://via.placeholder.com/400x300?text=${destination}`}
                alt={destination}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{destination}</h3>
                <button className="w-full bg-[#2fb5b1] text-white text-xl font-semibold py-3 rounded-[10px]">
                  COMPRAR
                </button>
              </div>
            </div>
          ))}
        </div>

        <footer className="bg-[#f1f1f1] rounded-[30px] shadow p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-[#f1f1f1] border border-black p-2 flex items-center">
                  <img className="w-8 h-8 mr-2" src="https://via.placeholder.com/32x32" alt="Language" />
                  <span className="text-xl font-semibold">Español</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <img className="w-8 h-8" src="https://via.placeholder.com/32x32" alt="Social" />
                <img className="w-8 h-8" src="https://via.placeholder.com/32x32" alt="Social" />
              </div>
            </div>
            <div className="grid gap-4">
              <a href="#" className="text-[#2fb5b1] text-xl font-semibold">Presentacion</a>
              <a href="#" className="text-[#2fb5b1] text-xl font-semibold">Ayuda</a>
              <a href="#" className="text-[#2fb5b1] text-xl font-semibold">Como funciona Sky Ride</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Index;
