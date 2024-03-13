import { NavLink } from "react-router-dom";
import { Rate } from "antd";

import Separator from "../components/UI/separator";

import feli from '../assets/feli.jpg'

export default function ProductView(){
    return(
        <div className="p-6">
          <div className="grid md:flex md:flex-wrap relative w-full p-4">
            <img src="" className="w-[500px] h-[500px] border-4 border-violet-400 rounded-md" />
            <div className="flex flex-col ml-6 relative w-[400px]">
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

            </div>
          </div>
        </div>
    )
}