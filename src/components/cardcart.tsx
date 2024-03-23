import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Stars from "./Stars";

// Componente de Carrito
export default function CardCart() {
    const title = "Un gran Sofá gris";
    const price = "10300";

    const handleDelete = () => {
       
        // Lógica para eliminar el producto del carrito
    };

    return (
        
<div className="border-2 bg-gray-50 rounded-r-3xl rounded-l-3xl w-[98%] my-[15px]">
            {/* Componente de Producto en el Carrito */}

            
            <NavLink to="/productPage"> 
            <div className="flex p-4 m-4 items-center justify-items-center">

            <div className="max-w-[250px]  rounded-xl border border-slate-200">
                    <img src="src/assets/products/2.jpg" className="w-full rounded-t-xl bg-contain" alt="Product Image" />
            </div>

            {/* Componente de Información del Carrito */}
            <div className="w-[30%] ml-[50px]">
                <h2 className="font-black text-3xl w-full h-full">{title}</h2>
                <h4 className="font-bold text-lg w-full h-full">${price}</h4>
                <Stars/>
            </div>

            {/* Botón para Ver Producto */}

        <div className="ml-[80px] flex space-x-4">
                <button className="bg-violet-500 hover:bg-violet-600 transition duration-300 border-2 border-violet-800 text-white font-bold px-4 rounded-3xl">
                  <span className="font-rounded text-3xl">Comprar</span>
                </button>
            
            <button onClick={handleDelete} className="group bg-red-500 hover:bg-red-600 hover:ease-in-out duration-300 border-2 border-red-800 text-white font-bold py-2 pl-4 px-4 rounded-3xl">
                <MdDelete className="block group-hover:hidden" size={36}/>
                <span className="font-rounded text-3xl hidden group-hover:block">Eliminar</span>
            </button>
        </div>
            </div>
            </NavLink>
            
</div>
        
        
    );
}