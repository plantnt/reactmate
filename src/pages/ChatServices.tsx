import { useState } from "react";
import { FaCouch, FaPaperclip } from "react-icons/fa";

const ServicesChat = () => {
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
            <div className="relative bg-gray-50 pt-8 -pb-3">
                <h1 className="text-5xl font-bold font-extrawide text-purple-400 ml-4 flex">
                    Servicios de terceros <FaCouch className="ml-4 -mt-2 text-7xl"/>     
                </h1>
            </div>

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
    );
};

export default ServicesChat;
