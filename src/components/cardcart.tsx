import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ColorPicker, Rate } from "antd";

// Componente de Carrito
export default function CardCart() {
    const title = "Sofá gris";
    const price = "24000";

    const handleDelete = () => {
        
        // Lógica para eliminar el producto del carrito
    };

    return (
        <div className="flex bg-gray-100 rounded-r-3xl rounded-l-3xl w-[98%] my-[11px] ">
          <div className="flex w-full m-4 items-center justify-between">
            <NavLink to={'/productPage'}>
            <div className="max-w-[180px] rounded-xl border-purple-300 border-2">
              <img src="src/assets/products/2.jpg" className="w-full rounded-t-xl bg-contain" alt="Product Image" />
            </div>
            </NavLink>
            {/* Componente de Información del Carrito */}
            <div className="w-[30%]">
              <h2 className="font-bold text-xl w-full h-full">{title}</h2>
              <h4 className="font-italic text-sm w-full h-full pb-2">{price} COP</h4>
              <Rate allowHalf disabled value={4} className="flex align-center text-violet-400 text-sm bg-purple-200 rounded-lg px-2 w-min" />
              <div className="flex flex-wrap gap-1 w-full mt-2">  
                <div className="w-[40px] h-[40px] border p-[2.5px] rounded-sm hover:cursor-pointer">
                  <div className="w-full h-full bg-furnipurple rounded-sm"/>
                </div>
                <div className="w-[40px] h-[40px] border p-[2.5px] rounded-sm hover:cursor-pointer">
                  <div className="w-full h-full bg-purple-200 rounded-sm"/>
                </div>
                <div className="w-[40px] h-[40px] border p-[2.5px] rounded-sm hover:cursor-pointer">
                  <div className="w-full h-full bg-gray-200 rounded-sm"/>
                </div>
                <div className="w-[40px] h-[40px] border p-[2.5px] rounded-sm hover:cursor-pointer">
                  <div className="w-full h-full bg-white rounded-sm border"/>
                </div>
              </div>
            </div>
            {/* Botón para Ver Producto */}
            <div className="flex space-x-3 mr-7">
              <button className=" bg-convenientPurple hover:bg-purple-200 hover:text-violet-500 transition duration-300 text-white font-bold py-4 px-4 rounded-full w-[120px]">
                <span className="font-rounded text-lg relative">Comprar</span>
              </button>
               <button onClick={handleDelete} title="Eliminar" className="flex items-center justify-center w-[60px] bg-convenientOrange hover:bg-red-200 hover:text-red-600 hover:ease-in-out duration-300 border-red-600 text-white font-bold py-4 px-4 rounded-full">
                <MdDelete size={20}/>
              </button>
            </div>
          </div>
        </div>
    );
}