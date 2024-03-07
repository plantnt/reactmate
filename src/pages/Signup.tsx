import { useState } from "react";
import { NavLink } from "react-router-dom";

import { IoMdImage } from "react-icons/io";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    avatar: null
}

export default function SignUp(){
    const [formData, setFormData] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState(false)

    const handleChange = async (e:any) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    
    return(
        <div className="flex items-center justify-center w-full h-[100vh] bg-cover bg-center bg-[url('/src/assets/SignUpBackground.jpg')]">
            <div className="flex flex-col items-center w-[400px] rounded-2xl p-9 text-md bg-white shadow-md">
                <form className="flex flex-col items-center w-full space-y-3">
                    <p>Foto de perfil</p>
                    <div className="group flex flex-col items-center justify-center h-[100px] w-[100px] rounded-full border hover:bg-slate-100 transition-colors cursor-pointer">
                        <IoMdImage  size={37} className="text-slate-600 group-hover:scale-105 transition-transform"/>
                        <p className="mt-2 text-xs text-slate-600 text-wrap group-hover:scale-105 transition-transform">Añadir foto</p>
                    </div>  
                    <label className="flex flex-col w-full">
                        Nombre
                        <input type="text" className="outline-none border-t-0 border-2 border-x-0 h-[2.5em] px-2 focus:bg-gray-100 focus:border-0 transition-colors" maxLength={30}/>
                    </label>
                    <label className="flex flex-col w-full">
                        Apellido
                        <input type="text" className="outline-none border-t-0 border-2 border-x-0 h-[2.5em] px-2 focus:bg-gray-100 focus:border-0 transition-colors" maxLength={30}/>
                    </label>
                    <label className="flex flex-col w-full">
                        Dirección de correo
                        <input type="text" className="outline-none border-t-0 border-2 border-x-0 h-[2.5em] px-2 focus:bg-gray-100 focus:border-0 transition-colors" maxLength={30}/>
                    </label>
                    <label className="flex flex-col w-full">
                        Contraseña
                        <input type="text" className="outline-none border-t-0 border-2 border-x-0 h-[2.5em] px-2 focus:bg-gray-100 focus:border-0 transition-colors" maxLength={30}/>
                    </label>
                </form>
                <p className="w-[200px] mt-8 text-sm text-wrap text-center">¿Ya tienes una cuenta? prueba con <NavLink to="/logIn"><span className="text-violet-600">iniciar sesión</span></NavLink></p>
            </div>
                
        </div>
    )
}