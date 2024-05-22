import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { IoMdImage, IoMdEye, IoMdEyeOff, IoIosClose } from "react-icons/io";

import { supabase } from "../utils/Utils";

import Separator from "../components/UI/separator";
import Modal from "../components/Modal";


export default function SignUp(){
    const avatarUrl = useRef("")
    const navigate = useNavigate()

    const [visible, setVisible] = useState(true)
    const [openModal, setOpenModal] = useState(false)

    const handleShowModal = () =>{
        setOpenModal(true)
    }

    const updateAvatar = (imgSrc: string) => {
        avatarUrl.current = imgSrc;
        setFormData({ ...formData, avatar: imgSrc})
    };
    
    const handleClick = () => {
        setVisible((prevVisible) => !prevVisible)
    }
        
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        avatar: "",
        password: ""
    }
    
    const [formData, setFormData] = useState(initialState)
    
    const createUser = async () => {
        if(!formData.avatar){
            setError(true)
            setTimeout(() => {
                setError(false)
            },5000)
        }
        else{
            try{
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
                    toast.success('Se ha creado su cuenta correctamente')
                    setFormData(initialState);
                    sessionStorage.setItem('supabaseSession', JSON.stringify(formData))

                    setTimeout(() => {
                        navigate('/')
                    }, 2000);
                }
            }
            catch(error){
                console.error(error.message)
                toast.error('Ha ocurrido un error')
            }
        }
    }
    const [error, setError] = useState(false)

    const handleFormInput = async (e:any) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    console.log(avatarUrl.current.length)
    return(
        <div className="flex items-center justify-center w-full h-[100vh] bg-cover  bg-[url('/src/assets/SignUpBackground.png')]">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="flex flex-col items-start relative rounded-2xl p-9 text-md bg-white w-[90%] max-w-[900px] bg-opacity-80 backdrop-blur-sm shadow-md">
                <img src="src/assets/textLogo.png" className="md:h-[40px] md:w-[220px] mb-2 sm:justify-self-center" />
                <NavLink to="/">
                    <IoIosClose  size={28} className="text-slate-400 absolute top-3 right-3 hover:cursor-pointer hover:scale-105 hover:text-red-600 transition-all"/>
                </NavLink>
                <form className="grid w-full space-y-3"
                        onSubmit={(e) => {e.preventDefault(); createUser()}}>
                    <div className="flex flex-col items-center text-sm space-y-2">
                        <div className="group flex flex-col items-center justify-center self-center h-[100px] w-[100px] rounded-full border border-slate-300 hover:bg-opacity-60 transition-colors cursor-pointer">
                            {!openModal ? 
                                <div className="flex flex-col items-center group" onClick={handleShowModal}>
                                    {avatarUrl.current.length === 0 ?  
                                        <>
                                            <IoMdImage size={30} className="text-violet-500 group-hover:scale-105 transition-transform"
                                            onClick={handleShowModal}/>
                                            <p className="select-none text-center text-wrap text-[0.9em] text-violet-500">
                                                Elegir imagen
                                            </p>
                                        </>
                                    :
                                        <>
                                            <img src={avatarUrl.current} className="w-full h-full object-cover" />
                                        </>
                                    }
                                </div>
                                
                            : <Modal updateAvatar={updateAvatar} closeModal={() => setOpenModal(false)}/>}
                        </div>  
                        <p className="select-none">Foto de perfil</p>
                        {error && <p className="text-red-500">Primero debe subir una foto de perfil</p>}
                        <Separator />
                    </div>
                    <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6">
                        <label className="flex flex-col">
                            <p className="select-none">Nombre</p> 
                            <input name="firstName" 
                                onChange={handleFormInput} 
                                type="text" 
                                className="w-[400px] outline-none p-2 rounded-md bg-white" maxLength={30} required/>
                        </label>
                        <label className="flex flex-col">
                            <p className="select-none">Apellido</p> 
                            <input name="lastName" 
                                onChange={handleFormInput} 
                                type="text" 
                                className="w-[400px] outline-none p-2 rounded-md bg-white" maxLength={30} required/>
                        </label>
                        <label className="flex flex-col">
                            <p className="select-none">Dirección de correo</p> 
                            <input name="email" 
                                onChange={handleFormInput} 
                                type="text" 
                                className="w-[400px] outline-none p-2 rounded-md bg-white" maxLength={30} required/>
                        </label>
                        <label className="relative flex flex-col overflow-hidden">
                            <p className="select-none">Contraseña <span className="text-gray-700">(min. 4 - max. 15)</span></p>
                            <input name="password" 
                                onChange={handleFormInput}
                                minLength={4} 
                                maxLength={15}
                                type={!visible ? "text" : "password"} 
                                className="w-[400px] outline-none p-2 rounded-md bg-white" required/>
                            {visible === true ? (
                                <IoMdEye size={22} className="absolute top-[33px] right-4 text-slate-500 cursor-pointer" onClick={() => handleClick()}/>
                            ) : (
                                <IoMdEyeOff size={22} className="absolute top-[33px] right-4 text-slate-500 cursor-pointer" onClick={() => handleClick()}/>
                            )}
                        </label>
                    </div>
                    <button className="flex justify-self-center justify-center w-[40%] min-w-[100px] mt-[20px] bg-convenientPurple px-4 py-2 rounded-md text-white font-semibold hover:bg-darkConvPurple transition-colors" 
                            type="submit"  
                            >
                        Registrarse
                    </button>
                    <p className="justify-self-center w-[200px] mt-8 text-sm text-wrap text-center">¿Ya tienes una cuenta? prueba con <NavLink to="/logIn"><span className="text-violet-600">iniciar sesión</span></NavLink></p>
                </form>
            </div>
        </div>
    )
}
