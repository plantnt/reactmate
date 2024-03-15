import { IoIosAddCircleOutline, IoIosClose } from "react-icons/io"
import { MdAttachMoney } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";


const BuyProduct = () => {
    return(
        <div className="fixed right-0 bottom-[150px] w-[390px] border rounded-lg p-3 bg-white z-10">
            <IoIosClose  size={28} className="text-slate-400 absolute top-3 right-3 hover:cursor-pointer hover:scale-105 hover:text-red-600 transition-all"/>
            <h1 className="font-semibold">Acciones</h1>
            <div className="flex gap-3 w-full mt-4 font-semibold text-white">
                <button className="flex items-center justify-center bg-furniorange px-4 p-2 rounded-full">
                    <MdAttachMoney />
                    Comprar
                </button>
                <button className="flex items-center justify-center bg-violet-400 px-4 p-2 rounded-full">
                    <RiShoppingCartLine />
                    Añadir al carrito
                </button>
            </div>
            <IoIosAddCircleOutline />
        </div>
    )
}

export default BuyProduct