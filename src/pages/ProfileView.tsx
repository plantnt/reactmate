import { useState, useRef, useEffect } from 'react';
import { FaRegCommentDots, FaRegListAlt, FaEllipsisH, FaFlag, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import ProductCard from "../components/productCard";
import Filters from "../components/filters";
import Footer from "../components/UI/footer";
import Rating from "../components/rating";
import { Pagination } from 'antd';
import RatingProfile from '../components/ratingProfile';

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="max-w-screen mx-auto rounded-lg border-gray-200 overflow-hidden">
          <br />
          <div className="md:flex max-w-4xl mx-auto">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 m-5 w-48 object-cover rounded-lg mx-auto"
                src="src/assets/profileIcon.png"
                alt="Profile"
              />
            </div>
            <div className="p-4  text-center">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                <h1 className="text-2xl font-rounded">carlos500m98</h1>
              </div>
              <p className="text-indigo-700 font-semibold font-rounded">EMPRENDEDOR</p>
              <br />
              <p className="mt-2 text-gray-500 font-rounded">
                Esta es la vista externa cuando se visita a un usuario externo, en el cual se dan más
                opciones de calificación y un boton de reporte, que incluye un link hacia el reglamento
                de la pagina y asi reevaluar si este usuario ha cometido una infracción.
              </p>
              <br />

              <div className="mt-4 text-center font-rounded">
                
                <p className="text-gray-700">
                  <span className="font-semibold">Correo electrónico: </span> donjuan@example.com
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Teléfono: </span> +57 345 6789034
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Fecha de Registro: </span> 20 de febrero de 2024
                </p>
<br></br>

<div className="mt-4 text-center font-rounded">
  <div className="flex justify-center items-center space-x-2">
    <RatingProfile />
    {/* Botón de Me gusta */}
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
      <FaThumbsUp className="inline-block mr-1 text-gray-500" />
    </button>
    {/* Botón de No me gusta */}
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
      <FaThumbsDown className="inline-block mr-1 text-gray-500" />
    </button>
  </div>
</div>

              </div>
              <br />

              <div className="mt-4 flex justify-between">
                <a href="https://furnimate.foroactivo.com/">
                  <button className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300 border-2 border-blue-500 text-white font-bold py-2 px-4 rounded flex items-center ho">
                    <FaRegCommentDots className="inline-block mr-2 text-xl" />
                    <span className="text-base font-rounded">Abrir Foro</span>
                  </button>
                </a>
                <a href="http://localhost:3000/">
                  <button className="bg-green-500 hover:bg-white hover:text-green-500 hover:border-green-500 transition duration-300 border-2 border-green-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                    <FaRegListAlt className="inline-block mr-2 text-xl" />
                    <span className="text-base font-rounded">Ver en Catálogo</span>
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
      className="absolute left-500 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10"
    >
      <div className="py-1">
        <p className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer font-rounded">Ver reglamento</p>
        <p className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer font-rounded">Por infracción</p>
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

        <h1 className="text-center text-gray-400 text-xl pb-8">*Se filtrarán solamente los productos de este usuario*</h1>
        <br></br>

        <div className="h-full w-full flex flex-col -m-8">
          <div className="grid grid-flow-col">
            <div className="pl-8" ><Filters />
            </div>
            <div className="max-w-[60rem] justify-self-start ">
              <div className="mt-3">
              </div>
              <div className="max-w-[90%] inline-flex flex-wrap gap-3 ml-8 pt-3">
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
            </div>
          </div>
          <Pagination className="self-center mt-6" defaultCurrent={1} total={50}></Pagination>
          <div className="grid w-full justify-self-end">
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
