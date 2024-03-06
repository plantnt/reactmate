import { Rate } from "antd";
import Navbar from "../components/UI/navbar.tsx"
import { NavLink } from "react-router-dom";

export default function ProductView(){
    return(
        <>
        <Navbar></Navbar>
        <div className=" mt-[30px] ml-8 w-[440px]">
          <NavLink to='/ProfilePageView' className="flex max-w-fit">
          <img className="rounded-full border-2 w-[70px] h-[65px]" src="/src\assets\furniLogo.png"></img>
        <label className="self-center ml-2 font-bold cursor-pointer text-lg">Muebleria Carlos Lozano</label>
          </NavLink>
        
        </div>
        
        <div className="flex w-full h-[380px] px-4 mt-2 ml-4">
            <div className="w-[440px] h-full relative  border-[5px] border-furnipurple rounded-3xl transition-all ease-in-out duration-700">
                <img src="/src\assets\products\1.jpg" className="w-full h-full"></img>
            </div>
            
        <ul className="p-4 w-[500px]">
              <li className="my-4">
                <legend>Nombre del Producto:</legend>
                <input type="text" disabled placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXX" className="border-2 border-violet-400  px-2 w-full bg-purple-200 placeholder:text-violet-500 rounded-full"/>
              </li>

              <li className="my-4">
                <legend>Precio del Producto:</legend>
                <input type="Number" disabled placeholder="$XXXXXX" className="border-2 border-violet-400 px-2 bg-purple-200 placeholder:text-violet-500 rounded-full"/>
              </li>

              <li className="mb-4 absolute w-[800px]">
                <legend>Descripcion del Producto:</legend>
                <input type="text" disabled placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" className="border-2 px-2 border-violet-400  w-full h-[150px] bg-purple-200 placeholder:text-violet-500 rounded-2xl"/>
              </li>
              
          </ul>

          <div className="items-top text-slate-700 mt-10 ml-5 h-[70px]">
                    <label className="align-top">Calificación:</label>
                    <Rate allowHalf className="mt-[4px] ml-2 text-violet-400 text-sm absolute" />
                    <label className="text-gray-400 ml-32">Votos (XXXXX)</label>
                    <div className="mt-2">
                    <label className="text-gray-400">Publicado el XX/XX/XXXX</label>
                    </div>
                    
                    
                </div>
                
        </div>
        <div className="flex w-full justify-end absolute">
    <button className="border-2 border-purple-800 bg-furnipurple hover:bg-purple-700 rounded-full p-2 text-purple-800 hover:text-purple-200  font-bold transition-all ease-in-out duration-500 mx-4 w-[150px]">Añadir al carro</button>
      <button className="border-2 border-orange-500 bg-[#FFA375] hover:bg-[#FF8D55] rounded-full p-2 text-orange-500 hover:text-orange-200 font-bold transition-all ease-in-out duration-500 mr-20 w-[110px]">Comprar</button>
    </div>

        </>
    )
}