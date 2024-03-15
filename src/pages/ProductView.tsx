import { NavLink } from "react-router-dom";
import { Rate } from "antd";

import Separator from "../components/UI/separator";

import feli from '../assets/feli.jpg'

export default function ProductView(){
    return(
        <div className="flex flex-col items-center p-6">
          <div className="grid md:flex md:justify-center sm:justify-center md:flex-wrap md:space-y-6 sm:space-y-6 space-y-0 relative w-full p-4">
            <img src="" className="w-[500px] h-[500px] border-4 border-violet-400 rounded-md" />
            <div className="flex flex-col lg:ml-6 md:ml-0 relative w-[400px]">
              <div className="flex w-full justify-between">
                <h3>Publicado por</h3>
                <div className="flex space-x-3">
                  <p>Nombre del autor</p>
                  <NavLink to="/ProfilePageView">
                    <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden border-2 hover:border-furniorange transition-colors">
                      <img src={feli} className="w-full h-full hover:scale-110 transition-transform"/>
                    </div>
                  </NavLink>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-3">Titulo del producto</h2>
              <Separator />
              <div className="flex  items-center space-x-3 mt-3">
                <Rate allowHalf disabled value={4} className="mt-[5px] ml-2 text-violet-400 text-sm" />
                <p className="text-xs">34 Votos</p>
              </div>
              <h1 className="text-3xl font-semibold">$ 455.50</h1>
              <div className="flex flex-wrap gap-2 mt-3">
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro_largo</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro_muy_largo</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro_largo</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro_largísimoooooo</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro_largo</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro</p>
              </div>
              <div className="flex flex-wrap gap-1 w-full mt-3">
                <div className="w-[40px] h-[40px] border p-[2.5px] rounded-sm hover:cursor-pointer">
                  <div className="w-full h-full bg-furnipurple rounded-sm"/>
                </div>
                <div className="w-[40px] h-[40px] border p-[2.5px] rounded-sm hover:cursor-pointer">
                  <div className="w-full h-full bg-furniorange rounded-sm"/>
                </div>
                <div className="w-[40px] h-[40px] border p-[2.5px] rounded-sm hover:cursor-pointer">
                  <div className="w-full h-full bg-[#000] rounded-sm"/>
                </div>
                <div className="w-[40px] h-[40px] border p-[2.5px] rounded-sm hover:cursor-pointer">
                  <div className="w-full h-full bg-white rounded-sm border"/>
                </div>
              </div>
            </div>
          </div>
            <div className="lg:w-[950px] w-[500px] bg-pink-300">
              <h2>Descripción</h2>
            </div>
        </div>
    )
}