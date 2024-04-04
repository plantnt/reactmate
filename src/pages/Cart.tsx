import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import CardCart from '../components/cardcart';
import Rating from '../components/rating';
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { SiNubank } from "react-icons/si";

const CartPage = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto 1', precio: 10300 },
    { id: 2, nombre: 'Producto 2', precio: 10300 },
  ]); // Estado inicial de productos


  // Función para eliminar todos los productos del carrito
  const eliminarTodo = () => {
    setProductos([]);
  };

  // Función para organizar los productos en el carrito
  const organizar = () => {
    const productosOrdenados = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    setProductos(productosOrdenados);
  };

  // Función para calcular el precio total de los productos en el carrito
  const calcularTotal = () => {
    let total = 0;
    productos.forEach((producto) => {
      total += producto.precio;
    });
    return total;
  };

  return (
    <>
    <div className="flex">
    <div>
    <h1 className="text-5xl pl-8 pt-8 pb-8 font-bold text-purple-400 flex">
        Tu Carrito ‎ <FaCartShopping className="pt-2" />
      </h1>

  <div className="flex p-2 ml-4 top-0">
      <Rating/>

    <div className="flex mt-4 mb-6 pl-8 items-center h-full space-x-6">
      
        <button
           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-full ease-in-out duration-400"
           onClick={organizar}>
           Organizar
        </button>
        
        <button
           className="border-red-500 bg-red-500 hover:bg-red-600 hover:border-red-600 transition duration-400 border-2 font-bold text-white py-2 px-4 rounded transition-full ease-in-out"
           onClick={eliminarTodo}>
           Eliminar Todo
        </button>

      
    </div>
  </div>
       
       <div className="w-full flex justify-left">
       <div className="flexbox pl-3 bg-gray-200 rounded-3xl min-w-[100px] m-5 justify-center">
        {/* Renderizar la lista de productos */}
        {productos.map((producto) => (
          <CardCart key={producto.id} />
        ))}
      </div>
      
       </div>
       <div>
         <h2 className="text-gray-400 text-lg font-semibold flex justify-end mr-6 mb-10">Costo total: ${calcularTotal()}</h2>
      </div>
    </div>

         <div className="w-[400px] h-[1x0vh] bg-[#E2D6FB] space-y-4 ml-44 p-2">
          <h2 className="font-bold text-2xl p-4 text-violet-700">Factura del carrito</h2>

          <div>
          <h1 className="font-bold text-lg p-4 flex justify-center">Metodo de pago</h1>
          <div className="flex space-x-5 justify-center">

          <button className="text-violet-800 hover:text-violet-500 transition-all ease-in-out duration-300">
          <FaCcMastercard size={40}/>
          </button>

          <button className="text-violet-800 hover:text-violet-500 transition-all ease-in-out duration-300">
         <SiVisa size={40}/>
          </button>

          <button className="text-violet-800 hover:text-violet-500 transition-all ease-in-out duration-300">
          <SiNubank size={40}/>
          </button>
          </div>
          </div>


          <div className="grid justify-items-center">
          <h1 className="font-bold text-lg mt-6">Numero de tarjeta</h1>
          <input type="number" className="px-2 border-b-violet-700 border-b-2 focus:outline-none bg-[#E2D6FB] mb-6" />
          </div>

          <div className="flex space-x-4 justify-center mt-4">

            <div className="grid justify-items-center space-y-2">
              <h2 className="font-bold">Fecha de Expiracion</h2>
            <input type="date" className="px-2  border-b-violet-700 border-b-2 focus:outline-none bg-[#E2D6FB]"/>
            </div>
            <div className="grid justify-items-center space-y-2">
              <h2 className="font-bold">Codigo de Seguridad</h2>
            <input type="number" className="px-2  border-b-violet-700 border-b-2 focus:outline-none bg-[#E2D6FB]"/>
            </div>

          </div>
          
<button className="flex justify-center bg-violet-600 hover:bg-violet-700 transition-all ease-in-out duration-400 text-white font-bold px-2 w-full">
  Confirmar
</button>
         </div>
    </div>
    
    </>
  );
};

export default CartPage;
