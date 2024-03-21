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
        <div className="border-2 bg-gray-50 rounded-r-3xl rounded-l-3xl w-[95%] p-4 m-4 flex items-center">
            {/* Componente de Producto en el Carrito */}

            

            <div className="max-w-[300px]  rounded-xl border border-slate-200 cursor-pointer hover:transform ">
                <NavLink to="/productPage">
                    <img src="src/assets/products/2.jpg" className="w-full rounded-t-xl bg-contain" alt="Product Image" />
                </NavLink>
            </div>

            {/* Componente de Información del Carrito */}
            <div className="w-[20%]">
                <h2 className="font-black text-2xl w-full h-full">{title}</h2>
                <h4 className="font-bold text-lg w-full h-full">${price}</h4>
                <Stars/>
            </div>

            {/* Botón para Ver Producto */}
            <NavLink to="/productPage">
                <button className="bg-violet-500 hover:bg-violet-600   transition duration-300 border-2 border-violet-800 text-white font-bold py-2 pl-4 px-4 rounded-xl items-center">
                  <span className="text-base font-rounded">Comprar</span>
                </button>
            </NavLink>

            {/* Botón para Eliminar Producto */}
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600   transition duration-300 border-2 border-red-800 text-white font-bold py-2 pl-4 px-4 rounded-xl items-center">
                Eliminar
            </button>
        </div>
    );
}