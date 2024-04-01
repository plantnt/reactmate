import { useState, useRef, useEffect } from 'react';
import { FaRegCommentDots, FaRegListAlt, FaEllipsisH, FaBoxOpen, FaUser } from 'react-icons/fa';
import ProductCard from "../components/productCard";
import Filters from "../components/filters";
import Rating from "../components/rating"
import AddProduct from '../components/addProduct';
import { Pagination, Rate } from 'antd';
import { NavLink } from 'react-router-dom';
import { supabase } from '../utils/Utils';
import Separator from '../components/UI/separator';

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState<"up" | "down">("down");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    last_name: "",
    profilepic:""
    
  });
  const [products, setProducts] = useState([]);
  
  
window.addEventListener('DOMContentLoaded', async () => {

  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  

  if (!id) {
    console.error('ID no encontrada en la URL.')
    return;
  }

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error al obtener datos:', error.message);
    return;
  }

  if (data) {
    fetchUserData()
  } else {
    console.error('No se encontraron datos para la ID especificada.');
  }
});


  useEffect(() => {
    
    fetchUserData();
  }, []);
  
  
  async function fetchUserData() {
    try {
      const idS = localStorage.getItem('id')
      const { data: users, error } = await supabase
        .from('users')
        .select('id, name, last_name, email, password, profilepic');
        
      if (error) {
        console.error('Error fetching users:', error);
        return;
      }

      
      
      const { data: userData, error: userDataError } = await supabase
      .from('users')
      .select('*')
      .eq('id', idS)
      .single();
      
      if (userDataError) {
        console.error('Error fetching user data:', userDataError);
        return;
      }
      
      console.log('User Data:', userData);
      
      setUserData(userData);
      
      
      
    } catch (error) {
      console.error('Error in fetchUserData:', error);
      console.log(userData.profilepic)
    }
  }
  
 console.log(userData)

 

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
                  className="h-48 m-5 w-48 object-cover rounded-full mx-auto relative z-10"
                  src={userData.profilepic}
                  alt="Profile"
                />
              </div>
              <div className=" pt-8 text-center relative z-10">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                  <h1 id='nameU' className="text-3xl font-rounded">{userData.name}  {userData.last_name}</h1>
                  <div className="flex justify-center items-center mr-20">
                  <div className="flex items-center ml-10 text-slate-700">
                      Calificación:
                      <Rate allowHalf className="mt-[5px] ml-2 text-violet-400 text-sm" />
                  </div>
                  </div>
                </div>
                <br />
                <div className="mt-4 text-center font-rounded">
                  <p className="text-gray-700">
                    <span id='emailU' className="font-semibold">Correo electrónico: {userData.email}</span> , <a href={`mailto:${userData.email}`} className="text-blue-400">Enviar correo</a>
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
  <Separator />        
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
              
            </div>
    </>
    
  );
}
