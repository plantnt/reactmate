import { Link, NavLink } from 'react-router-dom'

import cartIcon from '../../assets/cartIcon.png'
import profileIcon from '../../assets/profileIcon.png'
import searchIcon from '../../assets/searchIcon.png'
import textLogo from '../../assets/textLogo.png'

import { Layers } from 'lucide-react';


const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-white border-slate-300 border-b-[1px] z-50">
      <div className="container max-w-5xl">
        <div className="flex flex-row py-2 items-center">
          <div className="basis-1/5">
            <Link to='/'><img src={textLogo} className="min-w-[120px] h-[20px] m-2"/></Link>
          </div>
          <div className="basis-1/5">
            <button className="flex justify-between items-center bg-[#FF886D] px-3 p-2 text-white font-bold rounded-lg">
              <Layers className="mr-[10px]" color="white" size={20} />
              Catalogo
            </button>
          </div>
          <div className="basis-2/5 flex items-center">
            <input type="text" className="bg-slate-200 rounded-xl outline-none px-2 h-7 text-gray-900 w-[90%]"/>
            <img src={searchIcon} width="20" className="ml-2 cursor-pointer" />
          </div>
          <div className="basis-2/5">     
            <ul className="flex flex-row p-2 justify-evenly items-center">
              <li>
                <NavLink to='cartPage'><img src={cartIcon} className="min-w-[25px] max-h-[20px]" /></NavLink>
              </li>
              <li>
                <NavLink to="profilePage"><img src={profileIcon} width="25" className="hidden"/></NavLink>
              </li>
              <li>
                <div className="flex flex-row ml-5">
                <NavLink to='logIn'>
                  <button className="bg-gradient-to-r from-[#FF886D]
                                  to-[#BE8AFF] px-3 h-10
                                  text-white font-semibold rounded-xl">
                                    Entrar
                  </button>
                </NavLink>
                <NavLink to='signUp'>
                  <div className="mx-auto flex items-center justify-center ml-4 cursor-pointer select-none">
                    <div className="h-10 w-full p-1 rounded-xl bg-gradient-to-r from-[#FF886D] to-[#BE8AFF]">
                      <div className="flex h-full w-full p-2 items-center justify-center bg-white rounded-lg">
                        <h1 className="font-semibold text-slate-700">
                          Registrarse
                          </h1>
                      </div>
                    </div>
                  </div>
                </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar