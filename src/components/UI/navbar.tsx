import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import { FaCommentDots, } from 'react-icons/fa';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

import cartIcon from '../../assets/cartIcon.png';
import profileIcon from '../../assets/profileIcon.png';
import textLogo from '../../assets/textLogo.png';
import furniLogo from '../../assets/furniLogo.png';

import "./ui.css";

const Navbar = () => {  
    const isLogged = !!sessionStorage.getItem('supabaseSession');
    const isUserId = sessionStorage.getItem('userId');

    console.log('user sessiom',isLogged)
    console.log('user id:',isUserId)
        
       
    // Burger menu

    const [showMenu, setShowMenu] = useState(false)
    const handleBurgerMenu = () => {
        setShowMenu((prevMenu) => !prevMenu)
    }

    // Profile modal
    
    const [showPfpModal, setShowPfpModal] = useState(false)

    const handleProfileClick = () => {
        setShowPfpModal((prevPfpStatus) => !prevPfpStatus)
    }

    // SignOut
    const navigate = useNavigate()
    const handleSignOut = () => {
        sessionStorage.removeItem('supabaseSession');
        sessionStorage.removeItem('userId');
        sessionStorage.clear
        navigate('/')
        window.location.reload()
        setTimeout(() => {
            toast.success('Se ha cerrado sesión')
        }, 5000)
    }

    return (
        <div className='relative'>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <nav className="sticky top-0 flex sm:justify-center justify-between items-center space-x-9 w-full p-3 bg-white border-slate-300 border-b-[1px] z-50">
                <NavLink to='/'>
                    <img src={textLogo} className=" sm:block w-36 h-auto hidden"/>
                    <img src={furniLogo} className=" block w-16 h-auto sm:hidden"/>
                </NavLink>
                <div className='sm:w-[30%]'>
                    <form className='flex items-center'>
                        <input type="search" className="bg-slate-200 rounded-l-3xl outline-none px-2 h-7 text-gray-900 w-[85%] hidden sm:block"/>
                        <button className="justify-center items-center sm:rounded-l-none rounded-3xl  h-7 w-14 bg-furnipurple cursor-pointer hidden sm:flex">
                            <FaMagnifyingGlass className="text-white"/>
                        </button>
                    </form>
                    <form className="sm:hidden block relative mx-auto w-max">
                        <input type="search" 
                            className="peer cursor-pointer relative z-10 h-12 w-9 max-w-[185px] rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-convenientPurple focus:pl-16 focus:pr-4 transition-all" />
                        <FaMagnifyingGlass className="absolute top-4 left-4 text-slate-800 cursor-pointer border-gray-500"/>
                    </form>
                </div> 
                {!showMenu ? 
                    <RxHamburgerMenu size={30} className=" text-convenientOrange cursor-pointer sm:hidden block"
                    onClick={handleBurgerMenu}/>
                    :
                    <IoCloseOutline size={38} className=" text-convenientOrange cursor-pointer sm:hidden block"
                    onClick={handleBurgerMenu}/>
                 }
                <div className="hidden sm:flex">     
                    <ul className="flex p-2 space-x-3 items-center">
                        <li>
                            <NavLink to='/cartPage'>
                                <img src={cartIcon} className="w-[35px] h-auto" title='Carrito'/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/chatHome'>
                                <FaCommentDots size={35} className="text-purple-400 w-[70px]" title='Comunidad'/> 
                            </NavLink>
                        </li>
                        {isLogged ? 
                        <li>
                            {showPfpModal ? 
                                <>
                                    <img src={profileIcon} className="w-[35px] h-auto cursor-pointer" title='Perfil' onClick={handleProfileClick}/>
                                    <ul className='fixed mt-4 bg-white z-50 shadow-md p-3 rounded-md space-y-4'>
                                        <NavLink to={`/profilePage/${isUserId}`} onClick={handleProfileClick}>
                                            <li>Perfil</li> 
                                        </NavLink>
                                        <hr />
                                        <li className='text-red-500 cursor-pointer'
                                            onClick={handleSignOut}>Cerrar sesión</li> 
                                    </ul>
                                </>
                                :
                                <img src={profileIcon} className="w-[35px] h-auto cursor-pointer" title='Perfil' onClick={handleProfileClick}/>
                            }
                        </li>
                        :
                        <li>
                            <div className="flex flex-row space-x-3">
                                <NavLink to='/logIn'>
                                    <button className="flex justify-center items-center bg-[#945aff] hover:bg-[#7b5aff] px-3 h-10 w-[120px] text-white font-semibold hover:font-black rounded-2xl transition-all ease-in-out">
                                        ENTRAR
                                    </button>
                                </NavLink>
                                <NavLink to='/signUp'>
                                    <button className="flex justify-center items-center bg-[#ff6c6c] hover:bg-[#f65858] px-3 h-10 w-[120px] text-white font-semibold hover:font-black rounded-2xl transition-all ease-in-out">
                                        REGISTRARSE
                                    </button>
                                </NavLink>
                            </div>
                        </li>
                        }
                    </ul>
                </div>
            </nav>
            {showMenu &&
            <div className='sticky sm:hidden block w-full p-5 bg-white z-50'>
                <ul className='flex flex-col p-2 space-y-4'>
                    <NavLink to={`/profilePage/${isUserId}`}>
                        <button onClick={handleBurgerMenu}>
                            Mi perfil
                        </button>
                    </NavLink>
                    <hr />
                    <NavLink to='/cartPage'>
                        <button onClick={handleBurgerMenu}>
                            Carrito
                        </button>
                    </NavLink>
                    <hr />
                    <NavLink to='/chatHome'>
                        <button onClick={handleBurgerMenu}>
                            Comunidad
                        </button>
                    </NavLink>
                    <hr />
                    <NavLink to='/termsOfService'>
                        <button onClick={handleBurgerMenu}>
                            Términos y condiciones
                        </button>
                    </NavLink>
                    <hr />
                    <NavLink to='/helpPage'>
                        <button onClick={handleBurgerMenu}>
                            Ayuda
                        </button>
                    </NavLink>
                </ul>
            </div>
            }
        </div>
    );
}

export default Navbar;
 