import { useState } from "react";
import { NavLink } from "react-router-dom";

import { IoMdImage } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { supabase } from "../utils/Utils";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    avatar: null,
    password: ""
}

export default function SignUp(){
    const [formData, setFormData] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState(false)

    const handleChange = async (e:any) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    
    const handleImage = async (e:any) => {
        const reader = new FileReader()
        reader.onloadend = async () => {
            setLoading(true)
        }
        
        const files = e.target.files[0]
        if(!files) return
        const data = new FormData()
        data.append('file', files) 
        data.append('upload_preset', 'c_tags')
        const res = await fetch(
            "CLOUDINARY_UPLOAD_URL",
            {
                method: "POST",
                body: data
            }
        ) 
        
        const file = await res.json()
        setFormData({...formData, avatar: file.secure_url})
        setLoading(false)
    }
        
    const createUser = async () => {
        const res = await supabase.from("users").insert([
            {
                profilepic: `${formData.avatar}`,
                name: `${formData.firstName}`,
                last_name: `${formData.lastName}`,
                email: `${formData.email}`,
                password: `${formData.password}`,
            }
        ])
    }
        return(
            <div className="flex items-center justify-center w-full h-[100vh] bg-cover bg-center bg-[url('/src/assets/SignUpBackground.jpg')]">
            <div className="flex flex-col items-center relative w-[400px] rounded-2xl p-9 text-md bg-white shadow-md">
                <img src="src/assets/textLogo.png" className="h-[40px] mb-2" />
                <NavLink to="/">
                    <IoClose size={25} className="text-slate-600 absolute top-2 right-2 hover:scale-105"/>
                </NavLink>
                <form className="flex flex-col items-center w-full space-y-3">
                    <div className="group flex flex-col items-center justify-center h-[100px] w-[100px] rounded-full border hover:bg-slate-100 transition-colors cursor-pointer">
                        <IoMdImage  size={37} className="text-slate-600 group-hover:scale-105 group-hover:text-violet-600 transition-all"/>
                        <p className="mt-2 text-xs text-slate-600 text-wrap group-hover:scale-105 group-hover:text-violet-600 transition-all">Añadir foto</p>
                    </div>  
                    <p>Foto de perfil</p>
                    <label className="flex flex-col w-full">
                        Nombre
                        <input type="text" className="outline-none border-t-0 border-2 border-x-0 h-[2.5em] px-2 focus:bg-gray-100 focus:border-violet-600 transition-colors" maxLength={30}/>
                    </label>
                    <label className="flex flex-col w-full">
                        Apellido
                        <input type="text" className="outline-none border-t-0 border-2 border-x-0 h-[2.5em] px-2 focus:bg-gray-100 focus:border-violet-600 transition-colors" maxLength={30}/>
                    </label>
                    <label className="flex flex-col w-full">
                        Dirección de correo
                        <input type="text" className="outline-none border-t-0 border-2 border-x-0 h-[2.5em] px-2 focus:bg-gray-100 focus:border-violet-600 transition-colors" maxLength={30}/>
                    </label>
                    <label className="flex flex-col w-full">
                        Contraseña
                        <input type="password" className="outline-none border-t-0 border-2 border-x-0 h-[2.5em] px-2 focus:bg-gray-100 focus:border-violet-600 transition-colors" maxLength={30}/>
                    </label>
                </form>
                <p className="w-[200px] mt-8 text-sm text-wrap text-center">¿Ya tienes una cuenta? prueba con <NavLink to="/logIn"><span className="text-violet-600">iniciar sesión</span></NavLink></p>
            </div>
            {status && (
                <div className="absolute bottom-1 right-1 flex items-center justify-around w-[300px] h-[50px] bg-white p-2 text-md rounded-md translate-x-20 translate-y-20">
                    <FaCircleCheck size={20} className="text-green-400" />
                    Se ha registrado correctamente
                </div>
            )}
        </div>
    )
}