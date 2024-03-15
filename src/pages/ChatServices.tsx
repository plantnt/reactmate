import { useState } from "react";

const ServicesChat = () => {
    // Estado para las publicaciones de consumidores
    const [consumerPosts, setConsumerPosts] = useState<any[]>([]);
    // Estado para almacenar el contenido de la nueva publicación del consumidor
    const [newConsumerPost, setNewConsumerPost] = useState("");

    // Estado para las publicaciones de empresarios
    const [businessPosts, setBusinessPosts] = useState<any[]>([]);
    // Estado para almacenar el contenido de la nueva publicación del empresario
    const [newBusinessPost, setNewBusinessPost] = useState("");

    // Función para crear una nueva publicación como un consumidor
    const createConsumerPost = () => {
        setConsumerPosts([...consumerPosts, newConsumerPost]);
        // Limpiar el campo de entrada después de agregar la publicación
        setNewConsumerPost("");
    };

    // Función para crear una nueva publicación como un empresario
    const createBusinessPost = () => {
        setBusinessPosts([...businessPosts, newBusinessPost]);
        // Limpia los inputs despues de haber publicado
        setNewBusinessPost("");
    };

    return (
        <>
            <div className="relative bg-gray-50 py-8">
                <h1 className="text-center text-4xl font-bold font-extrawide text-gray-600">
                    Pide o ofrece tus servicios de mueblería en este apartado *Página en proceso*
                </h1>
            </div>

            <div className="relative bg-gray-50 min-h-screen max-w-full overflow-y-auto">
                {/* Sección para añadir publicaciones de consumidores */}
                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-4">Añade tu publicación como un consumidor</h2>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={4}
                        value={newConsumerPost}
                        onChange={(e) => setNewConsumerPost(e.target.value)}
                        placeholder="Añade tu publicación como un consumidor: publica tu petición y tus datos de contacto para empezar!"
                    />
                    <input type="file" accept="image/*" />
                    <button
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={createConsumerPost}
                    >
                        Publicar
                    </button>
                </div>

                <br></br>
                <h1>Las subidas de imagen se realizarán con Cloudinary.</h1>

                {/* Sección para añadir publicaciones de empresarios */}
                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-4">Añadir publicación de empresario</h2>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={4}
                        value={newBusinessPost}
                        onChange={(e) => setNewBusinessPost(e.target.value)}
                        placeholder="Añade tu publicación como un empresario: publica tu petición y tus datos de contacto para empezar!"
                    />
                    <input type="file" accept="image/*" />
                    <button
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={createBusinessPost}
                    >
                        Publicar
                    </button>
                </div>

                {/* Sección para mostrar las publicaciones de consumidores */}
                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-4">Publicaciones de consumidores:</h2>
                    {consumerPosts.map((post, index) => (
                        <div key={index} className="border p-2 mb-2">{post}</div>
                    ))}
                </div>

                {/* Sección para mostrar las publicaciones de empresarios */}
                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-4">Publicaciones de empresarios:</h2>
                    {businessPosts.map((post, index) => (
                        <div key={index} className="border p-2 mb-2">{post}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ServicesChat;
