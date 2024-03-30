import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { IoMdImage, IoMdEye, IoMdEyeOff, IoIosClose } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

import { supabase } from "../utils/Utils";
import Separator from "../components/UI/separator";
import { MdEdit } from "react-icons/md";


export default function SignUp(){

    const profilePic = useRef<HTMLInputElement>(null)

    const [picSrc, setPicSrc] = useState<string|null>(null)
    const [visible, setVisible] = useState(true)

    const handlePicUpload = () => {
        profilePic.current && profilePic.current.click()
    }

    const handlePicUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if(file){
            const reader = new FileReader()
            reader.onload = () => {
                if(typeof reader.result === 'string'){
                    setPicSrc(reader.result)
                    console.log("Imagen de perfil")
                }
            }
            reader.readAsDataURL(file)
        }
    }
    
    const handleClick = () => {
        setVisible((prevVisible) => !prevVisible)
    }
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        avatar: null,
        password: ""
    }

        const [formData, setFormData] = useState(initialState)
        const [status, setStatus] = useState(false)
        
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
        
        const handleChange = async (e:any) => {
            e.preventDefault();
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    // const [formData,setFormData] = useState({
    //     email:'',password:'', firstName: "", lastName: "",
    //   })

    //   console.log(formData)

    //   function handleChange(event){
    //     setFormData((prevFormData)=>{
    //       return{
    //         ...prevFormData,
    //         [event.target.name]:event.target.value
    //       }

    //     })

    //   }

    //   async function handleSubmit(e:any){
    //     e.preventDefault()
    //  setStatus(true)
    //     try {
    //       const { data, error } = await supabase.auth.signUp(
    //         {
    //           email: formData.email,
    //           password: formData.password,
    //           options: {
    //             data: {
    //                 name: `${formData.firstName}`,
    //                 last_name: `${formData.lastName}`,
    //             }
    //           }
    //         }
    //       )
    //       if (error) throw error
    //       alert('Check your email for verification link')
    //       setStatus(false)
        
    //     } catch (error) {
    //       alert(error)
    //     }
    //   }




return(
        <div className="flex items-center justify-center w-full h-[100vh] bg-cover  bg-[url('/src/assets/SignUpBackground.png')]">
            <div className="flex flex-col items-start relative rounded-2xl p-9 text-md bg-white w-[90%] max-w-[900px] bg-opacity-80 backdrop-blur-sm shadow-md">
                <img src="src/assets/textLogo.png" className="md:h-[40px] md:w-[220px] mb-2 sm:justify-self-center" />
                <NavLink to="/">
                    <IoIosClose  size={28} className="text-slate-400 absolute top-3 right-3 hover:cursor-pointer hover:scale-105 hover:text-red-600 transition-all"/>
                </NavLink>
                <form className="grid w-full space-y-3"
                      onSubmit={(e:any) => {
                        e.preventDefault()
                        createUser()}}>
                    <div className="flex flex-col items-center text-sm space-y-2">
                        <div className="group flex flex-col items-center justify-center self-center h-[100px] w-[100px] rounded-full border border-slate-300 hover:bg-opacity-60 transition-colors cursor-pointer"
                        onClick={() => handlePicUpload()}>
                            {picSrc ? (
                                <div className="relative object-cover w-full h-full overflow-hidden">
                                    <img src={picSrc} className="group"/>
                                    <div className="group-hover:flex group-hover:flex-col h-[100px] w-[100px] rounded-full group-hover:items-center group-hover:justify-center hidden absolute z-50 top-0 bg-slate-500 bg-opacity-50"
                                    onClick={() => handlePicUpload()}>
                                        <MdEdit  size={40} className="text-white"/>
                                        <p className="text-xs text-center font-bold text-white">Cambiar <br/> imagen</p>
                                    </div>
                                    <input ref={profilePic} onChange={handlePicUploadChange} type="file" accept="image/png, image/jpeg" hidden/>
                                </div>
                            ):(
                                <>
                                    <IoMdImage  size={37} className="text-slate-600 group-hover:scale-105 group-hover:text-violet-600 transition-all"/>
                                    <p className="mt-2 text-xs text-slate-600 text-wrap group-hover:scale-105 group-hover:text-violet-600 transition-all">
                                        Añadir foto
                                    </p>
                                    <input ref={profilePic} onChange={handlePicUploadChange} type="file" accept="image/png, image/jpeg" hidden/>
                                </>
                            )}
                        </div>  
                        <p className="select-none">Foto de perfil</p>
                        <Separator />
                    </div>
                    <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6">
                        <label className="flex flex-col">
                            <p className="select-none">Nombre</p> 
                            <input name="firstName" onChange={handleChange} type="text" className="w-[400px] outline-none p-2 rounded-md bg-transparent"/>
                        </label>
                        <label className="flex flex-col">
                            <p className="select-none">Dirección de correo</p> 
                            <input name="email" onChange={handleChange} type="text" className="w-[400px] outline-none p-2 rounded-md bg-transparent" maxLength={30}/>
                        </label>
                        <label className="flex flex-col">
                            <p className="select-none">Apellido</p> 
                            <input name="lastName" onChange={handleChange} type="text" className="w-[400px] outline-none p-2 rounded-md bg-transparent" maxLength={30} required/>
                        </label>
                        <label className="relative flex flex-col">
                            <p className="select-none">Contraseña</p>
                            <input name="password" onChange={handleChange} type={!visible ? "text" : "password"} className="w-[400px] outline-none p-2 rounded-md bg-transparent" maxLength={30}/>
                            {visible === true ? (
                                <IoMdEye size={22} className="absolute top-[33px] right-4 text-slate-500 cursor-pointer" onClick={() => handleClick()}/>
                            ) : (
                                <IoMdEyeOff size={22} className="absolute top-[33px] right-4 text-slate-500 cursor-pointer" onClick={() => handleClick()}/>
                            )}
                        </label>
                    </div>
                    <button className="flex justify-self-center justify-center w-[40%] min-w-[100px] mt-[20px] bg-violet-400 px-4 py-2 rounded-md text-white font-semibold hover:bg-violet-500 transition-colors" 
                            type="submit" 
                            >
                        Registrarse
                    </button>
                    <p className="justify-self-center w-[200px] mt-8 text-sm text-wrap text-center">¿Ya tienes una cuenta? prueba con <NavLink to="/logIn"><span className="text-violet-600">iniciar sesión</span></NavLink></p>
                </form>
            </div>
            {status === false? (
                <div className="hidden absolute bottom-2 right-2 items-center justify-around w-[300px] h-[50px] bg-white p-2 text-md rounded-md translate-x-20 translate-y-20 transition-transform"></div>
                ) : (
                <div className="fixed bottom-2 right-2 flex items-center justify-around w-[300px] h-[50px] bg-white p-2 text-md rounded-md translate-x-0 translate-y-0 transition-transform">
                    <FaCircleCheck size={20} className="text-green-400" />
                    Se ha registrado correctamente
                </div>
                )}
        </div>
    )
}
