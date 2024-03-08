import { NavLink } from "react-router-dom";

// Componente de Carrito
export default function CardCart() {
    const title = "Ejemplo de Producto";
    const price = 9999;

    const handleDelete = () => {
        // Lógica para eliminar el producto del carrito
    };

    return (
        <div className="card border-4 rounded-r-3xl rounded-l-3xl w-7/12 p-4 m-2 flex items-center">
            {/* Componente de Producto en el Carrito */}
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
            <NavLink to="/productPage" className="ml-auto mr-4 font-bold bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Ver Producto
            </NavLink>

            {/* Botón para Eliminar Producto */}
            <button onClick={handleDelete} className="bg-red-500 font-bold text-white py-2 px-4 rounded hover:bg-red-600">
                Eliminar
            </button>
        </div>
    );
}