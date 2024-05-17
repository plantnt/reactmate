import { PlusCircle } from "lucide-react"
import { FaLeaf } from "react-icons/fa"
export default function Filters(){
    return(
        <div className="min-w-[20rem] left-0">
            <div id="filters" className="py-5 pl-5 border-t-[1px] border-r-[1px] border-b-[1px] rounded-r-lg border-slate-300 bg-white ">
            <h2 className="font-bold mb-3">Producto</h2>
                <ul className="flex flex-col space-y-2">
                <li className="flex items-center">
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        <span className="mr-2">Restaurado</span>
                        <FaLeaf className="text-green-300"/>
                    </li>
                    <li className="flex items-center">
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        <span className="mr-2">Artesanal</span>
                        <FaLeaf className="text-green-300"/>
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        Segunda mano
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        Nuevo
                    </li>
                    <li>
                        <label htmlFor="IconCirclePlus" className="flex items-center">
                            <PlusCircle size={20} color="gray" className="cursor-pointer mr-2 hover:opacity-50 transition-all" />
                            Ver más
                        </label>
                    </li>
                </ul>
                <h2 className="font-bold mb-3 mt-8">Categorías</h2>
                <ul className="flex flex-col space-y-2">
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        Muebles de hogar
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        Muebles de exteriores
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        Muebles de madera
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        Muebles de plástico
                    </li>
                    <li>
                        <label htmlFor="IconCirclePlus" className="flex items-center">
                            <PlusCircle size={20} color="gray" className="cursor-pointer mr-2 hover:opacity-50 transition-all" />
                            Ver más
                        </label>
                    </li>
                </ul>
                <h2 className="font-bold mt-10 mb-3">Color</h2>
                <ul className="flex flex-col space-y-2">
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        Negro
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        Gris
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        Café
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        Verde
                    </li>
                    <li>
                        <label htmlFor="IconCirclePlus" className="flex items-center">
                            <PlusCircle size={20} color="gray" className="cursor-pointer mr-2 hover:opacity-50 transition-all" />
                            Ver más
                        </label>
                    </li>
                </ul>
                <h2 className="font-bold mt-10 mb-3">Material</h2>
                <ul className="flex flex-col space-y-2">
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        Madera
                    </li>
                    <li className="flex items-center">
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        <span className="mr-2">Madera reciclada</span>
                        <FaLeaf className="text-green-300"/>
                    </li>
                    <li className="flex items-center">
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        <span className="mr-2">Plástico reciclado</span>
                        <FaLeaf className="text-green-300"/>
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2"/>
                        Cuero
                    </li>
                    <li>
                        <label htmlFor="IconCirclePlus" className="flex items-center">
                            <PlusCircle size={20} color="gray" className="cursor-pointer mr-2 hover:opacity-50 transition-all" />
                            Ver más
                        </label>
                    </li>
                </ul>
                
            </div>
                
        </div>
    )
}