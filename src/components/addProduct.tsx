import { BiAddToQueue } from "react-icons/bi";
import {NavLink} from 'react-router-dom'

export default function AddProduct(){
  
  const isLogged = !!sessionStorage.getItem('supabaseSession');

  return(
    <>
      {isLogged ? 
      <NavLink to='/productUpload'>
        <button className="
        fixed top-[80vh] right-[40px]
        w-[70px] h-[70px]
        bg-furnipurple
        hover:bg-violet-800
        ease-in-out 
        duration-1000
        rounded-full  
        p-2 flex justify-center 
        items-center 
        text-white
        "> 
          <BiAddToQueue size={35} />
        </button>
      </NavLink>
      :
      <></>
      }
    </>
  )
}