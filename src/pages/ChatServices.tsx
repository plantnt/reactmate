import { useState } from "react";
import { FaCouch, FaPaperclip } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ServicesChat = () => {
    const isLogged = sessionStorage.getItem('supabaseSession');
    const [posts, setPosts] = useState<any[]>([]);
    const [newPost, setNewPost] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [userDetails, setUserDetails] = useState({ name: "Nombre de Usuario", type: "", action: "" });
    const [filterOption, setFilterOption] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const handleCheckboxChange = (option: string) => {
        setSelectedOption(option);
        setUserDetails((prevDetails) => ({ ...prevDetails, type: option }));
    };

    const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(e.target.value);
        setUserDetails((prevDetails) => ({ ...prevDetails, action: e.target.value }));
    };

    const handleFilterChange = (option: string) => {
        setFilterOption(option);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const createPost = () => {
        const newPostDetails = { ...userDetails, action: newPost };
        setPosts([...posts, newPostDetails]);
        setNewPost("");
        setSelectedOption("");
        setUserDetails({ name: "Nombre de Usuario", type: "", action: "" });
    };

    const filteredPosts = posts.filter(post => {
        const isMatchFilter = filterOption === "" || post.type === filterOption;
        const isMatchSearch = searchQuery === "" || post.action.toLowerCase().includes(searchQuery.toLowerCase());
        return isMatchFilter && isMatchSearch;
    });

    return (
        <>
            <div className="relative bg-gradient-to-r from-purple-400 to-purple-300 py-6 flex justify-center items-center pb-6 pt-8">
                <h1 className="text-5xl font-bold font-extrawide text-white ml-4 flex">
                    Foro <FaCouch className="ml-4 -mt-2 text-7xl"/>
                </h1>
            </div>
            {isLogged ? (
                <>
                    <div className="relative bg-gray-50 min-h-screen max-w-full overflow-y-auto pt-2">
                        <div className="flex space-x-12">
                            <div className="p-4">
                                <h2 className="text-2xl text-gray-400 font-semibold mb-2">Escribe tu publicación</h2>
                                <textarea
                                    className="w-full p-2 border border-gray-300 rounded"
                                    rows={6}
                                    value={newPost}
                                    onChange={handlePostChange}
                                    placeholder="¡Aquí puedes publicar qué es lo que ofreces o buscas con la comunidad, acompaña tu mensaje con tus datos de contacto para empezar :)"
                                />
                                <div className="flex items-center mb-4">
                                    <label className="mr-4">
                                        <input className="mr-1"
                                            type="checkbox"
                                            value="Usuario"
                                            checked={selectedOption === "Usuario"}
                                            onChange={() => handleCheckboxChange("Usuario")}
                                        />
                                        Usuario
                                    </label>
                                    <label className="mr-4">
                                        <input className="mr-1"
                                            type="checkbox"
                                            value="Emprendedor"
                                            checked={selectedOption === "Emprendedor"}
                                            onChange={() => handleCheckboxChange("Emprendedor")}
                                        />
                                        Emprendedor
                                    </label>
                                    <label className="mr-4">
                                        <input className="mr-1"
                                            type="checkbox"
                                            value="Empresa"
                                            checked={selectedOption === "Empresa"}
                                            onChange={() => handleCheckboxChange("Empresa")}
                                        />
                                        Empresa
                                    </label>
                                    <label className="ml-6 text-gray-300">|</label>
                                    <label className="mx-6"></label>
                                    <label className="mr-4 pl-10">
                                        <input className="mr-1"
                                            type="checkbox"
                                            value="Busco"
                                            checked={selectedOption === "Busco"}
                                            onChange={() => handleCheckboxChange("Busco")}
                                        />
                                        Busco
                                    </label>
                                    <label className="mr-4 pl-10">
                                        <input className="mr-1"
                                            type="checkbox"
                                            value="Ofrezco"
                                            checked={selectedOption === "Ofrezco"}
                                            onChange={() => handleCheckboxChange("Ofrezco")}
                                        />
                                        Ofrezco
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <button
                                        className="px-4 py-2 bg-blue-400 border-blue-500 border-2 text-white rounded-lg hover:bg-blue-600 flex mr-2"
                                        onClick={createPost}
                                    >
                                        Publicar
                                    </button>
                                    <button className="flex rounded-lg py-2 px-4 bg-gray-100 border-gray-300 border-2 text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50 font-sans">
                                        <div className="pt-1 pr-2">
                                            <FaPaperclip className="" />
                                        </div> Adjuntar imagen...
                                    </button>
                                </div>
                            </div>

                            <div className="w-1/2 pb-5 overflow-hidden  max-h-xl"> {/* Agrega la clase overflow-hidden al contenedor */}
                            <h1 className="text-2xl font-semibold text-gray-400 pt-8 pl-2 -mb-2">Vista previa del mensaje</h1>
                            <div className="p-4 bg-white rounded-lg my-4 border-2 flex flex-col h-auto mr-8 overflow-y-auto max-h-96"> {/* Agrega la clase overflow-y-auto y max-h-96 al contenedor de la vista previa */}
                                <div className="flex items-start">
                                    <img alt="User" className="w-12 h-12 rounded-full mt-1 mr-4 p-4 pt-4" />
                                    <div className="flex flex-col">
                                        <h2 className="font-semibold text-gray-800">{userDetails.name}</h2>
                                        <p className="text-gray-700 flex-1 overflow-auto">{userDetails.action}</p>
                                        <div className="flex mt-2">
                                            <NavLink to="/chatingPage" className="mr-4 px-4 py-2 bg-blue-400 border-blue-500 border-2 text-white rounded hover:bg-blue-600">Chat</NavLink>
                                            <NavLink to="/profilePageView" className="px-4 py-2 bg-gray-400 border-gray-500 border-2 text-white rounded hover:bg-gray-600">Perfil</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>

                        <hr className="rounded-lg text-gray-200 border-gray-200" /> {/* Línea separadora */}

                        <div className="p-4 max-w-7xl mr-10">
                            <div className="flex items-center mb-4">
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded mr-4"
                                    placeholder="Buscar por palabras clave..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <select
                                    className="p-2 border border-gray-300 rounded"
                                    value={filterOption}
                                    onChange={(e) => handleFilterChange(e.target.value)}
                                >
                                    <option value="">Todos</option>
                                    <option value="Usuario">Usuario</option>
                                    <option value="Emprendedor">Emprendedor</option>
                                    <option value="Empresa">Empresa</option>
                                    <option value="Busco">Busco</option>
                                    <option value="Ofrezco">Ofrezco</option>
                                </select>
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">Publicaciones</h2>
                            {filteredPosts.map((post, index) => (
                                <div key={index} className="border-2 rounded-lg p-2 mb-2 flex items-center bg-gray-100">
                                    <div className="pl-4">
                                        <img alt="User" className="w-12 h-12 rounded-full mt-1 mr-4" />
                                    </div>
                                    <div className="flex-grow max-w-4xl overflow-hidden">
                                        <p><strong>{post.name}, <label className="text-gray-400">{post.type}</label></strong></p>
                                        <p>{post.action}</p>
                                    </div>
                                    <div className=" px-8 py-4 pt-4">
                                        <NavLink to="/chatingPage" className="mr-4 px-4 py-2 bg-blue-400 border-blue-500 border-2 text-white rounded hover:bg-blue-600">Chat</NavLink>
                                        <NavLink to="/profilePageView" className="px-4 py-2 bg-gray-400 border-gray-500 border-2 text-white rounded hover:bg-gray-600">Perfil</NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <h1 className="text-center bg-white-500 text-black">Por favor, inicia sesión para acceder al chat. <NavLink to="/logIn"><span className="text-purple-500">inicia sesion</span></NavLink></h1>
            )}
        </>
    );
};

export default ServicesChat;
