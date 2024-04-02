import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import { FaCommentDots, } from 'react-icons/fa';
import { FaMagnifyingGlass } from "react-icons/fa6";

import cartIcon from '../../assets/cartIcon.png';
import profileIcon from '../../assets/profileIcon.png';
import textLogo from '../../assets/textLogo.png';

import "./ui.css";

const Navbar = () => {
    const [logged, setLogged] = useState(false)
    return (
        <nav className="sticky top-0 w-full bg-white border-slate-300 border-b-[1px] z-50">
            <div className="container w-full">
                <div className="flex flex-row py-2 items-center">
                    <div className="basis-1/5">
                        <Link to='/'><img src={textLogo} className="min-w-[120px] h-[30px] m-2 justify-self-start pl-6"/></Link>
                    </div>
                    <div className="basis-2/5 flex items-center">
                        <input type="text" className="bg-slate-200 rounded-l-3xl outline-none px-2 h-7 text-gray-900 w-[85%]"/>
                        <button className="rounded-r-3xl h-7 w-14 bg-furnipurple cursor-pointer">
                        <FaMagnifyingGlass className="text-white ml-[18.5px]"/>
                        </button>
                        
                    </div>
                    <div className="basis-2/5">     
                        <ul className="flex flex-row p-2 justify-evenly items-center">
                            <li>
                                <NavLink to='/cartPage'><img src={cartIcon} className="min-w-[35px] max-h-[30px]" /></NavLink>
                            </li>
                            <li>
                                {/* Insert the chat button here */}
                                    <NavLink to='/chatHome'>
                                    <FaCommentDots className="text-purple-400 text-4xl" /> {/* Cambiar el color y el tamaño */}
                                    </NavLink>
                            </li>
                            {logged === true && 
                            <li>
                                <NavLink to='/profilePage'><img src={profileIcon} width="35" className=""/></NavLink>
                            </li>
                            }
                            <li>
                                <div className="flex flex-row ml-5 space-x-4">
                                    <NavLink to='/logIn'>
                                        <button className="flex justify-center items-center bg-[#945aff] hover:bg-[#7b5aff] px-3 h-10 w-[120px] text-white font-semibold hover:font-black rounded-2xl transition-all">
                                            ENTRAR
                                        </button>
                                    </NavLink>
                                    <NavLink to='/signUp'>
                                        <button className="flex justify-center items-center bg-[#ff6c6c] hover:bg-[#f65858] px-3 h-10 w-[120px] text-white font-semibold hover:font-black rounded-2xl transition-all">
                                            REGISTRARSE
                                        </button>
                                    </NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
 