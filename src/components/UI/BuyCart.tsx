import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io"
import { MdAttachMoney } from "react-icons/md";
import { FaCcMastercard } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { SiNubank } from "react-icons/si";


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

    return(
        <>
        <div id="container" className="fixed flex items-center justify-left right-0 bottom-[0.1px] h-full border rounded-lg p-3 transition-all z-[99] overflow-hidden bg-[#E2D6FB] w-[30%] bg-opacity-50">
            <IoMdArrowDropleft size={40} id="openArrow" className="hidden text-slate-600 text-xl hover:cursor-pointer z-[100]" onClick={() => handleShow()}/>
            <IoMdArrowDropright size={40} id="closeArrow" className="text-slate-600 text-xl hover:cursor-pointer z-[100]" onClick={() => handleHide()}/>
            <div id="actions" className="">
                <h1 className="flex font-semibold text-xl text-violet-700 justify-center">Factura del Carrito</h1>
                <div>
          <h1 className="font-bold text-lg p-4 flex justify-center text-violet-700">Metodo de pago</h1>
          <div className="flex space-x-5 justify-center">

          <button className="text-violet-800 hover:text-violet-500 transition-all ease-in-out duration-300">
          <FaCcMastercard size={40}/>
          </button>

          <button className="text-violet-800 hover:text-violet-500 transition-all ease-in-out duration-300">
         <SiVisa size={40}/>
          </button>

          <button className="text-violet-800 hover:text-violet-500 transition-all ease-in-out duration-300">
          <SiNubank size={40}/>
          </button>
          </div>
          <div className="grid justify-items-center">
          <h1 className="font-bold text-lg mt-6">Numero de tarjeta</h1>
          <input type="number" className="px-2 border-b-violet-700 border-b-2 focus:outline-none bg-[#E2D6FB] mb-6 bg-opacity-0" />
          </div>
          <div className="flex space-x-4 justify-center mt-4">

            <div className="grid justify-items-center space-y-2">
             <h2 className="font-bold">Fecha de Expiracion</h2>
<input type="date" className="px-2  border-b-violet-700 border-b-2 focus:outline-none bg-[#E2D6FB] bg-opacity-0"/>
</div>
<div className="grid justify-items-center space-y-2">
  <h2 className="font-bold">Codigo de Seguridad</h2>
<input type="number" className="px-2  border-b-violet-700 border-b-2 focus:outline-none bg-[#E2D6FB] bg-opacity-0"/>
</div>

</div>
                <div className="mt-20 font-semibold text-white">
                    <button className="flex items-center justify-center bg-violet-600 hover:bg-violet-800 px-4 p-2 rounded-full w-full transition-all ease-in-out duration-500">
                        <MdAttachMoney size={25}/>
                        Confirmar
                    </button>
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default BuyProduct