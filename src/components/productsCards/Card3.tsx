
import { NavLink } from "react-router-dom"
import { Rate } from "antd";
import { FaLeaf } from "react-icons/fa"

export default function Card1(){
    return(
        <>
            <NavLink to={'/productPage'}>
                <div className='w-[10rem] bg-white border-2 border-slate-200 rounded-lg shadow-md'>
                    <div className="h-[140px] w-full overflow-hidden relative">
                    <FaLeaf size={25} className="text-green-300 block absolute top-[4px] left-[4px]  bg-white rounded-full p-[1.2px]"/>
                        <img src="src\assets\products\3.jpg" alt="Imagen product" className='object-cover'/>
                    </div>
                    <div className='w-full p-2 bg-white h-[113px] space-y-2'>
                    <Rate allowHalf disabled value={5} className="text-violet-400 pt-1 text-xs text-center bg-purple-200 rounded-b-full px-1 w-full" />
                    <h3 className='text-[15px] font-semibold text-wrap '>Mueble azul de casa</h3>
                        
                        <div className="flex">
                        <h1 className='font-bold'>COP $ 999.99 </h1>
                        </div>
                        
                    </div>
                </div>
            </NavLink>
        </>
    )
}