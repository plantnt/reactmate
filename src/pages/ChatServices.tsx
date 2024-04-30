import { useState } from "react";
import { FaCouch, FaPaperclip } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ServicesChat = () => {
    const isLogged = sessionStorage.getItem('supabaseSession');
    const [posts, setPosts] = useState<any[]>([]);
    const [newPost, setNewPost] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [userDetails, setUserDetails] = useState({ name: "Nombre de Usuario", type: "", action: "" });

    const handleCheckboxChange = (option: string) => {
        setSelectedOption(option);
        setUserDetails((prevDetails) => ({ ...prevDetails, type: option }));
    };

    const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(e.target.value);
        setUserDetails((prevDetails) => ({ ...prevDetails, action: e.target.value }));
    };

    const createPost = () => {
        const newPostDetails = { ...userDetails, action: newPost };
        setPosts([...posts, newPostDetails]);
        setNewPost("");
        setSelectedOption("");
        setUserDetails({ name: "Nombre de Usuario", type: "", action: "" });
    };

    return (
        <>
            <div className="relative bg-gray-50 pt-8 -pb-3">
                <h1 className="text-5xl font-bold font-extrawide text-purple-400 ml-4 flex">
                    Foro <FaCouch className="ml-4 -mt-2 text-7xl"/>     
                </h1>
            </div>
            {isLogged ? (
                <>
                    <div className="relative bg-gray-50 min-h-screen max-w-full overflow-y-auto">
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
                                        <input
                                            type="checkbox"
                                            value="Usuario"
                                            checked={selectedOption === "Usuario"}
                                            onChange={() => handleCheckboxChange("Usuario")}
                                        />
                                        Usuario
                                    </label>
                                    <label className="mr-4">
                                        <input
                                            type="checkbox"
                                            value="Emprendedor"
                                            checked={selectedOption === "Emprendedor"}
                                            onChange={() => handleCheckboxChange("Emprendedor")}
                                        />
                                        Emprendedor
                                    </label>
                                    <label className="mr-4">
                                        <input
                                            type="checkbox"
                                            value="Empresa"
                                            checked={selectedOption === "Empresa"}
                                            onChange={() => handleCheckboxChange("Empresa")}
                                        />
                                        Empresa
                                    </label>
                                    <label className="mx-6"></label>
                                    <label className="mr-4">
                                        <input
                                            type="checkbox"
                                            value="Busco"
                                            checked={selectedOption === "Busco"}
                                            onChange={() => handleCheckboxChange("Busco")}
                                        />
                                        Busco
                                    </label>
                                    <label className="mr-4">
                                        <input
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
                                        className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600 flex mr-2"
                                        onClick={createPost}
                                    >
                                        Publicar
                                    </button>
                                    <button className="rounded-lg py-3 px-4 bg-gray-300 text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50 font-sans">
                                        <FaPaperclip />
                                    </button>
                                </div>
                            </div>

                            <div className="w-1/2">
                                <h1 className="text-2xl font-bold text-gray-400 pt-4 pl-2 pb-2">Vista previa del mensaje</h1>
                                <div className="p-4 bg-white rounded-lg my-4 border-2 flex flex-col h-auto">
                                    <div className="flex items-start">
                                        <img alt="User" className="w-12 h-12 rounded-full mt-1 mr-4" />
                                        <div className="flex flex-col">
                                            <h2 className="font-semibold text-gray-800">{userDetails.name}</h2>
                                            <p className="text-gray-700 flex-1 overflow-auto">{userDetails.action}</p>
                                            <div className="flex mt-2">
                                                <NavLink to="/chatingPage" className="mr-4 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600">Chat</NavLink>
                                                <NavLink to="/profilePageView" className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-600">Perfil</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <hr className="-mt-3 mx-4 border-gray-300" /> {/* Línea separadora */}

                        <div className="p-4">
                            <h2 className="font-semibold mb-4 text-4xl">Publicaciones</h2>
                            {posts.map((post, index) => (
                                <div key={index} className="border p-2 mb-2">
                                    <h2 className="font-semibold mb-2">{post.name}</h2>
                                    <h2 className="font-semibold mb-2">{post.type}</h2>
                                    <h2 className="font-semibold mb-2">{post.action}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <h1 className="text-center bg-white-500 text-black">Por favor, inicia sesión para acceder al chat. <NavLink to="/logIn"><span className="text-purple-500">Inicia sesión</span></NavLink></h1>
            )}
        </>
    );
};

export default ServicesChat;
