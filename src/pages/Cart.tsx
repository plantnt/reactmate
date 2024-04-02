import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import CardCart from '../components/cardcart';
import Rating from '../components/rating';

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
      <h1 className="text-5xl pl-8 pt-8 pb-8 font-bold text-purple-400 flex">
        Tu Carrito ‎ <FaCartShopping className="pt-2" />
      </h1>

  <div className="flex p-2 ml-4 top-0">
      <Rating/>

    <div className="flex justify-center mt-4 mb-6 pl-8 items-center h-full space-x-6">
      
        <button
           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
           onClick={organizar}>
           Organizar
        </button>
        
        <button
           className="border-red-500 bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 transition duration-400 border-2 font-bold text-white py-2 px-4 rounded transition-full ease-in-out"
           onClick={eliminarTodo}>
           Eliminar Todo
        </button>

      <div className="justify-center items-center">
         <h2 className="text-gray-400 text-lg font-semibold">Costo total: ${calcularTotal()}</h2>
      </div>
    </div>
  </div>
       
      <div className="flexbox pl-4 bg-gray-200 rounded-3xl max-w-[1100px] m-5">
        {/* Renderizar la lista de productos */}
        {productos.map((producto) => (
          <CardCart key={producto.id} />
        ))}
      </div>
      <div className="flex">
     
      
      </div>
    </>
  );
};

export default CartPage;
