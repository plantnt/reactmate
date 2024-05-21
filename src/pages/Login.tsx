import { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { supabase } from "../utils/Utils";
import { IoMdEye, IoMdEyeOff, IoIosClose } from "react-icons/io";

import googleIcon from '../assets/icons/google.svg'
import Separator from "../components/UI/separator";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";




export default function SignUp(){
    const [status, setStatus] = useState(false)
    const [failure, setFailure] = useState(false)

    const navigate = useNavigate()


//Logear al usuario con google
const handleGoogle = () =>{
    supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      
}

//Logear al usuario

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
 

    const handlelogin = async (e:any) => {
        e.preventDefault();
        try {
            const { data: users, error } = await supabase
            .from("users")
            .select("id,email,password,profilepic")
            ;
        if (users){
            const user = users.find((user: any) => user.email === formData.email && user.password === formData.password)
            if (user){
                setTimeout(() => {
                    console.log('Usuario ha iniciado sesión correctamente:', user);
                    
                const profilePicUrl = user.profilepic;
                const profilePicId = profilePicUrl.split('/').pop().split('.')[0];

                sessionStorage.setItem('supabaseSession', JSON.stringify(user));
                sessionStorage.setItem('userId', JSON.stringify(user.id));
                sessionStorage.setItem('profilesrc', profilePicId);
                console.log('user id:', user.id);
                navigate(`/profilePage/${user.id}`);
                console.log(profilePicId);
                }, 2000)
                setStatus(true)           
                setTimeout(() => {
                    setStatus(false);
                }, 3000);
                
                
                } else{
                    console.log("No se ha podido iniciar sesion correctamente");
                    setFailure(true)
                    setTimeout(() => {
                        setFailure(false)
                    }, 4000);
                }
            }
            if (error) {
                throw error;
            }
        
            
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
        
    };

return(
        <div className="flex items-center justify-center w-full h-[100vh] bg-cover bg-[url('/src/assets/SignUpBackground.png')]">
            <div className="flex flex-col items-start relative rounded-2xl p-9 text-md bg-white w-[90%] max-w-[900px] bg-opacity-80 backdrop-blur-sm shadow-md">
                <img src="src/assets/textLogo.png" className="md:h-[20px] md:w-[120px] mb-[50px] sm:justify-self-center" />
                <NavLink to="/">
                    <IoIosClose  size={28} className="text-slate-400 absolute top-3 right-3 hover:cursor-pointer hover:scale-105 hover:text-red-600 transition-all"/>
                </NavLink>
                <div className="flex flex-col items-center w-full">
                    <button className="flex items-center justify-center text-lg bg-white py-2 w-[260px] mb-[40px] rounded-full hover:bg-opacity-70 border-4 border-white hover:border-4 hover:border-convenientPurple transition-all" 
                    onClick={handleGoogle}>
                        <img src={googleIcon} className="h-[30px] mr-4"/>
                        Google
                    </button>
                    <Separator />
                </div>
                <form id="loginform" className="grid w-full space-y-3 mt-[20px]"onSubmit={handlelogin}>
                    <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6" >
                        <label className="flex flex-col">
                            <p className="select-none">Email</p> 
                            <input name="email" onChange={handleChange} type="text" className="w-[400px] outline-none p-2 rounded-md bg-white" required/>
                        </label>
                        <label className="relative flex flex-col">
                            <p className="select-none">Contraseña</p>
                            <input name="password" onChange={handleChange} type={!visible ? "text" : "password"} 
                                    className="w-[400px] outline-none p-2 rounded-md bg-white" maxLength={30} required
                                    />
                                {visible === true ? (
                                    <IoMdEye size={22} className="absolute top-[33px] right-4 text-slate-500 cursor-pointer" onClick={() => handleClick()}/>
                                ) : (
                                    <IoMdEyeOff size={22} className="absolute top-[33px] right-4 text-slate-500 cursor-pointer" onClick={() => handleClick()}/>
                                )}
                        </label>
                    </div>
                    <button  className="flex justify-self-center justify-center w-[40%] min-w-[100px] bg-convenientPurple px-4 py-2 rounded-md text-white font-semibold hover:bg-violet-500 transition-colors" 
                            type="submit" 
                            >
                        Iniciar sesión
                    </button>
                    <p className="justify-self-center w-[200px] mt-8 text-sm text-wrap text-center">¿Aún no tienes cuenta? <br/>Creala <NavLink to="/signUp"><span className="text-violet-600">aquí</span></NavLink></p>
                </form>
            </div>
            {status === false? (
                <div className="hidden absolute bottom-2 right-2 items-center justify-around w-[300px] h-[50px] bg-white p-2 text-md rounded-md translate-x-20 translate-y-20 transition-transform"></div>
                ) : (
                <div className="fixed bottom-2 right-2 flex items-center justify-around w-[300px] h-[50px] bg-white p-2 text-md rounded-md translate-x-0 translate-y-0 transition-transform">
                    <FaCircleCheck size={20} className="text-green-400" />
                    Ha ingresado correctamente
                </div>
            )}
            {failure === false? (
                <div className="hidden absolute bottom-2 right-2 items-center justify-around w-[300px] h-[50px] bg-white p-2 text-md rounded-md translate-x-20 translate-y-20 transition-transform"></div>
                ) : (
                <div className="fixed bottom-2 right-2 flex items-center justify-around w-[250px] h-[50px] bg-white p-2 text-md rounded-md translate-x-0 translate-y-0 transition-transform">
                    <FaCircleXmark size={20} className="text-red-400" />
                    Ha habido un problema
                </div>
            )}
        </div>
    )
}
