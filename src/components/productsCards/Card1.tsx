import { NavLink } from "react-router-dom"
import { Rate } from "antd";

export default function Card1(){
    return(
        <>
            <NavLink to={'/productPage'}>
                <div className='w-[10rem] bg-white border-2 border-slate-200 rounded-lg shadow-md'>
                    <div className="h-[140px] w-full overflow-hidden">
                        <img src="src\assets\products\1.jpg" alt="Imagen product" className='object-cover'/>
                    </div>
                    
        <div className='w-full p-2 bg-white'>
             <Rate allowHalf disabled value={5} className="text-violet-400  text-xs text-center w-full" />
            <h3 className='font-semibold text-wrap '>Mueble azul de casa</h3>
        <div className="flex">
            <div className="w-[20px] h-[20px] border p-[2.5px] rounded-sm hover:cursor-pointer">
            <div className="w-full h-full bg-furnipurple rounded-sm"/>
            </div>
            <div className="w-[20px] h-[20px] border p-[2.5px] rounded-sm hover:cursor-pointer">
            <div className="w-full h-full bg-furniorange rounded-sm"/>
            </div>
            <div className="w-[20px] h-[20px] border p-[2.5px] rounded-sm hover:cursor-pointer">
            <div className="w-full h-full bg-[#000] rounded-sm"/>
            </div>
            <div className="w-[20px] h-[20px] border p-[2.5px] rounded-sm hover:cursor-pointer">
            <div className="w-full h-full bg-white rounded-sm border"/>
            </div>
       </div>

<div className="flex">
<h1 className='font-bold'>$ COP 999.99</h1>
</div>
                        
        </div>
                </div>
            </NavLink>
        </>
    )
}