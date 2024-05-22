import { NavLink } from "react-router-dom";
import { Rate } from "antd";

import Separator from "../components/UI/separator";
import BuyProduct from "../components/UI/BuyProduct";

import feli from '../assets/feli.jpg'

export default function ProductView(){

  
  return(
        <div className="flex flex-col h-full items-center p-6">
          <BuyProduct/>
          <div className="grid md:flex md:justify-center sm:justify-center md:flex-wrap md:space-y-6 sm:space-y-6 space-y-0 relative w-full p-4">
            <img src="src\assets\products\1.jpg" className="w-[500px] h-[500px] border-4 border-violet-400 rounded-md" />
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
              <h2 className="text-xl font-semibold">Titulo del producto</h2>
              <div className="flex  items-center space-x-3 mb-2">
                <Rate allowHalf disabled value={4} className="text-violet-400 text-sm" />
                <p className="text-xs">34 Votos</p>
              </div>
              <h1 className="text-3xl font-semibold mb-3">$ 455.50</h1>
              <Separator />
              <h2 className="font-semibold mt-3">Categorías</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro_largo</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro_muy_largo</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro_largo</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro_largísimoooooo</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro_largo</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Filtro</p>
              </div>
              <h2 className="font-semibold mt-3">Colores</h2>
              <div className="flex flex-wrap gap-1 w-full mt-1">
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
          <Separator />
            <div className="lg:w-[950px] w-[500px] mt-4">
               <h2 className="text-xl font-semibold mb-3">Descripción</h2>
               <p className="ml-4 text-justify leading-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem accusamus fugit mollitia odit. Numquam asperiores, illum quaerat, perferendis ea, blanditiis voluptatibus placeat at dolor corporis ipsum ducimus laudantium veniam?
               Distinctio esse nulla itaque rerum perferendis, consequatur aliquam delectus officiis sint neque, sapiente iste? Eligendi debitis id impedit ab, ratione molestias recusandae laudantium laboriosam facilis consequatur reprehenderit dolores, magnam voluptatum.
               At fugit, et unde minus quae eligendi consequatur temporibus, perferendis, nisi veritatis incidunt itaque. Provident, error esse. Facilis fugiat quos reiciendis animi consectetur eius consequatur voluptate ut. Consequuntur, sunt sapiente.</p>

               <Separator />
              
               <h2 className="text-xl font-semibold justify-center align-center mt-10 text-center">Reseñas</h2>
              
               <div className="bg-gray-100 rounded-3xl p-4 inline-flex flex-wrap gap-3 align-center border-2 border-purple-300 mt-4">
               <NavLink to="/ProfilePageView">
                    <div className="items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden border-2 hover:border-furniorange transition-colors">
                      <img src={feli} className="w-full h-full hover:scale-110 transition-transform"/>
                    </div>
                    </NavLink>
                 <p className="font-semibold">Nombre de usuario</p>
               <Rate allowHalf disabled value={4} className="text-violet-400 text-sm bg-purple-200 rounded-full px-2 " />
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem accusamus fugit mollitia odit. Numquam asperiores, illum quaerat, perferendis ea, blanditiis voluptatibus placeat at dolor corporis ipsum ducimus laudantium veniam?
               Distinctio esse nulla itaque rerum perferendis</p>
               </div>

               <div className="bg-gray-100 rounded-3xl p-4 inline-flex flex-wrap gap-3 align-center border-2 border-purple-300 mt-4">
               <NavLink to="/ProfilePageView">
                    <div className="items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden border-2 hover:border-furniorange transition-colors">
                      <img src={feli} className="w-full h-full hover:scale-110 transition-transform"/>
                    </div>
                    </NavLink>
                 <p className="font-semibold">Nombre de usuario</p>
               <Rate allowHalf disabled value={3} className="text-violet-400 text-sm bg-purple-200 rounded-full px-2" />
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem accusamus fugit mollitia odit. Numquam asperiores, illum quaerat, perferendis ea, blanditiis voluptatibus placeat at dolor corporis ipsum ducimus laudantium veniam?
               Distinctio esse nulla itaque rerum perferendis</p>
               </div>

               <div className="bg-gray-100 rounded-3xl p-4 inline-flex flex-wrap gap-3 align-center border-2 border-purple-300 mt-4">
               <NavLink to="/ProfilePageView">
                    <div className="items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden border-2 hover:border-furniorange transition-colors">
                      <img src={feli} className="w-full h-full hover:scale-110 transition-transform"/>
                    </div>
                    </NavLink>
                 <p className="font-semibold">Nombre de usuario</p>
                 <Rate allowHalf disabled value={2} className="flex align-center text-violet-400 text-sm bg-purple-200 rounded-full px-2 w-min" />
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem accusamus fugit mollitia odit. Numquam asperiores, illum quaerat, perferendis ea, blanditiis voluptatibus placeat at dolor corporis ipsum ducimus laudantium veniam?
               Distinctio esse nulla itaque rerum perferendis</p>
               </div>
               
            </div>
        </div>
        
    )
}

/*ALGUIEN QUE ALINEE ESAS ESTRELLAS POR DIOS (gracias :>)*/