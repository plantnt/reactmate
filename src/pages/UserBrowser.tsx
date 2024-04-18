    import { Pagination } from "antd";
    import { FaMagnifyingGlass } from "react-icons/fa6";
    import { NavLink } from "react-router-dom";
    import Card from 'react-bootstrap/Card';
    import { FaUser } from "react-icons/fa";

    // Componente para la tarjeta de usuario
    function UserCard1() {
        return (
            <NavLink to="/profilePageView">
            <Card className="w-[20rem] bg-white color-black border-[1px] rounded-lg shadow-md flex">
                {/* Foto de perfil del usuario */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg m-2 flex items-center justify-center">
                    <FaUser className="text-gray-500 text-2xl" />
                </div>
                <Card.Body className="p-3 flex flex-col justify-center">
                    <Card.Title className="mb-1">nombredeusuario</Card.Title>
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
            <Card className="w-[20rem] bg-white color-black border-[1px] rounded-lg shadow-md flex">
                {/* Foto de perfil del usuario */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg m-2 flex items-center justify-center">
                    <FaUser className="text-gray-500 text-2xl" />
                </div>
                <Card.Body className="p-3 flex flex-col justify-center">
                    <Card.Title className="mb-1">nombredeemprendedor</Card.Title>
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
            <Card className="w-[20rem] bg-white color-black border-[1px] rounded-lg shadow-md flex">
                {/* Foto de perfil del usuario */}
                <div className="w-20 h-20 bg-gray-200 rounded-lg m-2 flex items-center justify-center">
                    <FaUser className="text-gray-500 text-2xl" />
                </div>
                <Card.Body className="p-3 flex flex-col justify-center">
                    <Card.Title className="mb-1">nombredeempresario</Card.Title>
                    <Card.Text className="font-bold mb-1">
                        Empresa
                    </Card.Text>
                    {/* Agrega más detalles del usuario aquí */}
                </Card.Body>
            </Card>
        </NavLink>
        );
    }

    export default function UserBrowser(){
        return(
            <>
                <div className="relative bg-gray-50 min-h-screen max-w-full">
                    <div className="bg-gradient-to-r from-purple-400 to-orange-300 py-6 flex justify-center items-center">
                        <h1 className="text-3xl font-bold text-white text-center m-4">
                            Buscador de usuarios
                        </h1> 
                    </div>
                    <div className="flex items-center pt-8 pl-6">
                        <input type="text" className="bg-slate-200 rounded-l-3xl outline-none px-2 h-9 text-gray-900 w-[55%]"/>
                        <button className="rounded-r-3xl h-9 w-14 bg-gradient-to-r to-purple-400 from-orange-300 cursor-pointer">
                            <FaMagnifyingGlass className="text-white ml-[18.5px]"/>
                        </button>
                        <div className="flex items-center ml-4">
                            <label className="inline-flex items-center mr-2">
                                <input type="checkbox" className="accent-violet-500 w-6"/>
                                <span className="ml-2 text-gray-700">Usuario</span>
                            </label>
                            <label className="inline-flex items-center mr-2">
                                <input type="checkbox" className="accent-violet-500 w-6"/>
                                <span className="ml-2 text-gray-700">Vendedor</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="accent-violet-500 w-6"/>
                                <span className="ml-2 text-gray-700">Emprendedor</span>
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 p-8">
                        <UserCard1/>
                        <UserCard3/>
                        <UserCard1/>
                        <UserCard2/>
                        <UserCard3/>
                        <UserCard2/>
                        <UserCard1/>
                        <UserCard2/>
                        <UserCard3/>    
                    </div>
                </div>
                <div className="bg-gray-50 pb-8 text-center">
                <Pagination className="self-center w-full" defaultCurrent={1} total={50}></Pagination>
                </div>
            </>
        );
    }
