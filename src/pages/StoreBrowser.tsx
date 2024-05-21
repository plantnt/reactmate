import { Pagination } from "antd";
import { FaArrowLeft, FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { FaUser } from "react-icons/fa";
import textLogo from '../assets/textLogo.png';
import { useEffect, useState } from "react";

const categories = ["Venta por mayor", "Venta por detal", "Fabricación artesanal", "Compra-venta", "Restauración", "Tapizados y decoración", "Negocio"];

function StoreCard({ type }) {
    return (
        <NavLink to="/profilePageView">
            <Card className={`w-[20rem] bg-white color-black border-[2px] rounded-lg flex ${type}`}>
                {/* Foto de perfil del usuario */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg m-2 flex items-center justify-center">
                    <FaUser className="text-gray-500 text-2xl" />
                </div>
                <Card.Body className="p-3 flex flex-col justify-center">
                    <Card.Text className="font-bold">
                        Tienda registrada
                    </Card.Text>
                    <Card.Title className="text-gray-400">{type}</Card.Title>
                    {/* Agrega más detalles del usuario aquí */}
                </Card.Body>
            </Card>
        </NavLink>
    );
}

export default function StoreBrowser() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [allCards, setAllCards] = useState([]); // Almacena todas las tarjetas sin filtrar
    const [filteredCards, setFilteredCards] = useState([]); // Almacena las tarjetas filtradas

    // Generar tipos de negocios aleatorios para las tarjetas
    useEffect(() => {
        const randomTypes = Array.from({ length: 12 }, () => {
            return categories[Math.floor(Math.random() * categories.length)];
        });
        setAllCards(randomTypes); // Almacena todas las tarjetas sin filtrar
        setFilteredCards(randomTypes); // Inicialmente, muestra todas las tarjetas sin filtrar
    }, []);

    // Filtrar las tarjetas basadas en la categoría seleccionada
    useEffect(() => {
        if (selectedCategory === "") {
            setFilteredCards(allCards); // Si no hay una categoría seleccionada, muestra todas las tarjetas sin filtrar
        } else {
            const filtered = allCards.filter(type => type === selectedCategory);
            setFilteredCards(filtered); // Filtra las tarjetas basadas en la categoría seleccionada
        }
    }, [selectedCategory, allCards]);

    return (
        <>
            <div className="relative bg-gray-50 min-h-screen max-w-full pl-10">
                <div className="bg-gradient-to-r from-purple-400 to-purple-300 py-4 -ml-10 flex justify-center items-center">
                <NavLink to="/chatHome" className="ml-4 text-white hover:text-gray-200 absolute left-0"><FaArrowLeft /></NavLink>
                    <h1 className="flex text-3xl font-bold text-white text-center m-4">
                        Negocios de <img src={textLogo} className="px-2 mx-2 py-1 my-1 sm:block w-26 h-7 hidden bg-purple-400 rounded fill-current" />
                    </h1>
                </div>

                <div className="flex-col mr-20">
                    <div className="flex pt-6 pr-4">
                        <div className="flex items-center pl-10 pr-20 flex-grow mb-4">
                            <input type="text" placeholder="Busca negocios registrados..." className="bg-slate-200 rounded-l-3xl outline-none px-4  h-9 text-gray-900 w-full" />
                            <button className="rounded-r-3xl h-9 w-14 bg-purple-400 cursor-pointer">
                                <FaMagnifyingGlass className="text-white ml-[18.5px]" />
                            </button>
                        </div>

                        <div className="justify-center mb-4 flex">
                            <h1 className="pt-2 pr-3 text-gray-400">Filtrar:</h1>
                            <select
                                className="border-2 bg-white border border-gray-200 rounded-md py-2 px-4 shadow-sm text-sm focus:outline-none focus:border-indigo-500"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">Todas las categorías</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="justify-center text-center mr-4 ml-10 py-1 rounded-lg border-2 border-gray-200">
                        <h4 className="py-1">¿Quieres aparecer aquí? Registra tu negocio en la comunidad furnimate.</h4>
                        <NavLink to='/storeSignup'>
                            <button className="bg-purple-400 hover:bg-white hover:text-purple-500 hover:border-purple-500 transition duration-300 border-2 border-purple-500 text-white font-bold py-2 mb-2 px-4 rounded items-center text-center ho">
                                <span className="text-base font-rounded">Registrate</span>
                            </button>
                        </NavLink>
                    </div>
                </div>

                <div className="grid grid-cols-3 ml-1 gap-4 pt-4 p-8">
                    {filteredCards.map((type, index) => (
                        <StoreCard key={index} type={type} />
                    ))}
                </div>
            </div>
            <div className="bg-gray-50 pb-8 text-center">
                <Pagination className="self-center w-full" defaultCurrent={1} total={50}></Pagination>
            </div>
        </>
    );
}
