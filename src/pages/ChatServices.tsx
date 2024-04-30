import { useState } from "react";
import { FaCouch, FaPaperclip, FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

//Propuesta de valor: Si en los demas sitios web no cuentan ni con un chat directo, no cuentan con un espacio
// dedicado a la busqueda u ofrecimiento de productos/servicios, por lo que este es el espacio propicio para
// realizarlo, en un entorno de comunidad exclusivo de la muebleria

const ServicesChat = () => {
    const islogged =sessionStorage.getItem('supabaseSession')
    const [posts, setPosts] = useState<any[]>([]);
    const [newPost, setNewPost] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    const handleCheckboxChange = (option: string) => {
        setSelectedOption(option);
    };

    const createPost = () => {
        const postWithOption = `${selectedOption}: ${newPost}`;
        setPosts([...posts, postWithOption]);
        setNewPost("");
        setSelectedOption("");
    };

    return (
        <>
            <div className="relative bg-gray-100 pt-8 -pb-3">
                <h1 className="text-5xl font-bold font-extrawide text-purple-400 ml-4 flex">
                <NavLink to="/chatHome" className="ml-4 text-white hover:text-gray-200"><FaArrowLeft /></NavLink>
                    Servicios de terceros <FaCouch className="ml-4 -mt-2 text-7xl"/>     
                </h1>
            </div>
            {islogged ? (
                <>
            <div className="relative bg-gray-50 min-h-screen max-w-full overflow-y-auto">
                <div className="p-4">
                    <h2 className="text-2xl text-gray-400 font-semibold mb-2">Añade tu publicación</h2>
                    <textarea
                        className="w-1/2 p-2 border border-gray-300 rounded"
                        rows={6}
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="¡Publica que es lo que buscas u ofreces con la comunidad,! acompaña tu mensaje con tus datos de contacto para empezar :)"
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
                        <label>
                            <input
                                type="checkbox"
                                value="Empresa"
                                checked={selectedOption === "Empresa"}
                                onChange={() => handleCheckboxChange("Empresa")}
                            />
                            Empresa
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

                <hr className="-mt-3 mx-4 border-gray-300" /> {/* Línea separadora */}

                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-4 text-4xl">Publicaciones</h2>
                    {posts.map((post, index) => (
                        <div key={index} className="border p-2 mb-2">{post}</div>
                    ))}
                </div>
            </div>
            </>
            ):(
                <div className="h-full">
                 <h1 className="text-center bg-white-500 text-black">Por favor, inicia sesión para acceder al chat. <NavLink to="/logIn"><span className="text-purple-500">inicia sesion</span></NavLink></h1>
                </div>
                
            )}
        </>
    );
};

export default ServicesChat;
