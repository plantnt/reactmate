import { useState } from "react"

import { Layers, MessagesSquare } from "lucide-react"
import { FaStar } from "react-icons/fa";

export default function SubpageSelect(){  
    return(
        <div className="dropdown relative select-none z-[7]">
            <div className="dropdown-btn
                            flex items-center max-w-[120px] 
                            bg-furniorange p-2 pl-2 
                            text-white font-bold rounded-lg 
                            cursor-pointer">
                <Layers className="mr-2"/>
                Catalogo
            </div>
            <div className="dropdown-content mt-[-3.4px] border-2 border-t-0 rounded-b-lg max-w-[120px] bg-white">
                <div className="dropdown-option z-20 flex items-center max-w-[120px] 
                            p-2 pl-2 font-bold 
                            cursor-pointer hover:bg-slate-100 transition-all">
                    <MessagesSquare className="mr-2"/>
                    Foro
                </div>
                <div className="dropdown-option flex items-center max-w-[120px] 
                            p-2 pl-2 font-bold 
                            cursor-pointer hover:bg-slate-100 transition-all">
                    <FaStar className="mr-2"/>
                    Deseados
                </div>
            </div>
        </div>
    )
    
}