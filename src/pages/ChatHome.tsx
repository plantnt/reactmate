import { FaRegCommentDots, FaStore, FaUser } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Cart = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
            <br></br><br></br>
                <div className="flex flex-col items-center pt-20 pb-20">
                    <div className="max-w-md w-full mx-auto">
                        <h1 className="text-center text-3xl font-bold font-extrawide text-gray-600">
                            Comunidad de furnimate.
                        </h1>

                        <br /><br />

                        <NavLink to='/chatingServices'>
                            <button className="rounded-full w-full bg-gray-200 hover:bg-gray-50 hover:text-gray-600 hover:border-gray-300 transition duration-300 border-2 border-gray-300 text-gray-700 font-bold py-4 px-6 flex items-center mb-4">
                                <FaUser className="text-gray-400 inline-block mr-2 text-2xl" />
                                <span className="text-lg w-full font-rounded text-gray-400">Solicitudes de servicio</span>
                            </button>
                        </NavLink>

                        <NavLink to='/chatingPage'>
                            <button className="rounded-full w-full bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300 border-2 border-blue-500 text-white font-bold py-4 px-6 flex items-center mb-4">
                                <FaRegCommentDots className="inline-block mr-2 text-2xl" />
                                <span className="text-lg font-rounded w-full">Chat usuarios</span>
                            </button>
                        </NavLink>

                        <NavLink to='/userBrowser'>
                            <button className="rounded-full w-full bg-gray-200 hover:bg-gray-50 hover:text-gray-600 hover:border-gray-300 transition duration-300 border-2 border-gray-300 text-gray-700 font-bold py-4 px-6 flex items-center">
                                <FaStore className="text-gray-400 inline-block mr-2 text-3xl" />
                                <span className="text-lg w-full font-rounded text-gray-400">Explorar emprendimientos</span>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
