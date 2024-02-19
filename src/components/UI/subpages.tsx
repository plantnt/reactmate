import { Layers, MessagesSquare } from "lucide-react"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { FaStar } from "react-icons/fa";

export default function SubpageSelect(){  
    return(
        <>
            <div className="dropdown">
                <button className="flex">
                    <Layers size={20} className="mr-2"/> Catalogo
                </button>
                <div className="dropdown-menu">

                </div>
            </div>
        </>
    )
    
}
