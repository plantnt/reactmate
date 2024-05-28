
import { NavLink } from "react-router-dom"
import { Rate } from "antd";
import { FaLeaf } from "react-icons/fa"

export default function Card1(){

    const values = Math.random() * (5 - 3) + 3;

    return(
        <>
            <NavLink to={'/productPage/2'}>
                <div className='w-[10rem] bg-white border-2 border-slate-200 rounded-lg shadow-md'>
                    <div className="h-[140px] w-full overflow-hidden relative">
                    <FaLeaf size={25} className="text-[#27ff59] w-[30px] h[30px] block absolute top-0 left-0  bg-white rounded-md p-1"/>
                        <img src="src\assets\products\3.jpg" alt="Imagen product" className='object-cover'/>
                    </div>
                    <div className='w-full p-2 bg-white h-[113px] space-y-2'>
                    <Rate allowHalf disabled value={values} className="text-green-400 pt-1 text-xs text-center bg-green-200 rounded-b-full px-1 w-full" />
                    <h3 className='text-[15px] font-semibold truncate'>Mesas de exterior Plastico reciclado</h3>
                        
                        <div className="flex">
                        <h1 className='font-bold text-md'>COP $ 70,000 </h1>
                        </div>
                        
                    </div>
                </div>
            </NavLink>
        </>
    )
}