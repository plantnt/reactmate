import { Pagination } from "antd";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { FaUser } from "react-icons/fa";

function StoreCard() {
    return (
        <NavLink to="/profilePageView">
        <Card className="w-[20rem] bg-white color-black border-[1px] rounded-lg shadow-md flex">
            {/* Foto de perfil del usuario */}
            <div className="w-20 h-20 bg-gray-200 rounded-lg m-2 flex items-center justify-center">
                <FaUser className="text-gray-500 text-2xl" />
            </div>
            <Card.Body className="p-3 flex flex-col justify-center">
                <Card.Title className="mb-1">negocio</Card.Title>
                <Card.Text className="font-bold mb-1">
                    Somosnegocio
                </Card.Text>
                {/* Agrega más detalles del usuario aquí */}
            </Card.Body>
        </Card>
    </NavLink>
    );
}

export default function StoreBrowser(){
    return(
        <>
            <div className="relative bg-gray-50 min-h-screen max-w-full">
                <div className="bg-gradient-to-r from-purple-500 to-purple-100 py-6 flex justify-center items-center">
                    <h1 className="text-3xl font-bold text-white text-center m-4">
                        Negocios de furnimate.
                    </h1> 
                </div>
                <div className="flex items-center pt-8 pl-6">
                    <input type="text" className="bg-slate-200 rounded-l-3xl outline-none px-2 h-9 text-gray-900 w-[93%]"/>
                    <button className="rounded-r-3xl h-9 w-14 bg-purple-400 cursor-pointer">
                        <FaMagnifyingGlass className="text-white ml-[18.5px]"/>
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4 p-8">
                        <StoreCard/>
                        <StoreCard/>
                        <StoreCard/>
                        <StoreCard/>
                        <StoreCard/>
                        <StoreCard/>
                        <StoreCard/>
                        <StoreCard/>
                        <StoreCard/>
                    </div>
            </div>
            <div className="sticky bottom-0 bg-gray-50 py-4 w-full text-center">
                <Pagination className="self-center" defaultCurrent={1} total={50}></Pagination>
            </div>
        </>
    );
}
