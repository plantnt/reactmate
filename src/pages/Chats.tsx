import { useState, useEffect } from "react";
import { FaArrowLeft, FaEllipsisV, FaUser } from "react-icons/fa";
import { NavLink} from "react-router-dom";
import { useParams } from 'react-router';


const ChatPage = () => {
    const { userId } = useParams();
    const isLogged = sessionStorage.getItem('supabaseSession');
    const [optionsVisible, setOptionsVisible] = useState<boolean[]>(Array.from({ length: 1 }, () => false));
    const userNames: string[] = ["Distribuidora Juanchito","User de prueba"];
    const messages: string[] = JSON.parse(localStorage.getItem('chatMessages') || '[]') || [
        "Hola caballero",
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

    const toggleOptions = (index: number) => {
        const newOptionsVisible = [...optionsVisible];
        newOptionsVisible[index] = !newOptionsVisible[index];
        setOptionsVisible(newOptionsVisible);
    };

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
     });

    return (
        <>
            <div className="bg-gradient-to-r from-purple-500 to-orange-200 py-8 flex justify-between items-center">
                <NavLink to="/chatHome" className="ml-4 text-white hover:text-gray-200"><FaArrowLeft /></NavLink>
                <h1 className="text-center text-3xl font-bold font-extrawide text-white">Tus Chats</h1>
                <div className="ml-4"></div>
            </div>

            {isLogged ? (
                // Si userId existe, muestra el contenido de la página de chat
                <>
                    <div className="bg-gray-100 min-h-screen max-w-full flex flex-col">
                        <div className="flex-1 overflow-y-auto p-4">
                            {Array.from({ length: 2 }, (_, index) => (
                                <div key={index} className="flex items-start mb-4 border-2 p-2 rounded-lg">
                                    <NavLink to={`/chatView`} className="flex items-start w-full">
                                        <div className="flex-shrink-0 text-purple-500">
                                            <FaUser className="h-8 w-8" />
                                        </div>
                                        <div className="ml-2 mt-1">
                                            <p className="text-sm font-medium text-gray-900 font-sans">{userNames[index]}</p>
                                        </div>
                                    </NavLink>
                                    <div className="ml-auto">
                                        <button onClick={() => toggleOptions(index)} className="text-gray-400 hover:text-gray-600">
                                            <FaEllipsisV />
                                        </button>
                                        {optionsVisible[index] && (
                                            <div className="absolute z-10 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                                <NavLink to="/profileView" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-sans">Ver Perfil</NavLink>
                                                <button onClick={() => console.log("Eliminar chat")} className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200 font-sans">Eliminar Chat</button>
                                                <button onClick={() => console.log("Fijar chat")} className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200 font-sans">Fijar Chat</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                // Si userId no existe, muestra un mensaje
                
                <h1 className="text-center p-44 bg-white-500 text-black"  >Por favor, inicia sesión para acceder al chat. <NavLink to="/logIn"><span className="text-purple-500">inicia sesion</span></NavLink></h1>
            
            )}
        </>
    );
};

export default ChatPage;

