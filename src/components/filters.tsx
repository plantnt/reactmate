import { PlusCircle } from "lucide-react";

export default function Filters() {
    return (
        <div>
            <div id="filters" className="w-[17rem] py-5 pl-5 pr-10 border-r-[1px] border-b-[1px] border-t-[1px] border-slate-300 bg-white rounded-lg">
                <h2 className="font-bold mb-3">Categorías</h2>
                <ul className="flex flex-col space-y-2">
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2 transition-all duration-300"/>
                        Muebles de hogar
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2 transition-all duration-300"/>
                        Muebles de exteriores
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2 transition-all duration-300"/>
                        Muebles de madera
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2 transition-all duration-300"/>
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
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2 transition-all duration-300"/>
                        Negro
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2 transition-all duration-300"/>
                        Gris
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2 transition-all duration-300"/>
                        Café
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2 transition-all duration-300"/>
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
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2 transition-all duration-300"/>
                        Madera
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2 transition-all duration-300"/>
                        Madera reciclada
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2 transition-all duration-300"/>
                        Plástico reciclado
                    </li>
                    <li>
                        <input type="checkbox" className="accent-violet-500 w-5 mr-2 transition-all duration-300"/>
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
    );
}
