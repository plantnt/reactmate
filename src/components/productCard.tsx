import { NavLink } from "react-router-dom"
import prod1 from "../assets/products/1.jpg"

export default function ProductCard(){
    return(
        <>
            <NavLink to="productPage">
                <div className="max-w-[200px] rounded-xl bg-white border border-slate-200 cursor-pointer hover:transform">
                    <img src={prod1} className="w-full rounded-t-xl" />
                    <div className="p-4">
                        <h2 className="font-black">Titulo</h2>
                        <h4 className="font-bold">$9999</h4>
                    </div>
                </div>
            </NavLink>
        </>
    )
}