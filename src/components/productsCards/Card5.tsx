
import { NavLink } from "react-router-dom"
import { Rate } from "antd";

export default function Card1(){
    return(
        <>
            <NavLink to={'/productPage'}>
                <div className='w-[10rem] bg-white border-2 border-slate-200 rounded-lg shadow-md'>
                    <div className="h-[140px] w-full overflow-hidden">
                        <img src="src\assets\products\5.jpg" alt="Imagen product" className='object-cover'/>
                    </div>
                    <div className='w-full p-2 bg-white'>
                    <Rate allowHalf disabled value={5} className="text-violet-400 pt-1 text-xs text-center bg-purple-200 rounded-full px-1 w-full mt-2" />
                        <h3 className='font-semibold text-wrap '>Mueble azul de casa</h3>
                        
                        <div className="flex">
                        <h1 className='font-bold'>$ COP 999.99</h1>
                        </div>
                        
                    </div>
                </div>
            </NavLink>
        </>
    )
}