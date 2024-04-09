import { FaArrowLeft, FaPaperPlane, FaPaperclip, FaUser } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Chat = () => {
    // Lista de mensajes de ejemplo
    const [messages, setMessages] = useState([
        { user: "Usuario1", text: "Buenas, estoy interesado en el servicio que ofreces" },
        { user: "Tu", text: "Hola, vale ya te confirmo si tenemos los materiales" },
    ]);

    // Función para enviar un mensaje
    const sendMessage = (e) => {
        e.preventDefault();
        // Agrega un nuevo mensaje a la lista de mensajes
        setMessages([...messages, { user: "Tú", text: e.target.message.value }]);
        // Limpia el campo de entrada de texto después de enviar el mensaje
        e.target.reset();
    };

    return (
        <>
            <div className="bg-gradient-to-r from-purple-500 to-purple-100 py-8 flex justify-between items-center">
                {/* Botón de regreso */}
                <NavLink to="/chatingPage" className="ml-4 text-white hover:text-gray-200"><FaArrowLeft /></NavLink>
                {/* Título */}
                <h1 className="text-center text-3xl font-bold font-extrawide text-white">
                    Chat
                </h1>
                <div className="ml-4"></div>
            </div>

            <div className="bg-gray-100 min-h-screen max-w-full flex flex-col">
                <div className="flex-1 overflow-y-auto p-4">
                    {/* Chat */}
                    {messages.map((message, index) => (
                        <div key={index} className="flex items-start mb-4">
                            <div className="flex-shrink-0">
                                <FaUser className="text-purple-500 h-8 w-8" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900 font-sans">{message.user}</p>
                                <p className="text-sm text-gray-600 font-sans">{message.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Formulario de envío de mensaje */}
                <div className="p-4 bg-white rounded-t-lg flex items-center fixed bottom-0 left-0 right-0">
                    <form onSubmit={sendMessage} className="flex justify-between items-center flex-1 w-full">
                        <input type="text" name="message" className="flex-1 mr-4 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 font-sans" placeholder="Escribe un mensaje..." />
                        <button type="submit" className="py-2 px-6 rounded-full bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50 font-sans">
                            <FaPaperPlane />
                        </button>
                    </form>
                    <button className="ml-4 py-2 px-6 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50 font-sans">
                        <FaPaperclip />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Chat;
