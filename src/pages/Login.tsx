import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../utils/Utils";

import { IoMdEye, IoMdEyeOff, IoIosClose } from "react-icons/io";

import googleIcon from '../assets/icons/google.svg'
import Separator from "../components/UI/separator";

// interface UserData {
//     user: import("@supabase/gotrue-js").User;
//     session: import("@supabase/gotrue-js").Session;
    
// }


export default function SignUp(){

    const [formData, setFormData]= useState() 
    const [ users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
      }, [])
    
      async function getUsers() {
        try {
          const { data, error } = await supabase
            .from("users")
            .select("email, password")
          if (error) throw error;
          if (data != null) {
            setUsers(data); // [user1, user2, user3]
          }
        } catch (error) {
          console.log(error);
        }
      }

const [visible, setVisible] = useState(true)
    const handleClick = () => {
        setVisible((prevVisible) => !prevVisible)
    }

    const handleChange = async (e:any) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      
//     async function setToken(data: UserData) {
//         const { user, session } = data;
//         sessionStorage.setItem('supabaseToken', session.access_token)

//     }
// const handleLogin = () =>{
//     supabase.auth.signInWithOAuth({
//         provider: 'google',
//       })
      
// }
// let navigate = useNavigate()

// const [formData,setFormData] = useState({
//     email:'',password:''
// })

// console.log(formData)

// function handleChange(event: { target: { name: any; value: any; }; }){
// setFormData((prevFormData)=>{
//   return{
//     ...prevFormData,
//     [event.target.name]:event.target.value
//   }

// })

// }

// async function handleSubmit(e:any){
//     e.preventDefault()

//     try {
        
// const { data, error } = await supabase.auth.signInWithPassword({
//    email: ``,
//     password: ``
//   })

//       if (error) throw error
//       console.log(data)
//       setToken(data)
//       navigate('/homepage')


   

      
//     if (error) {
        
//         console.error("Error al iniciar sesión:", error);
//       } else {
      
//         console.log("Inicio de sesión exitoso:", data);
//       }
//     } catch (error) {
//       console.error("Error inesperado:", error);
//     }
// }
//   function setToken(_data: { user: import("@supabase/gotrue-js").User; session: import("@supabase/gotrue-js").Session; weakPassword?: import("@supabase/gotrue-js").WeakPassword | undefined; }) {
//     throw new Error("Function not implemented.");
// }

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
                <form className="grid w-full space-y-3 mt-[20px]"onSubmit={handleLogin}>
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
