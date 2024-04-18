import { Pagination } from "antd";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { FaUser } from "react-icons/fa";
import textLogo from '../assets/textLogo.png';

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
                    <h1 className="flex text-3xl font-bold text-white text-center m-4">
                    Negocios de <img src={textLogo} className="px-2 mx-2 py-1 my-1 sm:block w-26 h-7 hidden bg-purple-400 rounded fill-current"/>
                    </h1> 
                </div>

                <div className="flex pt-6 pr-6">
                    <div className="flex items-center pl-10 pr-4 flex-grow"> {/* Agregué flex-grow para expandir este div */}
                        <input type="text" placeholder="Busca negocios registrados..." className="bg-slate-200 rounded-l-3xl outline-none px-4  h-9 text-gray-900 w-full"/> {/* Cambié w-[100%] a w-full */}
                        <button className="rounded-r-3xl h-9 w-14 bg-purple-400 cursor-pointer">
                            <FaMagnifyingGlass className="text-white ml-[18.5px]"/>
                        </button>
                    </div>

                    <div className="flex-shrink justify-center text-center px-10 mx-10 py-1 rounded-lg border-2">
                        <h4 className="py-1">¿Quieres aparecer aquí?: Registra tu negocio en la comunidad furnimate.</h4>
                    <NavLink to='/storeSignup'>
                        <button className="bg-purple-400 hover:bg-white hover:text-purple-500 hover:border-purple-500 transition duration-300 border-2 border-purple-500 text-white font-bold py-2 mb-2 px-4 rounded items-center text-center ho">
                            <span className="text-base font-rounded">Registrate</span>
                        </button>
                    </NavLink>
                    </div>
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
            <div className="bg-gray-50 pb-8 text-center">
                <Pagination className="self-center w-full" defaultCurrent={1} total={50}></Pagination>
            </div>
        </>
    );
}
