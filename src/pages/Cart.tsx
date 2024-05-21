import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import CardCart from '../components/cardcart';
import BuyCart from "../components/UI/BuyCart"
const CartPage = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto 1', precio: 24000 },
    { id: 2, nombre: 'Producto 2', precio: 24000 },
  ]); // Estado inicial de productos


  // Función para eliminar todos los productos del carrito
  const eliminarTodo = () => {
    setProductos([]);
  };

  // Función para calcular el precio total de los productos en el carrito
  const calcularTotal = () => {
    let total = 0;
    productos.forEach((producto) => {
      total += producto.precio;
    });
    return total;
  };

  function handleSorting(value: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
        <div className="bg-purple-100 max-w-full pb-4 pt-2 text-center">
          <h1 className="text-5xl pt-8 pb-8 font-bold text-purple-400 flex justify-center items-center">
            Tu Carrito <FaCartShopping className="absolute size-24 opacity-20 mt-2" />
          </h1>
          
        </div>


    <div className="flex w-full ml-[5%]">
    <div>

  <div className="flex pl-1 ml-4 top-0">

    <div className="flex mt-8 -pb-6 pr-8 pl-2 py-2 items-center h-full space-x-6 border-2 rounded-md">
      
    <div className="flex">

  <select
    className="mr-4 border-2 border-gray-300 font-bold p-3 px-4 rounded transition-all duration-800 ease-in-out"
    onChange={(e) => handleSorting(e.target.value)}>
    <option value="">Ordenar por...</option>
    <option value="nombre">Nombre</option>
    <option value="precio">Precio</option>
    <option value="fecha">Fecha</option>
  </select>
  
  <button
    className="border-red-700 bg-red-500 hover:bg-white hover:text-red-600 hover:border-red-600 transition-all duration-800 border-2 font-bold text-white py-3 px-4 rounded transition-full ease-in-out"
    onClick={eliminarTodo}>
    Eliminar Todo
  </button>

</div>

      <div>
         <h2 className="text-gray-700 text-lg font-semibold flex justify-end mr-6">Costo total: {calcularTotal()} COP</h2>
      </div>
      
    </div>
  </div>
       
       <div className="">
       <div className="flexbox pl-3 bg-purple-50 border-purple-200 rounded-3xl min-w-[100px] m-5 justify-center border-2">
        {/* Renderizar la lista de productos */}
        {productos.map((producto) => (
          <CardCart key={producto.id} />
        ))}
      </div>
      
       </div>

         
    </div>

    <div className="">
    <BuyCart/>
    </div>

  </div>
    </>
  );
};

export default CartPage;
