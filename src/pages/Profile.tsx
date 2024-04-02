import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { FaRegCommentDots, FaRegListAlt, FaEllipsisH, FaBoxOpen, FaUser, FaPhone } from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";

import { Pagination, Rate } from 'antd';

import { supabase } from '../utils/Utils';

import Separator from '../components/UI/separator';
import ProductCard from "../components/productCard";
import Filters from "../components/filters";
import Rating from "../components/rating"
import AddProduct from '../components/addProduct';
import { IoIosPin } from 'react-icons/io';

export default function UserProfile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    last_name: "",
    profilepic:""
    
  });
  
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

 const [value, setValue] = useState('')
  const handleInput = (event: { target: { value: string } }) => {
    const result = event.target.value.replace(/\D/g, '')
    setValue(result)
  }

  return (
    <>
      <div className='flex h-[100vh] w-full'>
        <div className='p-5 border-r-2'>
          <div className='flex flex-col items-center'>
            <div className='w-[100px] sm:w-[200px] rounded-full'>
              <img src={userData.profilepic} alt="Profile" />
            </div>
            <div className="text-center max-w-[200px] mt-5">
              <h3 className='text-wrap text-xl font-semibold'>{userData.name} {userData.last_name}</h3>
            </div>
          </div>
          <hr className='mt-7'/>
          <form action='' className="flex flex-col items-center justify-center space-y-2 mt-7">
            <h2 className='font-semibold mb-4 select-none'>- Añade datos adicionales -</h2>
            <label className='flex'>
              <MdMailOutline size={25} className='text-violet-800 mr-2'/> 
              <p className='cursor-text'>
                {userData.email}
              </p>
            </label>
            <label className='flex items-center'>
              <FaPhone size={23} className='text-violet-800 mr-2'/>
              <input type="text" onChange={handleInput} value={value} maxLength={10} className='outline-none border-2 border-violet-800 px-1 rounded-[4px] w-[150px]' />
            </label>
            <label className='flex items-center'>
              <IoIosPin size={23} className='text-violet-800 mr-2'/>
              <input type="text" className='outline-none border-2 border-violet-800 px-1 rounded-[4px] w-[150px]' />
            </label>
            <button className='bg-gradient-to-r from-[#ff5c5c] to-[#a25bff] px-3 py-1 rounded-full font-bold text-white'>
              Actualizar datos
            </button>
          </form>
        </div>
        <div className=''>
          fd
        </div>
        <div className=''>
          fd
        </div>
      </div>


        {/* <div className="relative bg-gray-50 min-h-screen max-w-full py-8">
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
              
            </div> */}
    </>
    
  );
}
