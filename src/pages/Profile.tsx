import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { FaPhone } from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";


import { supabase } from '../utils/Utils';

import { IoIosClose, IoIosCloseCircle, IoIosPin } from 'react-icons/io';
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';
import ProductCard from '../components/productCard';
import { toast, Toaster } from 'react-hot-toast';
import ProductCardF from '../components/productCardF';



export default function UserProfile() {
  const FavoritesList = () => {
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites);
    }, []);

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

  const [phoneNum, setPhoneNum] = useState('');
  const [address, setAddress] = useState('');
  
  const addPhoneNum = async () => {
    try{
      const { data, error } = await supabase
      .from('users')
      .update({phonenum: phoneNum})
      .eq( 'id', userId )
      .select()

      if(error){ 
        toast.error('Ocurrió un error')
        throw error
      }
      if(data){
        setShowEditNum(false)
      }
       } catch (error) {
       console.error('Error updating profile:', error.message);
       console.log('Error updating profile');
      
      }
    }
    
    const handleNumInput = (e:any) => {
      e.preventDefault()
      setPhoneNum(e.target.value)
    }
    
    const addAddress = async () => {
      try{
        const { data, error } = await supabase
        .from('users')
        .update({address: address})
        .eq( 'id', userId )
        .select()
  
        if(error){ 
          throw error
        }
        if(data){
          setShowEditAddress(false)
          
        }
         } catch (error) {
         console.error('Error updating profile:', error.message);
         console.log('Error updating profile');
        
        }
      }

    const handleAddressInput = (e:any) => {
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

  // Abrir modal para eliminar cuenta

  const [openDelProfModal, setOpenDelProfModal] = useState(false)

  const openDeleteProfileModal = () => {
    setOpenDelProfModal((prevModalState) => !prevModalState)
  }

  // Verificar el nombre de la cuenta para poder eliminarla
  const [AccName, setAccName] = useState('')
  const [nameMatch, setNameMatch] = useState(true)

  const accountUsername = userData.name + ' ' + userData.last_name

  const handleAccName = (e:any) => {
    const accValue = e.target.value
    setAccName(accValue)
    accValue === accountUsername ? setNameMatch(false) : setNameMatch(true)
  }

  //Eliminar cuenta
  const navigate = useNavigate()

  const handleDeleteAccount = async () => {
    const { error } = await supabase
    .from('users')
    .delete()
    .eq('email', userData.email)
    sessionStorage.removeItem('supabaseSession')
    if (error) {
      throw error;
    }    
    navigate('/')
  }

  return (
    <>
      <div className='sm:flex h-[100vh] w-full'>
        <Toaster
        position="top-center"
        reverseOrder={false}
        />
        <div className='p-5 border-r-2 min-w-[300px] border-b-2 border-slate-300'>
          <div className='flex flex-col items-center'>
            <div className='w-[100px] sm:w-[200px] rounded-full'>
              <img src={userData.profilepic} alt="Profile" />
            </div>
            <div className="text-center max-w-[200px] mt-5">
              <h3 className='text-wrap text-xl font-semibold'>{userData.name} {userData.last_name}</h3>
            </div>
          </div>
          <hr className='mt-7'/>
          <div className="flex flex-col items-center mt-4">
            <h2 className='font-normal text-lg select-none text-furniorange'>- Añade datos adicionales -</h2>
            <label className='flex mt-3'>
              <MdMailOutline size={25} className='text-violet-800 mr-2'/> 
              <p className='cursor-text'>
                {userData.email}
              </p>
            </label>
            <form onSubmit={(e) => {
              e.preventDefault 
              addPhoneNum()
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
                <button className='bg-gradient-to-r from-[#ff5c5c] to-[#a25bff] px-3 py-1 rounded-full font-bold text-white'>
                  Actualizar
                </button>
              }
            </form>
            <form onSubmit={(e) => {
              e.preventDefault
              addAddress()
            }} className="flex flex-col items-center justify-center space-y-5 mt-3">
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
                <button className='bg-gradient-to-r from-[#ff5c5c] to-[#a25bff] px-3 py-1 rounded-full font-bold text-white'>
                  Actualizar
                </button>
              }
            </form>
            <button className='mt-[30px] w-[150px] 
                              p-2 border-2 border-red-600 rounded-full text-red-600
                              hover:bg-red-600 hover:text-white transition-colors'
                    onClick={openDeleteProfileModal}>
              Eliminar cuenta
            </button>
            {openDelProfModal && 
              <form className='fixed bg-white shadow-md p-6 w-[80%] sm:w-[40%] max-w-[600px] h-[330px] top-[100px] sm:top-[140px] left-[10%] sm:left-[30%] rounded-xl z-50'>
                  <IoIosClose size={28} className="text-slate-400 absolute top-3 right-3 hover:cursor-pointer hover:scale-105 hover:text-red-600 transition-all"
                              onClick={openDeleteProfileModal}/>

                  <p className='text-2xl font-bold'>Eliminar cuenta</p>
                  <hr className='m-3'/>
                  <div className="flex flex-col justify-between h-[220px]">
                    <p className='text-lg'>Esta acción es permanente. Una vez eliminada, la cuenta no se puede recuperar.</p>
                    <p className='text-lg mt-3 font-bold'>Escriba el nombre de su cuenta.</p>
                    <input value={AccName} type="text" className='border-2 border-slate-300 text-slate-600 p-2 rounded-lg h-[2em] outline-none'
                          onChange={handleAccName}/>
                    <button type='submit' className={nameMatch == true ? 'bg-red-500 bg-opacity-60 rounded-lg text-white px-4 py-2 select-none cursor-not-allowed' : 'bg-red-500 rounded-lg text-white px-4 py-2 hover:bg-red-600 transition-colors'}
                            disabled={nameMatch} onSubmit={handleDeleteAccount} onClick={handleDeleteAccount}>
                      Eliminar mi cuenta
                    </button>
                  </div>
              </form>
            }
          </div>
          {/* {updated === false ? (
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
            )} */}
        </div>
        <div className='space-y-5'>
          <div className='flex flex-wrap p-3 overflow-hidden w-full'>
            <h3 className='text-wrap text-xl font-semibold'>Productos de {userData.name || 'nombre'} {userData.last_name || 'apellido'}</h3>
            <div className='flex flex-wrap gap-3 p-3 w-full'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <div className='flex flex-wrap p-3 overflow-hidden w-full'>
            <h3 className='text-wrap text-xl font-semibold'>Favoritos de {userData.name || 'nombre'} {userData.last_name || 'apellido'}</h3>
            <div className='flex flex-wrap gap-3 p-3 h-full w-full'>
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
      </div>
    </>
    
  );
}
}