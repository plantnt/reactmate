import { FaEllipsisVertical } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

// Componente de Carrito
export default function CardCart() {
    const title = "Un gran Sofá gris";
    const price = "10300";

    const handleDelete = () => {
        // Lógica para eliminar el producto del carrito
    };

    return (
        <div className="border-2 bg-gray-50 rounded-r-3xl rounded-l-3xl w-7/12 p-4 m-4 flex items-center justify-between">
            {/* Componente de Producto en el Carrito */}

            <FaEllipsisVertical className="-mr-10 text-gray-400"/>
            <FaEllipsisVertical className="text-gray-400"/>

            <div className="max-w-[200px] rounded-xl border border-slate-200 cursor-pointer hover:transform">
                <NavLink to="/productPage">
                    <img src="src/assets/products/2.jpg" className="w-full rounded-t-xl" alt="Product Image" />
                </NavLink>
            </div>

            {/* Componente de Información del Carrito */}
            <div className="ml-4">
                <h2 className="font-black">{title}</h2>
                <h4 className="font-bold">${price}</h4>
            </div>

            {/* Botón para Ver Producto */}
            <NavLink to="/productPage">
                <button className="bg-orange-400 hover:bg-white hover:text-orange-400 hover:border-orange-400 transition duration-300 border-2 border-orange-400 text-white font-bold py-2 pl-4 px-4 rounded items-center">
                  <span className="text-base font-rounded">Ver producto</span>
                </button>
            </NavLink>

            {/* Botón para Eliminar Producto */}
            <button onClick={handleDelete} className="border-red-500 bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 transition duration-400 border-2 font-bold text-white py-2 px-4 rounded hover:bg-red-600">
                Eliminar
            </button>
        </div>
    );
}