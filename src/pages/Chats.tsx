import { FaArrowLeft, FaEllipsisV, FaUser } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ChatPage = () => {
    // Creamos un estado para controlar la visibilidad de las opciones de cada usuario
    const [optionsVisible, setOptionsVisible] = useState(Array.from({ length: 10 }, () => false));

    // Función para cambiar la visibilidad de las opciones de un usuario específico
    const toggleOptions = (index) => {
        const newOptionsVisible = [...optionsVisible];
        newOptionsVisible[index] = !newOptionsVisible[index];
        setOptionsVisible(newOptionsVisible);
    };

    // Array de nombres de usuarios
    const userNames = ["Juan", "María", "Carlos", "Laura", "Pedro", "Ana", "Luis", "Sofía", "David", "Elena"];

    // Array de mensajes de ejemplo relacionados con muebles
    const messages = [
        "¡Acabo de comprar un nuevo sofá para mi sala de estar!",
        "Estoy buscando una mesa de centro para mi sala.",
        "¿Alguien conoce una buena tienda de muebles en la zona?",
        "Estoy renovando mi dormitorio y necesito un nuevo armario.",
        "¡He encontrado una gran oferta en una silla de escritorio!",
        "Busco inspiración para redecorar mi cocina.",
        "¿Qué opinan sobre los muebles de estilo vintage?",
        "Necesito ayuda para elegir cortinas para mi sala.",
        "¡Acabo de montar mis nuevos estantes en el estudio!",
        "¿Alguien sabe dónde puedo conseguir una mesa de comedor extensible?"
    ];

    return (
        <>
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-8 flex justify-between items-center">
                {/* Botón de regreso */}
                <NavLink to="/chatHome" className="ml-4 text-white hover:text-gray-200"><FaArrowLeft /></NavLink>
                {/* Título */}
                <h1 className="text-center text-3xl font-bold font-extrawide text-white">
                    Chat
                </h1>
                <div className="ml-4"></div>
            </div>

            <div className="bg-gray-100 min-h-screen max-w-full flex flex-col">
                <div className="flex-1 overflow-y-auto p-4">
                    {/* Usuarios */}
                    {Array.from({ length: 10 }, (_, index) => (
                        <div key={index} className="flex items-start mb-4">
                            <NavLink to={`/chatView`} className="flex items-start w-full">
                                <div className="flex-shrink-0">
                                    <FaUser className="text-purple-500 h-8 w-8" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">{userNames[index]}</p>
                                    <p className="text-sm text-gray-600">{messages[index]}</p>
                                </div>
                            </NavLink>
                            <div className="ml-auto">
                                <button onClick={() => toggleOptions(index)} className="text-gray-400 hover:text-gray-600">
                                    <FaEllipsisV />
                                </button>
                                {/* Opciones */}
                                {optionsVisible[index] && (
                                    <div className="absolute z-10 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                        <NavLink to="#">Opción 1</NavLink>
                                        <NavLink to="#">Opción 2</NavLink>
                                        <NavLink to="#">Opción 3</NavLink>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ChatPage;
