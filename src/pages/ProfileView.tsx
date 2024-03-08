import { useState, useRef, useEffect } from 'react';
import { FaRegCommentDots, FaRegListAlt, FaFlag, FaBoxOpen, FaUser } from 'react-icons/fa';
import ProductCard from "../components/productCard";
import Filters from "../components/filters";
import Footer from "../components/UI/footer";
import Rating from "../components/rating";
import RatingUser from '../components/ratingUser';
import AddProduct from '../components/addProduct';
import { Pagination } from 'antd';
import RatingProfile from '../components/ratingProfile';
import { NavLink } from 'react-router-dom';

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState<"up" | "down">("down");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, []);

  useEffect(() => {
    if (dropdownRef.current) {
      const dropdownBottom = dropdownRef.current.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      const dropdownTop = dropdownRef.current.getBoundingClientRect().top;
      if (dropdownBottom > windowHeight && dropdownTop > windowHeight / 2) {
        setDropdownPosition("up");
      } else {
        setDropdownPosition("down");
      }
    }
  }, [isOpen]);

  return (
    <>
      <div className="relative bg-gray-50 min-h-screen max-w-full py-8">
        {/* Fondo rectangular */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 max-w-screen mx-auto rounded-lg border-gray-200 overflow-hidden">
          <br />
          <div className="max-w-4xl mx-auto">
            <div className="md:flex-shrink-0 bg-purple-100 max-w-full rounded-lg">
              <img
                className="h-48 m-5 w-48 object-cover rounded-lg mx-auto relative z-10"
                src="src/assets/profileIcon.png"
                alt="Profile"
              />
            </div>
            <div className="p-4 text-center relative z-10">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold pt-4">
                <h1 className="text-2xl font-rounded">juanca54</h1>
                <p className="text-indigo-700 font-semibold font-rounded">EMPRENDEDOR</p>
                <div className="flex justify-center items-center mr-20"><RatingProfile /></div>
              </div>
              <br />
              <p className="mt-2 mb-4 text-gray-500 font-rounded">
                ¡Hola a todos! Soy un nuevo emprendedor en furnimate. Mi proposito es vender los productos y servicios, uno de ellos es restaurar muebles viejos, dañados o de segunda mano y asi efectuarlo por esta plataforma :D, ESTE ES EL PERFIL DE UN EMPRENDEDOR O "MINIEMPRESA" y es una de las 3 categorías en el concepto de furnimate.
              </p>
              <a href="https://www.google.com/maps/place/Muebleria+Felipe+del+Valle/@3.4332404,-76.5012979,14z/data=!4m10!1m2!2m1!1sgoogle+maps+muebles!3m6!1s0x8e30a70088051b37:0x3735d8f785c6f6dd!8m2!3d3.4425281!4d-76.4996951!15sChNnb29nbGUgbWFwcyBtdWVibGVzIgOIAQFaFSITZ29vZ2xlIG1hcHMgbXVlYmxlc5IBD2Z1cm5pdHVyZV9zdG9yZeABAA!16s%2Fg%2F1pzwkxllt?entry=ttu" className="text-blue-500 hover:underline">Ubicación de mi negocio</a>
              <br></br>
              <a href="https://www.instagram.com/" className="text-blue-500 hover:underline">Mi instagram</a>
              <br />
              <div className="mt-4 text-center font-rounded">
                <p className="text-gray-700">
                  <span className="font-semibold">Correo electrónico: </span> juancamilo@example.com, <a href="mailto:correo@example.com" className="text-blue-400">Enviar correo</a>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Teléfono: </span> +57 345 6789034
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Fecha de Registro: </span> 24 de enero de 2024
                </p>
                <br></br>
                <p>
                  <span><div className="flex justify-center items-center mr-20"><RatingUser/></div></span>
                </p>
                <br />
              </div>
              <div className="mt-4 flex justify-between">
                <NavLink to='/chatingPage'>
                  <button className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300 border-2 border-blue-500 text-white font-bold py-2 px-4 rounded flex items-center ho">
                    <FaRegCommentDots className="inline-block mr-2 text-xl" />
                    <span className="text-base font-rounded">Empezar chat</span>
                  </button>
                </NavLink>
                <a href="http://localhost:3000/">
                  <button className="bg-green-500 hover:bg-white hover:text-green-500 hover:border-green-500 transition duration-300 border-2 border-green-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                    <FaRegListAlt className="inline-block mr-2 text-xl" />
                    <span className="text-base font-rounded">Ver en Catálogo</span>
                  </button>
                </a>
<a href="http://localhost:3000/profilePage">
  <button className="bg-gray-200 hover:bg-gray-50 hover:text-gray-600 hover:border-gray-300 transition duration-300 border-2 border-gray-300 text-gray-700 font-bold py-2 px-4 rounded flex items-center ho">
    <FaUser className="text-gray-400 inline-block mr-2 text-xl" />
    <span className="text-base font-rounded text-gray-400">*Modo Usuario*</span>
  </button>
</a>
                <div ref={dropdownRef} className="">
  <button
    onClick={handleClick}
    className="bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 transition duration-300 border-2 border-red-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
  >
    <span className="text-base font-rounded">Reportar</span>
    <FaFlag className="inline-block ml-2 text-xl" />    
  </button>
  {isOpen && (
    <div
      className={`absolute left-500 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10 ${dropdownPosition === "up" ? "-top-0" : "top-40"}`}
    >
      <div className="py-1">
        <p className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer font-rounded">Ver reglamento</p>
        <p className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer font-rounded">Denunciar usuario</p>
      </div>
    </div>
  )}
</div>
              </div>
            </div>
          </div>
        </div>
        {/* Esta es la linea separadora q separa jaajaj */}
        <hr className="my-8 border-b border-gray-200 mx-4" />
        <h1 className="text-center text-gray-300 text-3xl mb-2">PRODUCTOS</h1>
        <div className="flex justify-center items-center -mb-2">
          <FaBoxOpen className="text-gray-300 text-5xl" />
        </div>
        
        <>
        </>
        
      </div>
      <div className="h-full w-full flex flex-col bg-gray-50">
            <div className="grid grid-flow-col">
              <Filters/>
              <div className="max-w-[60rem] justify-self-start">
                <div className="mt-3">
                  <Rating/>
                </div>
                <div className="max-w-[90%] inline-flex flex-wrap gap-3 ml-3 pt-3">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  
                </div>

                 <Pagination className="self-center mt-6" defaultCurrent={1} total={50}></Pagination>
                <div className="grid w-full justify-self-end">
                </div>
              
              </div>
            </div>
             <Footer />
          </div>
    </>
    
  );
}
