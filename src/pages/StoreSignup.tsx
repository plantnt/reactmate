//import { supabase } from "../utils/Utils";  //Implementarlo lo antes posible
import textLogo from '../assets/textLogo.png';

const handleImageChange = (e) => {
    setImage(e.target.files[0]);
};

export default function StoreSignup(){
    return(
        <div className="relative bg-gray-50 min-h-screen flex justify-center items-center">
            <div className="text-center content-around pt-8 pb-2">

                <h1 className="text-3xl font-bold pt-2 pb-5 flex">Registra tu negocio<img src={textLogo} className="pl-2 mt-1 sm:block w-26 h-7 hidden"/></h1>

                <div className="border-2 border-gray-200 w-full mx-auto mt-2 pb-2 mb-8 p-4 rounded-lg bg-white">
                    <form>
                    <div className="mb-4 text-center">
                    <label htmlFor="foto-negocio" className="block text-sm font-medium text-gray-700">Foto del negocio</label>
                        <div className="mx-auto max-w-lg">
                            <input 
                                type="file" 
                                id="foto-negocio" 
                                name="foto-negocio" 
                                accept="image/*" 
                                onChange={handleImageChange} 
                                className="mt-1 p-2 border-gray-100 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" 
                            />
                        </div>
                    </div>

                        <div className="mb-4">
                            <label htmlFor="nombre-negocio" className="block text-sm font-medium text-gray-700">Nombre del negocio</label>
                            <input placeholder="El nombre de tu empresa" type="text" id="nombre-negocio" name="nombre-negocio" className="mt-1 p-2 border-gray-100 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="especializacion" className="block text-sm font-medium text-gray-700">Especialización</label>
                            <select id="especializacion" name="especializacion" className="text-gray-700 mt-1 p-2 border-gray-100 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm">
                                <option value="" className="text-gray-400">¿En que se especializa tu empresa?</option>
                                <option value="Venta por mayor">Venta por mayor</option>
                                <option value="Venta por detal">Venta por detal</option>
                                <option value="Fabricación artesanal">Fabricación artesanal</option>
                                <option value="Compra-venta">Compra-venta</option>
                                <option value="Restauración">Restauración</option>
                                <option value="Tapizados y decoración">Tapizados y decoración</option>
                                <option value="Otro">Otro</option>
                            </select>
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
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email (Opcional)</label>
                            <input placeholder="Correo electrónico" id="email" name="email" type="email" className="mt-1 p-2 border-gray-100 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
                        </div>
                        <div className="">
                            <button className="bg-purple-400 hover:bg-white hover:text-purple-500 hover:border-purple-500 transition duration-300 border-2 border-purple-500 text-white font-bold py-2 mb-2 px-4 rounded items-center text-center ho">
                                <span className="text-base font-rounded">Registrarse</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


function setImage(_arg0: any) {
    throw new Error("Function not implemented.");
}

