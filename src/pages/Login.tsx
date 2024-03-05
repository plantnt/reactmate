import { NavLink } from "react-router-dom";

export default function LogIn(){
    return(
        <>  

<div className="w-full h-full bg-[url('/src\assets\LoginBackground.jpg')] bg-cover bg-[50%] absolute">
<div className="flex flex-col items-center  mt-10">

<NavLink to="/" className="max-w-96 pb-10">
    <img src="./src\assets\textLogo.png" className="p-4"></img>
</NavLink>

    <div className="flex flex-col bg-gray-200 p-4 rounded-2xl m-0-auto w-[30%] items-center text-center m-5 h-full">
        <label className="text-2xl font-bold pb-4 text-violet-700">
            Inicio de sesión
        </label>
        <ul className="w-full">
            
            <li className="p-2">
                <input type="text" className="border-2 border-gray-400 rounded p-1 w-full" placeholder="Nombre de Usuario/Correo Electronico"/>
            </li> 
            <li className="p-2">
                <input type="password" className="border-2 border-gray-400 rounded p-1 w-full" placeholder="Contraseña"/>
            </li> 

        </ul>
        <button className="bg-violet-600 hover:bg-violet-800 border-2 border-violet-900 rounded p-1 text-white w-full my-2 transition-all"> Iniciar Sesión </button>
            <div className="flex">
                <label>¿No tienes una cuenta?</label>
                <NavLink to="/SignUp" className="text-blue-400 pl-2">Registrarse</NavLink>
            </div>
            <div>
                <NavLink to="#" className="text-blue-400 pl-2">¿Olvido su Contraseña?</NavLink>
            </div>
    </div>
</div>
    </div>
            
        </>
    )
}