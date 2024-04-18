import { FaHammer, FaRegCommentDots, FaStore, FaUser } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import furniLogo from '../assets/furniLogo.png';

const Cart = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flexbox">
            <br></br><br></br>
                <div className="flex flex-col items-center">
                    <div className="max-w-md w-full mx-auto">
                    <h1 className="text-center text-3xl font-bold font-extrawide pb-8 text-gray-300">
                    <img src={furniLogo} className=" block w-18 h-14 mx-auto -pt-2 opacity-40"/>
</h1>

<div className="-mt-4">
                        <NavLink to='/chatingPage'>
                            <button className="rounded-lg w-full bg-blue-400 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300 border-2 border-blue-500 text-white font-bold py-4 px-6 flex items-center mb-4">
                                <FaRegCommentDots className="size-8 inline-block mr-2 text-2xl" />
                                <span className="text-lg font-rounded w-full">Chat</span>
                            </button>
                        </NavLink>

                        <NavLink to='/storeBrowser'>
                            <button className="rounded-lg w-full bg-purple-400 hover:bg-white hover:text-purple-400 hover:border-purple-400 transition duration-300 border-2 border-purple-500 text-white font-bold py-4 px-6 flex items-center mb-4">
                                <FaStore className="text-white-400 size-8 inline-block mr-2 text-2xl" />
                                <span className="text-lg font-rounded w-full">Emprendimientos furnimate.</span>
                            </button>
                        </NavLink>

                        <NavLink to='/chatingServices'>
                            <button className="rounded-lg w-full bg-orange-300 hover:bg-white hover:text-orange-500 hover:border-furniorange transition duration-300 border-2 border-orange-400 text-white font-bold py-4 px-6 flex items-center mb-4">
                                <FaHammer className="text-white hover:text-furniorange size-7 inline-block mr-2 text-2xl" />
                                <span className="text-lg w-full font-rounded text-gray-white">Servicios de terceros</span>
                            </button>
                        </NavLink>


                        <NavLink to='/userBrowser'>
                            <button className="rounded-lg w-full bg-gray-200 hover:bg-gray-50 hover:text-gray-600 hover:border-gray-300 transition duration-300 border-2 border-gray-300 text-gray-700 font-bold py-4 px-6 flex items-center mb-4">
                                <FaUser className="text-gray-400 inline-block mr-2 text-3xl" />
                                <span className="text-lg w-full font-rounded text-gray-400">Buscador de usuarios</span>
                            </button>
                        </NavLink>
</div>


                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
