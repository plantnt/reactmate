import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { FaPhone } from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";


import { supabase } from '../utils/Utils';

import { IoIosCloseCircle, IoIosPin } from 'react-icons/io';
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';
import ProductCard from '../components/productCard';

export default function UserProfile() {
  const { userId } = useParams()

  const [updated, setUpdated] = useState(false);

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

  const [phoneNum, setPhoneNum] = useState('');
  const [address, setAddress] = useState('');

  const [updateError, setUpdateError] = useState(false);
  
  const addPhoneNum = async () => {
    try{
      const { data, error } = await supabase
      .from('users')
      .update({phonenum: phoneNum})
      .eq( 'id', userId )
      .select()

      if(error){ 
        setUpdateError(true)
        throw error
      }
      if(data){
        setUpdateError(false)
        setUpdated(true)
        setTimeout(() => {
          setUpdated(false)
        }, 2000);
        setShowEditNum(false)
      }
       } catch (error) {
       console.error('Error updating profile:', error.message);
       console.log('Error updating profile');
      
      }
    }
    
    const handleNumInput = (e) => {
      e.preventDefault()
      setPhoneNum(e.target.value)
      console.log(phoneNum)
    }
    
    const addAddress = async (e) => {
      try{
        const { data, error } = await supabase
        .from('users')
        .update({address: address})
        .eq( 'id', userId )
        .select()
  
        if(error){ 
          setUpdateError(true)
          throw error
        }
        if(data){
          setUpdateError(false)
          setUpdated(true)
          setTimeout(() => {
            setUpdated(false)
            setShowEditAddress(false)
          }, 2000);
          
        }
         } catch (error) {
         console.error('Error updating profile:', error.message);
         console.log('Error updating profile');
        
        }
      }

    const handleAddressInput = (e) => {
      e.preventDefault()
      setAddress(e.target.value)
  }
   
  //botones para  editar numero y dirección
    const [showEditNum, setShowEditNum] = useState(false)
    const [showEditAddress, setShowEditAddress] = useState(false)
  
    const handleEditNum = () => {
      setShowEditNum((prevEditNum) => !prevEditNum)
    }
  
    const handleEditAddress = () => {
      setShowEditAddress((prevEditAddress) => !prevEditAddress)
    }

//permitir solo valores numericos
  const [value, setValue] = useState('')

  const handleInput = (event: { target: { value: string } }) => {
    const result = event.target.value.replace(/\D/g, '')
    setValue(result)
  }



  return (
    <>
      <div className='flex h-[100vh] w-full'>
        <div className='p-5 border-r-2 w-[300px]'>
          <div className='flex flex-col items-center'>
            <div className='w-[100px] sm:w-[200px] rounded-full'>
              <img src={userData.profilepic} alt="Profile" />
            </div>
            <div className="text-center max-w-[200px] mt-5">
              <h3 className='text-wrap text-xl font-semibold'>{userData.name} {userData.last_name}</h3>
            </div>
          </div>
          <hr className='mt-7'/>
          <div className="flex flex-col items-center mt-4 space-y-3">
            <h2 className='font-normal select-none'>- Añade datos adicionales -</h2>
            <label className='flex'>
              <MdMailOutline size={25} className='text-violet-800 mr-2'/> 
              <p className='cursor-text'>
                {userData.email}
              </p>
            </label>
            <form onSubmit={(e) => {
              e.preventDefault 
              addPhoneNum(e)
              }} className="flex flex-col items-center justify-center space-y-5 mt-7">
              <label className='flex items-center'>
                {showEditNum === true ?
                  <>
                    <FaPhone size={23} className='text-violet-800 mr-2'/>
                    <input type="text" name='phonenum' onChange={(e) => {
                      handleInput(e)
                      handleNumInput(e)
                    }} 
                      value={value} placeholder={userData.phonenum} maxLength={10} className='outline-none border-2 border-violet-800 px-1 rounded-[4px] w-[150px]' />
                      <button onClick={handleEditNum}>
                        <IoIosCloseCircle className="ml-2 transition-all cursor-pointer text-slate-500 hover:text-red-500"/>
                      </button>
                    </>
                :
                  <div className='flex flex-col items-center space-y-2'>
                    <p className='font-semibold'>Teléfono: {userData.phonenum}</p>
                    <button className='flex items-center justify-center space-x-4 p-2 w-[120px] text-xs bg-furnipurple text-white rounded-3xl'
                      onClick={handleEditNum}>
                      <FaPhone size={15} className='text-white mr-2'/>
                      Editar
                    </button>
                  </div>
                }
              </label>
              {showEditNum === true &&
                <button className='bg-gradient-to-r from-[#ff5c5c] to-[#a25bff] px-3 py-1 rounded-full font-bold text-white'
                  type='submit'>
                  Actualizar
                </button>
              }
            </form>
            <form onSubmit={(e) => {
              e.preventDefault
              addAddress(e)
            }} className="flex flex-col items-center justify-center space-y-5 mt-7">
              <label className='flex items-center'>
                {showEditAddress === true ?
                <>
                  <IoIosPin size={23} className='text-violet-800 mr-2'/>
                  <input type="text" name='address' className='outline-none border-2 border-violet-800 px-1 rounded-[4px] w-[150px]' 
                  onChange={handleAddressInput} placeholder={userData.address}/>
                  <button onClick={handleEditAddress}>
                    <IoIosCloseCircle className="ml-2 transition-all cursor-pointer text-slate-500 hover:text-red-500"/>
                  </button>
                </>
                :
                <div className='flex flex-col items-center space-y-2'>
                    <p className='font-semibold'>Dirección: {userData.address}</p>
                    <button className='flex items-center justify-center space-x-4 p-2 w-[120px] text-xs bg-furnipurple text-white rounded-3xl'
                      onClick={handleEditAddress}>
                      <IoIosPin size={15} className='text-white mr-2'/>
                      Editar
                    </button>
                </div>
                }
              </label>
              {showEditAddress === true &&
                <button className='bg-gradient-to-r from-[#ff5c5c] to-[#a25bff] px-3 py-1 rounded-full font-bold text-white'
                  type='submit'>
                  Actualizar
                </button>
              }
            </form>
          </div>
          {updated === false ? (
            <div className="hidden absolute bottom-2 right-2 items-center justify-around w-[300px] h-[50px] bg-white p-2 text-md rounded-md translate-x-20 translate-y-20 transition-transform"></div>
            ) : (
              <div className="fixed bottom-2 right-2 flex items-center justify-around w-[300px] h-[50px] bg-white p-2 text-md rounded-md translate-x-0 translate-y-0 transition-transform">
                    <FaCircleCheck size={20} className="text-green-400" />
                    Datos actualizados
                </div>
            )}
          {updateError === false ? (
            <div className="hidden absolute bottom-2 right-2 items-center justify-around w-[300px] h-[50px] bg-white p-2 text-md rounded-md translate-x-20 translate-y-20 transition-transform"></div>
            ) : (
              <div className="fixed bottom-2 right-2 flex items-center justify-around w-[300px] h-[50px] bg-white p-2 text-md rounded-md translate-x-0 translate-y-0 transition-transform">
                    <FaCircleXmark size={20} className="text-red-400" />
                    Ocurrió un error
                </div>
            )}
        </div>
        
        <div className='flex flex-wrap gap-3 p-3 w-full'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
    
  );
}
