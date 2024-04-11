import { supabase } from "../utils/Utils";
import textLogo from '../assets/textLogo.png';

export default function StoreSignup(){
    return(
        <div className="relative bg-gray-50 min-h-screen flex justify-center items-center">
            <div className="text-center content-around pt-8 pb-2">

                <h1 className="text-3xl font-bold p-2 flex">Registra tu negocio<img src={textLogo} className=" pl-2 mt-1 sm:block w-26 h-7 hidden"/></h1>

                <div className="border-2 w-full mx-auto mt-2 pb-2 mb-8 p-4 rounded-lg bg-white">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="nombre-negocio" className="block text-sm font-medium text-gray-700">Nombre del negocio</label>
                            <input placeholder="El nombre de tu empresa" type="text" id="nombre-negocio" name="nombre-negocio" className="mt-1 p-2 border-gray-100 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="especializacion" className="block text-sm font-medium text-gray-700">Especialización</label>
                            <input placeholder="Por ej: Venta por mayor, fabricación..." type="text" id="especializacion" name="especializacion" className="mt-1 p-2 border-gray-100 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-700">Ubicación</label>
                            <input type="text" id="ubicacion" name="ubicacion" className="mt-1 p-2 border-gray-100 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                            <input type="password" id="password" name="password" className="mt-1 p-2 border-gray-100 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirme Contraseña</label>
                            <input type="password" id="confirm-password" name="confirm-password" className="mt-1 p-2 border-gray-100 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Email</label>
                            <input placeholder="(Opcional)" id="email" name="email" className="mt-1 p-2 border-gray-100 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
                        </div>
                        <div className="">
                        <button className="bg-purple-400 hover:bg-white hover:text-purple-500 hover:border-purple-500 transition duration-300 border-2 border-purple-500 text-white font-bold py-2 mb-2 px-4 rounded items-center text-center ho">
                            <span className="text-base font-rounded">Registrate</span>
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
