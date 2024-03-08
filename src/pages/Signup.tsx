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
    const [loading, setLoading] = useState(false)
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
            "https://api.cloudinary.com/v1_1/dotrqr59h/upload",
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
        if (res.error === null && res.status === 201) {
            setStatus(true);
            setFormData(initialState);
            setTimeout(() => {
              setStatus(false);
            }, 5000);
    }
}
console.log(loading)

return(
        <div className="flex items-center justify-center w-full h-[100vh] bg-cover bg-center bg-[url('/src/assets/SignUpBackground.jpg')]">
            <div className="flex flex-col items-start relative w-[78%] rounded-2xl p-9 text-md bg-white shadow-md">
                <img src="src/assets/textLogo.png" className="md:h-[40px] md:w-[200px] mb-2 sm:justify-self-center" />
                <NavLink to="/">
                    <IoClose size={25} className="text-slate-600 absolute top-2 right-2 hover:scale-105"/>
                </NavLink>
                <form className="grid w-full space-y-3"
                      onSubmit={(e:any) => {
                            e.preventDefault()
                            createUser()
                        }}>
                    <div className="flex flex-col items-center text-sm space-y-2">
                        <div className="group flex flex-col items-center justify-center self-center h-[100px] w-[100px] rounded-full border hover:bg-slate-100 transition-colors cursor-pointer"
                            onClick={(e) => handleImage(e)}>
                            <IoMdImage  size={37} className="text-slate-600 group-hover:scale-105 group-hover:text-violet-600 transition-all"/>
                            <p className="mt-2 text-xs text-slate-600 text-wrap group-hover:scale-105 group-hover:text-violet-600 transition-all">Añadir foto</p>
                        </div>  
                        <p className="select-none">Foto de perfil</p>
                    <span className="w-[90%] max-w-[700px] bg-white border-t border-t-gray-300 rounded-lg"></span>
                    </div>
                    <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6">
                        <label className="flex flex-col">
                            <p className="select-none">Nombre</p> 
                            <input type="text" className="w-[400px] outline-none border-t-0 border-2 border-x-0 h-[2.5em] px-2 focus:bg-gray-100 focus:border-violet-600 transition-colors" maxLength={30}
                                onChange={handleChange} value={formData.firstName ?? ""}/>
                        </label>
                        <label className="flex flex-col">
                            <p className="select-none">Dirección de correo</p> 
                            <input type="text" className="w-[400px] outline-none border-t-0 border-2 border-x-0 h-[2.5em] px-2 focus:bg-gray-100 focus:border-violet-600 transition-colors" maxLength={30}
                                onChange={handleChange} value={formData.email ?? ""}/>
                        </label>
                        <label className="flex flex-col">
                            <p className="select-none">Apellido</p> 
                            <input type="text" className="w-[400px] outline-none border-t-0 border-2 border-x-0 h-[2.5em] px-2 focus:bg-gray-100 focus:border-violet-600 transition-colors" maxLength={30}
                                onChange={handleChange} value={formData.lastName ?? ""} required/>
                        </label>
                        <label className="flex flex-col">
                            <p className="select-none">Contraseña</p> 
                            <input type="password" className="w-[400px] outline-none border-t-0 border-2 border-x-0 h-[2.5em] px-2 focus:bg-gray-100 focus:border-violet-600 transition-colors" maxLength={30}
                                onChange={handleChange} value={formData.password ?? ""}/>
                        </label>
                    </div>
                    <button className="flex justify-self-center justify-center w-[40%] min-w-[100px] mt-[20px] bg-violet-400 px-4 py-2 rounded-md text-white font-semibold" type="submit" disabled={loading}>
                        registrarse
                    </button>
                    <p className="justify-self-center w-[200px] mt-8 text-sm text-wrap text-center">¿Ya tienes una cuenta? prueba con <NavLink to="/logIn"><span className="text-violet-600">iniciar sesión</span></NavLink></p>
                </form>
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