import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosAddCircleOutline, IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io"
import { MdAttachMoney } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";


const BuyProduct = () => {

    function handleShow(){
        console.log("show")
        document.getElementById("container")!.style.width = "400px"
        document.getElementById("container")!.style.justifyContent = "left"
        document.getElementById("openArrow")!.style.display = "none"
        document.getElementById("closeArrow")!.style.display = "initial"
        document.getElementById("actions")!.style.display = "initial"
    }

    function handleHide(){
        console.log("hide")
        document.getElementById("container")!.style.width = "60px"
        document.getElementById("container")!.style.justifyContent = "center"
        document.getElementById("closeArrow")!.style.display = "none"
        document.getElementById("actions")!.style.display = "none"
        document.getElementById("openArrow")!.style.display = "initial"
    }

    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavorite = () => {
        setIsFavorite((prevFavorite) => !prevFavorite)
    }

    return(
        <>
        <div id="container" className="fixed flex items-center justify-left right-0 bottom-[120px] h-40 w-[400px] border rounded-lg p-3 bg-white transition-all z-[99] overflow-hidden">
            <IoMdArrowDropleft size={40} id="openArrow" className="hidden text-slate-600 text-xl hover:cursor-pointer z-[100]" onClick={() => handleShow()}/>
            <IoMdArrowDropright size={40} id="closeArrow" className="text-slate-600 text-xl hover:cursor-pointer z-[100]" onClick={() => handleHide()}/>
            <div id="actions" className="block">
                <h1 className="font-semibold text-xl">Acciones</h1>
                <div className="flex gap-3 w-full mt-2 font-semibold text-white">
                    <button className="flex items-center justify-center bg-furniorange px-4 p-2 rounded-full">
                        <MdAttachMoney size={25}/>
                        Comprar
                    </button>
                    <button className="flex items-center justify-center bg-violet-400 px-4 p-2 rounded-full">
                        <RiShoppingCartLine size={25} className="mr-2"/>
                        Añadir al carrito
                    </button>
                </div>
                <div className="flex items-center justify-center mt-4 gap-2">
                    {isFavorite === true ? 
                    <div className="flex items-center space-x-3">
                        <FaRegHeart size={12} className="text-convenientOrange cursor-pointer"
                            onClick={handleFavorite}/>
                        <p className="text-xs">Añadir a favoritos</p>
                    </div>
                    :
                    <div className="flex items-center space-x-3">
                        <FaHeart size={12} className="text-convenientOrange cursor-pointer"
                            onClick={handleFavorite}/>
                        <p className="text-xs">Quitar de favoritos</p>
                    </div>}
                </div>
            </div>
        </div>
        </>
    )
}

export default BuyProduct