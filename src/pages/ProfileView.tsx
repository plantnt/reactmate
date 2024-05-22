import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { FaPhone } from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";


import { supabase } from '../utils/Utils';

import { IoIosPin } from 'react-icons/io';

import ProductCard from '../components/productCard';

import feli from '../assets/feli.jpg'

export default function UserProfile() {
  const { userId } = useParams()
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    last_name: "",
    profilepic:"",
    phonenum: '',
    address: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        const { data, error } = await supabase
          .from('users')
          .select('id, name, last_name, email, profilepic, phonenum, address')
          .eq('id', userId)
          .single();
        
        if (error) {
          console.error('Error fetching user data:', error.message);
          return;
        }
        
        if (data) {
          setUserData(data);
        } else {
          console.error('No user data found for the specified ID.');
        }
      } catch (error) {
        console.error('Error in fetchUserData:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <>
      <div className='flex h-[100vh] w-full'>
        <div className='p-5 border-r-2 min-w-[300px]'>
          <div className='flex flex-col items-center'>
            <div className='w-[100px] sm:w-[200px] rounded-full'>
              <img src={userData.profilepic || feli} alt="Profile" />
            </div>
            <div className="text-center max-w-[200px] mt-5">
              <h3 className='text-wrap text-xl font-semibold'>{userData.name || 'nombre'} {userData.last_name || 'apellido'}</h3>
            </div>
          </div>
          <hr className='mt-7'/>
          <div className="flex flex-col items-center mt-4">
            <h2 className='font-normal text-lg select-none text-furniorange'>- Añade datos adicionales -</h2>
            <label className='flex mt-3'>
              <MdMailOutline size={25} className='text-violet-800 mr-2'/> 
              <p className='cursor-text truncate w-[190px]' title={userData.email || 'loremipsumdolor@gmail.com'}>
                {userData.email || 'loremipsumdolor@gmail.com'}
              </p>
            </label>
            <div className="flex flex-col items-center justify-center space-y-5 mt-7">
              <label className='flex items-center'>
                  <div className='flex flex-col items-center space-y-2'>
                    <p className='font-semibold w-[190px]' title={userData.phonenum || '123456789'}>Teléfono: {userData.phonenum || '123456789'}</p>
                    <FaPhone size={15} className='text-white mr-2'/>
                  </div>
              </label>
            </div>
            <div className="flex flex-col items-center justify-center space-y-5 mt-3">
              <label className='flex items-center'>
                <div className='flex flex-col items-center space-y-2'>
                    <p className='font-semibold truncate w-[190px]' title={userData.address || 'lorem ipsum dolor'}>Dirección: {userData.address || 'lorem ipsum dolor'}</p>
                    <IoIosPin size={15} className='text-white mr-2'/>
                </div>
              </label>
            </div>
          
          </div>
          
        </div>
        
        <div className='flex flex-wrap gap-3 p-3 overflow-hidden h-full w-full'>
          <h3 className='text-wrap text-xl font-semibold'>Productos de {userData.name || 'nombre'} {userData.last_name || 'apellido'}</h3>
          <div className='flex flex-wrap gap-3 p-3 h-full w-full'>
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
        </div>
      </div>
    </>
    
  );
}
