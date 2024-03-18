import { useState, useRef, useEffect } from 'react';
import { FaRegCommentDots, FaRegListAlt, FaEllipsisH, FaBoxOpen, FaUser } from 'react-icons/fa';
import ProductCard from "../components/productCard";
import Filters from "../components/filters";
import Footer from "../components/UI/footer";
import Rating from "../components/rating";
import RatingProfile from '../components/ratingProfile';
import AddProduct from '../components/addProduct';
import { Pagination } from 'antd';
import { NavLink } from 'react-router-dom';
import { supabase } from '../utils/Utils';

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState<"up" | "down">("down");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    last_name: "", // Número de teléfono de ejemplo
    
  });
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    // Fetch user data from backend
    fetchUserData();
  }, []);

  // async function fetchUserData(){
  //   const {data} = await supabase
  //     .from('users')
  //     .select('*')
  //     setUserData(data)



  // }
  const fetchUserData = async () => {
    try {
      const response = await fetch('URL_DEL_BACKEND/perfilUsuario');
      if (response.ok) {
        const userData = await response.json();
        setUserData(userData);
      } else {
        console.error('Error al obtener los datos del usuario');
      }
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
    }
  };
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
            <div className=" pt-8 text-center relative z-10">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                <h1 className="text-3xl font-rounded">{userData.name}</h1>
                <div className="flex justify-center items-center mr-20"><RatingProfile /></div>
              </div>
              <br />
              <p className="mt-2 mb-4 text-gray-500 font-rounded">
                ¡Hola a todos! Soy un nuevo usuario en furnimate. Mi propósito es el de comprar muebles en el sitio web y también. he venido a vender un solo armario el cual alguien mas le pudo sacar mucho mas provecho :D, ESTE ES EL PERFIL DE UN USUARIO O VENDEDOR "DE UNA SOLA VEZ" y es una de las 3 categorías en el concepto de furnimate.
              </p>
              <div className="mt-4 text-center font-rounded">
                <p className="text-gray-700">
                  <span className="font-semibold">Correo electrónico: </span> {userData.email}, <a href={`mailto:${userData.email}`} className="text-blue-400">Enviar correo</a>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Teléfono: </span> 
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Fecha de Registro: </span> 
                </p>
                <br />
              </div>
              {/* Resto del código... */}
              <div className="mt-4 flex justify-between">
                <NavLink to='/chatingPage'>
                  <button className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300 border-2 border-blue-500 text-white font-bold py-2 px-4 rounded flex items-center ho">
                    <FaRegCommentDots className="inline-block mr-2 text-xl" />
                    <span className="text-base font-rounded">Empezar chat</span>
                  </button>
                </NavLink>
                <NavLink to="/">
                  <button className="bg-green-500 hover:bg-white hover:text-green-500 hover:border-green-500 transition duration-300 border-2 border-green-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                    <FaRegListAlt className="inline-block mr-2 text-xl" />
                    <span className="text-base font-rounded">Ver en Catálogo</span>
                  </button>
                </NavLink>
                <NavLink to="/ProfilePageView">
                <button className="bg-gray-200 hover:bg-gray-50 hover:text-gray-600 hover:border-gray-300 transition duration-300 border-2 border-gray-300 text-gray-700 font-bold py-2 px-4 rounded flex items-center ho">
                  <FaUser className="text-gray-400 inline-block mr-2 text-xl" />
                  <span className="text-base font-rounded text-gray-400">*Modo perfil externo*</span>
                </button>
                </NavLink>
                <div ref={dropdownRef} className="">
                  <button
                    onClick={handleClick}
                    className="bg-gray-500 hover:bg-white hover:text-gray-500 hover:border-gray-500 transition duration-300 border-2 border-gray-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                  >
                    <span className="text-base font-rounded">Opciones</span>
                    <FaEllipsisH className="inline-block ml-2 text-xl" />
                  </button>
                  {isOpen && (
                    <div
                      className={`absolute left-500 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10 ${dropdownPosition === "up" ? "-top-0" : "top-40"}`}
                    >
                      <div className="py-1">
                        <p className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer font-rounded">Gestionar cuenta</p>
                        <p className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer font-rounded">Cambiar contraseña</p>
                        <p className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer font-rounded">Eliminar cuenta</p>
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
        <h1 className="text-center text-gray-300 text-3xl mb-2">TUS PRODUCTOS</h1>
        <div className="flex justify-center items-center -mb-3">
          <FaBoxOpen className="text-gray-300 text-5xl" />
        </div>
      </div>
      <div className="h-full w-full flex flex-col bg-gray-50">
            <div className="grid grid-flow-col">
              <Filters/>
              <div className="max-w-[60rem] justify-self-start">
                <div className="mt-3">
                  <Rating/>
                </div>
                <div className="max-w-[90%] inline-flex flex-wrap gap-3 ml-3 pt-3">
                  {/* Product Cards */}
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                </div>
                <Pagination className="self-center mt-6" defaultCurrent={1} total={50}></Pagination>
                <div className="grid w-full justify-self-end">
                </div>
              </div>
              <AddProduct/>
            </div>
             <Footer />
          </div>
    </>
    
  );
}
