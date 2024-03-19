import { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../utils/Utils";

import { IoMdEye, IoMdEyeOff, IoIosClose } from "react-icons/io";

import googleIcon from '../assets/icons/google.svg'
import Separator from "../components/UI/separator";




export default function SignUp(){

const handleLogin = () =>{
    supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      
}
const [visible, setVisible] = useState(true)
    const handleClick = () => {
        setVisible((prevVisible) => !prevVisible)
    }

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
 let navigate = useNavigate()
    const handlelogin = async (e:any) => {
        e.preventDefault();
        try {
            const { data: users, error } = await supabase
            .from("users")
            .select("email,password")
        ;
        const user = users.find((user: any) => user.email === formData.email && user.password === formData.password)
        if (user){
              console.log('Usuario ha iniciado sesión correctamente:', user);
           navigate("/")  
            } else{
                console.log("No se ha podido iniciar sesion correctamente");
            }
            if (error) {
                throw error;
            }
        
            
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
        
    };

return(
        <div className="flex items-center justify-center w-full h-[100vh] lg:bg-cover sm:bg-left  bg-[url('/src/assets/SignUpBackground.png')]">
            <div className="flex flex-col items-start relative rounded-2xl p-9 text-md bg-white w-[90%] max-w-[900px] bg-opacity-80 backdrop-blur-sm shadow-md">
                <img src="src/assets/textLogo.png" className="md:h-[40px] md:w-[220px] mb-2 sm:justify-self-center" />
                <NavLink to="/">
                    <IoIosClose  size={28} className="text-slate-400 absolute top-3 right-3 hover:cursor-pointer hover:scale-105 hover:text-red-600 transition-all"/>
                </NavLink>
                <div className="flex flex-col items-center w-full">
                    <button className="flex items-center justify-center text-lg bg-white py-2 w-[260px] mb-[40px] rounded-full hover:bg-opacity-70 hover:border-4 hover:border-violet-400 transition-all" onClick={() => handleLogin()}>
                        <img src={googleIcon} className="h-[30px] mr-4"/>
                        Google
                    </button>
                    <Separator />
                </div>
                <form id="loginform" className="grid w-full space-y-3 mt-[20px]"onSubmit={handlelogin}>
                    <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6" >
                        <label className="flex flex-col">
                            <p className="select-none">Email</p> 
                            <input name="email" onChange={handleChange} type="text" className="w-[400px] outline-none p-2 rounded-md bg-transparent"/>
                        </label>
                        <label className="relative flex flex-col">
                            <p className="select-none">Contraseña</p>
                            <input name="password" onChange={handleChange} type={!visible ? "text" : "password"} className="w-[400px] outline-none p-2 rounded-md bg-transparent" maxLength={30}
                                />
                            {visible === true ? (
                                <IoMdEye size={22} className="absolute top-[33px] right-4 text-slate-500 cursor-pointer" onClick={() => handleClick()}/>
                            ) : (
                                <IoMdEyeOff size={22} className="absolute top-[33px] right-4 text-slate-500 cursor-pointer" onClick={() => handleClick()}/>
                            )}
                        </label>
                    </div>
                    <button className="flex justify-self-center justify-center w-[40%] min-w-[100px] bg-violet-400 px-4 py-2 rounded-md text-white font-semibold hover:bg-violet-500 transition-colors" 
                            type="submit" 
                            >
                        Iniciar sesión
                    </button>
                    <p className="justify-self-center w-[200px] mt-8 text-sm text-wrap text-center">¿Aún no tienes cuenta? <br/>Creala <NavLink to="/signUp"><span className="text-violet-600">aquí</span></NavLink></p>
                </form>
            </div>
            
        </div>
    )
}
