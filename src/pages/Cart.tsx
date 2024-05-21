import { useState } from 'react';

import {loadStripe} from '@stripe/stripe-js';

import { FaCartShopping } from 'react-icons/fa6';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

import CardCart from '../components/CardItem';
import { CardElement } from '@stripe/react-stripe-js';

const CartPage = () => {
  const [productos, setProductos] = useState([
    { id: 1, name: 'Producto 1', price: 120000, quant: 1 },
    { id: 2, name: 'Producto 2', price: 24000, quant: 1 },
    { id: 3, name: 'Producto 3', price: 124235.5, quant: 1 },
    { id: 4, name: 'Producto 4', price: 2324.56, quant: 1 },
  ]); // Estado inicial de productos


  // Función para eliminar todos los productos del carrito
  const eliminarTodo = () => {
    setProductos([]);
  };

  // Eliminar producto infdividual
  const deleteItem = (id) => { //ignorar errores
    setProductos(productos.filter(producto => producto.id !== id))
  }

  const updateQuantity = (id, newQuantity) => { //ignorar errores
    setProductos(productos.map(producto => 
      producto.id === id ? { ...producto, quant: newQuantity } : producto
    ));
  };

  // Función para calcular el precio total de los productos en el carrito
  const calcularTotal = () => {
    return productos.reduce((total, producto) => total + (producto.price * producto.quant), 0)
  };

  function handleSorting(value: string): void {
    throw new Error('Function not implemented.');
  }
  
  const stripePromise = loadStripe('pk_test_51O24gxD7w9697TwBuGi4XWLac9RwvXWNlQ36mWIqWbaqpVKcec1rT9eBKkF58oK9VSIoXQnPouaWDerydIbN1kK8002PYkrtj5')
  const makePayment = async () => {
    try{
      const stripe = await stripePromise
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify({amount: calcularTotal()})
      })
      const { clientSecret } = await response.json()

      const { error } = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })

      if(error){
        console.error('Pago fallido:', error)
      } else {
        console.log('Pago completado')
      }

    }catch(error){
      console.error('Error', error)
    }
  } 

  function handleShow(){
    console.log("show")
    document.getElementById("container")!.style.width = "400px"
    document.getElementById("container")!.style.justifyContent = "left"
    document.getElementById("openArrow")!.style.display = "none"
    document.getElementById("closeArrow")!.style.display = "initial"
    document.getElementById("actions")!.style.display = "initial"
  }

  function handleHide(){
      console.log("hide")
      document.getElementById("container")!.style.width = "60px"
      document.getElementById("container")!.style.justifyContent = "center"
      document.getElementById("closeArrow")!.style.display = "none"
      document.getElementById("actions")!.style.display = "none"
      document.getElementById("openArrow")!.style.display = "initial"
  }
  
  return (
    <>
      <div className='w-full p-8 px-16 relative'>
        <div className='flex flex-col w-[500px] items-start space-y-5 mb-[3.5em]'>
          <h1 className='flex text-5xl font-bold overflow-hidden text-furnipurple'>Tu Carrito <FaCartShopping className="ml-5" /></h1>
          <div id='container' className='fixed flex items-center justify-left right-0 top-[120px] h-40 w-[400px] border rounded-lg p-3 bg-white transition-all z-[99] overflow-hidden'>
            <IoMdArrowDropleft size={40} id="openArrow" className="hidden text-slate-600 text-xl hover:cursor-pointer z-[100]" onClick={() => handleShow()}/>
            <IoMdArrowDropright size={40} id="closeArrow" className="text-slate-600 text-xl hover:cursor-pointer z-[100]" onClick={() => handleHide()}/>
            <div id='actions' className="block">
              <h1 className="font-semibold text-xl">Total: COP ${calcularTotal()} </h1>
              <button className={calcularTotal() == 0 ? 'w-[200px] font-normal mt-3 p-2 bg-[#d4b5ff] rounded-full text-white text-3xl cursor-not-allowed' : 'w-[200px] font-normal mt-3 p-2 bg-convenientPurple rounded-full text-white text-3xl'}
                      disabled={calcularTotal() == 0}
                      onClick={makePayment}>
                Comprar
              </button>
            </div>
          </div>
          <div className='space-x-4'>
          <select
            className="mr-4 border-2 bg-white border-gray-300 p-3 pr-6 px-4 rounded-full transition-all duration-800 ease-in-out"
            onChange={(e) => handleSorting(e.target.value)}>
            <option value="">Ordenar por...</option>
            <option value="nombre">Nombre</option>
            <option value="precio">Precio</option>
            <option value="fecha">Fecha</option>
            <option value="calificacion">Calificacion</option>
          </select>
            <button className='text-red-600 font-bold rounded-full p-2 px-4 bg-white border-[1.5px] border-red-600 hover:bg-red-600 hover:text-white transition-all'
              onClick={eliminarTodo}>
              Eliminar productos
            </button>
          </div>
        </div>
        <div>
          {productos.map((producto) => (
            <CardCart key={producto.id} producto={producto} deleteItem={deleteItem} updateQuantity={updateQuantity}/>
          ))}
        </div>     
  </div>            
    </>
  );
};

export default CartPage;
