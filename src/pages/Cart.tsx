import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import CardCart from '../components/cardcart';
import Rating from '../components/rating';
import BuyCart from "../components/UI/BuyCart"
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
    <div className="flex w-full ml-[10%]">
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
       
       <div className="">
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
    
         <BuyCart/>
    </div>
  </div>
    </>
  );
};

export default CartPage;
