import { NavLink } from "react-router-dom";

export default function SignUp(){
    return(
        <>  
            <div className="container flex flex-col items-center justify-center" align="center">

            <NavLink to="/" className="max-w-96">
                <img src="./src\assets\textLogo.png" className="p-4"></img>
            </NavLink>
            
                <div className="flex flex-col bg-gray-200 p-4 rounded-2xl m-0-auto max-w-sm items-center text-center">
                    <div className="flex rounded-full w-1/3 h-1/3 items-center justify-center">
                    <img src="./src\assets\profileIcon.png"></img>
                    </div>
                    <ul className="min-w-fit">
                        <li className="p-2">
                            Seleccione una imagen:
                            <input type="file" className="border-2 border-violet-700 p-1 bg-furnipurple rounded-full text-white  file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" accept="image/*"/>
                        </li>
                        <li className="p-2">
                            <label className="p-2">
                                Usuario:
                                <input type="checkbox" className="accent-furnipurple ml-1" name="1checksign"/>
                            </label>
                            <label className="p-2">
                                Local:
                                <input type="checkbox" className="accent-furnipurple ml-1" name="2checksign"/>
                            </label>
                            <label className="p-2">
                                Empresa:
                                <input type="checkbox" className="accent-furnipurple ml-1" name="3checksign"/>
                            </label>
                        </li>
                        <li className="p-2">
                            <input type="text" className="border-2 border-gray-400 rounded p-1 w-full" placeholder="Nombre de Usuario/Empresa"/>
                        </li> 
                        <li className="p-2">
                            <input type="password" className="border-2 border-gray-400 rounded p-1 w-full" placeholder="Contraseña"/>
                        </li> 

                        <li className="p-2">
                            <input type="password" className="border-2 border-gray-400 rounded p-1 w-full" placeholder="Confirmar Contraseña"/>
                        </li> 

                        <li className="p-2">
                            <input type="number" className="border-2 border-gray-400 rounded p-1 w-full" placeholder="Telefono"/>
                        </li> 

                        <li className="p-2">
                            <input type="email" className="border-2 border-gray-400 rounded p-1 w-full " placeholder="Correo Electronico"/>
                        </li>     
                        <li className="p-2">
                            <input type="" className="border-2 border-gray-400 rounded p-1 w-full " placeholder="Direccion (Opcional)"/>
                        </li>        
                    </ul>
                    <button className="bg-violet-600 hover:bg-violet-800 border-2 border-violet-900 rounded p-1 text-white w-full my-2 transition-all"> Registrarse </button>
                        <div className="flex">
                            <label>¿Ya tienes una cuenta?</label>
                            <NavLink to="/logIn" className="text-blue-400 pl-2">Inicia sesion</NavLink>
                        </div>
                </div>
            </div>
        </>
    )
}