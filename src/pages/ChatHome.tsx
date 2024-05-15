import { SetStateAction, useState } from 'react';
import { FaHammer, FaRegCommentDots, FaStore, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import furniLogo from '../assets/furniLogo.png';

const Cart = () => {
    const [hoverText, setHoverText] = useState('');

    const handleHover = (text: SetStateAction<string>) => {
        setHoverText(text);
    };

    return (
        <div className="mx-auto">
            <div className="max-w-full pl-10 pb-10">
                <div className="items-center max-w-full">
                    <div className="flex max-w-full pl-60 pt-10">
                        <div className="pr-20 pt-20">
                            <h1 className="text-center text-xl font-semibold font-extrawide text-gray-800">
                                <img src={furniLogo} className="w-40 h-30 opacity-40" alt="Furni Logo" />
                                <h1 className="pb-4"></h1>
                                {hoverText}
                            </h1>
                        </div>
                        <div className="py-2 px-2 mr-20 border-2 border-gray-50 rounded-lg basis-1/2">
                            <NavLink to="/chatingPage" className="w-full">
                                <button
                                    className="rounded-lg w-full bg-blue-400 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-500 transition duration-300 border-2 border-blue-500 text-white font-bold py-4 px-6 flex items-center mb-2"
                                    onMouseEnter={() => handleHover('Ir a tus chats')}
                                    onMouseLeave={() => handleHover('Comunidad.')}
                                >
                                    <FaRegCommentDots className="size-8 inline-block text-2xl" />
                                    <span className="text-lg font-rounded w-full">Chat</span>
                                </button>
                            </NavLink>
                            <NavLink to="/storeBrowser">
                                <button
                                    className="rounded-lg w-full bg-purple-400 hover:bg-purple-100 hover:text-purple-400 hover:border-purple-400 transition duration-300 border-2 border-purple-500 text-white font-bold py-4 px-6 flex items-center mb-2"
                                    onMouseEnter={() => handleHover('Buscar negocios')}
                                    onMouseLeave={() => handleHover('Comunidad.')}
                                >
                                    <FaStore className="text-white-400 size-8 inline-block mr-2 text-2xl" />
                                    <span className="text-lg font-rounded w-full">Emprendimientos</span>
                                </button>
                            </NavLink>
                            <NavLink to="/chatingServices">
                                <button
                                    className="rounded-lg w-full bg-orange-300 hover:bg-orange-100 hover:text-orange-500 hover:border-furniorange transition duration-300 border-2 border-orange-400 text-white font-bold py-4 px-6 flex items-center mb-2"
                                    onMouseEnter={() => handleHover('Explorar servicios')}
                                    onMouseLeave={() => handleHover('Comunidad.')}
                                >
                                    <FaHammer className="hover:text-furniorange size-8 inline-block mr-2 text-2xl" />
                                    <span className="text-lg w-full font-rounded text-gray-white">Foro</span>
                                </button>
                            </NavLink>
                            <NavLink to="/userBrowser">
                                <button
                                    className="rounded-lg w-full bg-gray-200 hover:bg-gray-50 hover:text-gray-700 hover:border-gray-300 transition duration-300 border-2 border-gray-300 text-gray-700 font-semibold py-4 px-6 flex items-center"
                                    onMouseEnter={() => handleHover('Busca usuarios')}
                                    onMouseLeave={() => handleHover('Comunidad.')}
                                >
                                    <FaUser className="text-gray-400 inline-block mr-2 text-3xl" />
                                    <span className="text-lg w-full font-rounded text-gray-400">Buscar usuarios...</span>
                                </button>
                            </NavLink>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
