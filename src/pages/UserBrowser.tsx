import { useState } from 'react';
import { useEffect } from 'react';
import { Pagination } from "antd";
import { FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';

// Componente para la tarjeta de usuario
function UserCard1() {
    return (
        <NavLink to="/profilePageView">
            <Card className="w-[20rem] bg-white color-black rounded-lg border-2 flex">
                {/* Foto de perfil del usuario */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg m-2 flex items-center justify-center">
                    <FaUser className="text-gray-500 text-2xl" />
                </div>
                <Card.Body className="p-3 flex flex-col justify-center">
                    <Card.Title className="mb-1">Usuario</Card.Title>
                    <Card.Text className="font-bold mb-1">
                        Usuario
                    </Card.Text>
                    {/* Agrega más detalles del usuario aquí */}
                </Card.Body>
            </Card>
        </NavLink>
    );
}

function UserCard2() {
    return (
        <NavLink to="/profilePageView">
            <Card className="w-[20rem] bg-white color-black rounded-lg border-2 flex">
                {/* Foto de perfil del usuario */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg m-2 flex items-center justify-center">
                    <FaUser className="text-gray-500 text-2xl" />
                </div>
                <Card.Body className="p-3 flex flex-col justify-center">
                    <Card.Title className="mb-1">Emprendedor</Card.Title>
                    <Card.Text className="font-bold mb-1">
                        Empresario
                    </Card.Text>
                    {/* Agrega más detalles del usuario aquí */}
                </Card.Body>
            </Card>
        </NavLink>
    );
}

function UserCard3() {
    return (
        <NavLink to="/profilePageView">
            <Card className="w-[20rem] bg-white color-black rounded-lg border-2 flex">
                {/* Foto de perfil del usuario */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg m-2 flex items-center justify-center">
                    <FaUser className="text-gray-500 text-2xl" />
                </div>
                <Card.Body className="p-3 flex flex-col justify-center">
                    <Card.Title className="mb-1">Empresario</Card.Title>
                    <Card.Text className="font-bold mb-1">
                        Empresa
                    </Card.Text>
                    {/* Agrega más detalles del usuario aquí */}
                </Card.Body>
            </Card>
        </NavLink>
    );
}

export default function UserBrowser() {
    const [userType, setUserType] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    // Función para filtrar los usuarios según el tipo seleccionado
    const filterUsers = () => {
        if (userType === '') {
            setFilteredUsers([]);
            return;
        }

        // Filtrar los usuarios según el tipo seleccionado
        const users = [];
        if (userType === 'user') {
            users.push(<UserCard1 key="user1" />);
            users.push(<UserCard1 key="user2" />);
            users.push(<UserCard1 key="user3" />);
        } else if (userType === 'seller') {
            users.push(<UserCard2 key="seller1" />);
            users.push(<UserCard2 key="seller2" />);
        } else if (userType === 'entrepreneur') {
            users.push(<UserCard3 key="entrepreneur1" />);
            users.push(<UserCard3 key="entrepreneur2" />);
            users.push(<UserCard3 key="entrepreneur3" />);
        }
        setFilteredUsers(users);
    };

    // Llamar a la función de filtrado al cambiar el tipo de usuario
    useEffect(() => {
        filterUsers();
    }, [userType]);

    return (
        <>
            <div className="relative bg-gray-50 min-h-screen max-w-full">
                <div className="bg-gradient-to-r from-furniorange to-orange-200 py-6 flex justify-center items-center">
                <NavLink to="/chatHome" className="ml-4 text-white hover:text-gray-200 absolute left-0"><FaArrowLeft /></NavLink>
                    <h1 className="text-3xl font-bold text-white text-center m-4">
                        Buscador de usuarios
                    </h1>
                </div>
                <div className="flex items-center pt-8 pl-6">
                    <input type="text" className="bg-slate-200 rounded-l-3xl outline-none h-10 text-gray-900 w-[55%]" />
                    <button className="rounded-r-3xl h-10 w-14 bg-orange-300 cursor-pointer mr-16">
                        <FaMagnifyingGlass className="text-white ml-[18.5px]" />
                    </button>
                    <div className="flex items-center ml-4 border-2 p-1 px-3 rounded-lg">
                        <a className="pr-16">Filtrar busqueda:</a>
                        <select
                            className="pl-2 py-2 px-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                        >
                            <option value="">Todos</option>
                            <option value="user">Usuario</option>
                            <option value="seller">Vendedor</option>
                            <option value="entrepreneur">Emprendedor</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 p-8">
                    {filteredUsers.length > 0 ? filteredUsers : (
                        <>
                            <UserCard1 />
                            <UserCard3 />
                            <UserCard1 />
                            <UserCard2 />
                            <UserCard3 />
                            <UserCard2 />
                            <UserCard1 />
                            <UserCard2 />
                            <UserCard3 />
                        </>
                    )}
                </div>
            </div>
            <div className="bg-gray-50 pb-8 text-center">
                <Pagination className="self-center w-full" defaultCurrent={1} total={50}></Pagination>
            </div>
        </>
    );
}
