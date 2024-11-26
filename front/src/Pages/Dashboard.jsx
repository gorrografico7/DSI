import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext';

function Dashboard() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [email, setEmail] = useState(null);  // Aquí guardamos el email
    const { logout } = useAuth();

    // Función que obtiene los días del mes
    const getDaysInMonth = (month, year) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    // Función que obtiene el primer día del mes
    const getFirstDayOfMonth = (month, year) => {
        const date = new Date(year, month, 1);
        return date.getDay();
    };

    // Hook para cargar el email desde sessionStorage
    useEffect(() => {
        const savedEmail = sessionStorage.getItem('email');
        setEmail(savedEmail);  // Asignar el valor del email
    }, []);

    // Obtener los días del mes y el primer día
    const daysInMonth = getDaysInMonth(currentMonth.getMonth(), currentMonth.getFullYear());
    const firstDay = getFirstDayOfMonth(currentMonth.getMonth(), currentMonth.getFullYear());

    // Función para obtener la primera letra del email
    const firstLetter = () => {
        if (email) {
            return email.charAt(0).toUpperCase();  // Obtener la primera letra y convertirla a mayúsculas
        }
        return '';  // Si el email no está cargado, retorna un string vacío
    };

    return (
        <div className="w-full h-screen relative bg-white overflow-auto">
            <div className="w-full h-20 absolute top-0 left-0 bg-white border-b border-black/40 flex justify-between items-center px-8">
                <div className="flex items-center">
                    <div className="w-16 h-16 bg-[#2fb5b1] rounded-full flex items-center justify-center">
                        {/* Mostrar la primera letra del email */}
                        <span className="text-white text-3xl">{firstLetter()}</span>
                    </div>
                </div>
                <div onClick={() => { logout() }} className="text-[#2fb5b1] text-xl font-bold">Cerrar Sesion</div>
            </div>

            <div className="container mx-auto px-4 pt-24">
                <h2 className="text-2xl font-bold mb-6">Mis Paquetes</h2>

                <div className="bg-[#f1f1f1] border border-black p-4">
                    <div className="grid grid-cols-7 gap-2">
                        {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day) => (
                            <div key={day} className="bg-white border border-black text-center p-2">
                                <span className="font-bold">{day}</span>
                            </div>
                        ))}

                        {/* Agregar días vacíos antes del primer día del mes */}
                        {[...Array(firstDay)].map((_, index) => (
                            <div key={index} className="bg-white border border-black"></div>
                        ))}

                        {/* Mostrar los días del mes */}
                        {daysInMonth.map((day) => (
                            <div key={day} className="bg-white border border-black text-center p-2">
                                <span className="font-bold">{day.getDate()}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#f1f1f1]/95 mt-8 py-8">
                    <h2 className="text-2xl font-bold mb-6 px-4">Mis Paquetes</h2>
                    <div className="flex overflow-x-auto gap-6 px-4">
                        <div className="bg-white rounded-lg shadow-lg p-4 flex-none w-64">
                            <img
                                src="https://via.placeholder.com/369x304"
                                alt="Medellín"
                                className="w-full rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">Medellín</h3>
                            <button className="w-full bg-[#2fb5b1] text-white font-semibold py-2 rounded-lg">
                                INFORMACION
                            </button>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-4 flex-none w-64">
                            <img
                                src="https://via.placeholder.com/369x304"
                                alt="Medellín"
                                className="w-full rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">Medellín</h3>
                            <button className="w-full bg-[#2fb5b1] text-white font-semibold py-2 rounded-lg">
                                INFORMACION
                            </button>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-4 flex-none w-64">
                            <img
                                src="https://via.placeholder.com/336x304"
                                alt="Cartagena"
                                className="w-full rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">Cartagena</h3>
                            <button className="w-full bg-[#2fb5b1] text-white font-semibold py-2 rounded-lg">
                                INFORMACION
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#f1f1f1]/95 mt-8 py-8">
                    <h2 className="text-2xl font-bold mb-6 px-4">Rembolsos</h2>
                    <p className="text-lg mb-4">Tienes 1 rembolso(s) pendientes</p>

                    <div className="flex overflow-x-auto gap-6 px-4">
                        <div className="bg-white rounded-lg shadow-lg p-4 flex-none w-64">
                            <img
                                src="https://via.placeholder.com/336x304"
                                alt="Cartagena"
                                className="w-full rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-4">Cartagena</h3>
                            <button className="w-full bg-[#2fb5b1] text-white font-semibold py-2 rounded-lg">
                                INFORMACION
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
