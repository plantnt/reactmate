import { FaRegCommentDots, FaStore, FaUser } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import Footer from "../components/UI/footer"

const Cart = () => {
    return(
        <>        
            <div className="flex flex-col items-center pt-20 pb-20">
                <div className="max-w-md w-full mx-auto"> {/* Cambio aquí */}

                <h1 className="text-center text-3xl font-bold font-extrawide text-gray-600">
                    Comunidad de furnimate.
                </h1>

                <br></br><br></br>

                    <NavLink to='/chatingServices'>
                        <button className="rounded-full w-full bg-gray-200 hover:bg-gray-50 hover:text-gray-600 hover:border-gray-300 transition duration-300 border-2 border-gray-300 text-gray-700 font-bold py-4 px-6 rounded flex items-center mb-4"> {/* Ajuste de tamaño */}
                            <FaUser className="text-gray-400 inline-block mr-2 text-2xl" /> {/* Ajuste de tamaño */}
                            <span className="text-lg w-full font-rounded text-gray-400">Solicitudes de servicio</span> {/* Ajuste de tamaño */}
                        </button>
                    </NavLink>

                    <NavLink to='/chatingPage'>
                        <button className="rounded-full w-full bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300 border-2 border-blue-500 text-white font-bold py-4 px-6 rounded flex items-center mb-4"> {/* Ajuste de tamaño */}
                            <FaRegCommentDots className="inline-block mr-2 text-2xl" /> {/* Ajuste de tamaño */}
                            <span className="text-lg font-rounded w-full">Chat usuarios</span> {/* Ajuste de tamaño */}
                        </button>
                    </NavLink>

                    <NavLink to='/'>
                        <button className="rounded-full w-full bg-gray-200 hover:bg-gray-50 hover:text-gray-600 hover:border-gray-300 transition duration-300 border-2 border-gray-300 text-gray-700 font-bold py-4 px-6 rounded flex items-center"> {/* Ajuste de tamaño */}
                            <FaStore className="text-gray-400 inline-block mr-2 text-3xl" /> {/* Ajuste de tamaño */}
                            <span className="text-lg w-full font-rounded text-gray-400">Explorar emprendimientos</span> {/* Ajuste de tamaño */}
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="pt-9"><Footer></Footer></div>
        </>
    )
}

export default Cart
