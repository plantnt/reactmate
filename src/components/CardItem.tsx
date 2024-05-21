import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Rate } from "antd";
import { useState } from "react";

// Componente de Carrito
export default function CardCart({ producto, deleteItem, updateQuantity  }) { //Ignorar errores

  const [quant, setQuant] = useState(producto.quant)

  const addQuantity = () => {
    const newQuant = quant + 1
    setQuant(newQuant)
    updateQuantity(producto.id, newQuant)

  }

  const takeQuantity = () => {
    if(quant > 0){
      const newQuant = quant - 1
      setQuant(newQuant)
      updateQuantity(producto.id, newQuant)
    }
    
  }


    return (
        <div className="flex bg-slate-100 rounded-r-3xl rounded-l-3xl w-[98%] my-[11px] ">
          <div className="flex w-full m-4 items-center justify-between">
              <NavLink to={'/productPage'}>
                <div className="max-w-[180px] rounded-xl border-slate-300 border-2">
                  <img src="src/assets/products/2.jpg" className="w-full rounded-t-xl bg-contain" alt="Product Image" />
                </div>
              </NavLink>
              {/* Componente de Información del Carrito */}
            <div className="flex flex-col w-[600px]">
              <div className="w-[30%]">
                <h2 className="font-bold text-xl w-full h-full">{producto.name}</h2>
                <h4 className="text-2xl font-italic w-full h-full pb-2">COP ${producto.price}</h4>
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
            </div>
            {/* Botón para Ver Producto */}
            <div className="flex space-x-3 mr-7">
              <div className="flex items-center">
                <button className={quant == 0 ? "flex items-center justify-center text-white font-bold w-[25px] rounded-l-full h-[25px] bg-[#d4b5ff] cursor-not-allowed" :"flex items-center justify-center text-white font-bold w-[25px] rounded-l-full h-[25px] bg-convenientPurple hover:bg-[#6c28cc] hover:text-xl"}
                        onClick={takeQuantity}
                        disabled={quant == 0}>
                  -
                </button>
                <input type="text" value={quant} className="text-center w-[30px] outline-none" readOnly/>
                <button className="flex items-center justify-center 
                                  text-white font-bold w-[25px] rounded-r-full 
                                  h-[25px] bg-convenientPurple hover:bg-[#6c28cc] 
                                  hover:text-xl"
                        onClick={addQuantity}>
                  +
                </button>
              </div>
              <button 
                onClick={() => deleteItem(producto.id)} 
                title="Eliminar" 
                className="flex items-center justify-center w-[60px] 
                        bg-convenientOrange hover:bg-red-200 hover:text-red-600 
                        hover:ease-in-out duration-300 border-red-600 text-white 
                        font-bold py-4 px-4 rounded-full">
                <MdDelete size={20}/>
              </button>
            </div>
          </div>
        </div>
    );
}