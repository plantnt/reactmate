import { Pagination } from "antd";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function UserBrowser(){
    return(
        <>
            <div className="relative bg-gray-50 min-h-screen max-w-full">
                <div className="bg-gradient-to-r from-purple-400 to-orange-300 py-6 flex justify-center items-center">
                    <h1 className="text-3xl font-bold text-white text-center m-4">
                        Buscador de usuarios
                    </h1> 
                </div>
                <div className="flex items-center pt-8 pl-6">
                    <input type="text" className="bg-slate-200 rounded-l-3xl outline-none px-2 h-9 text-gray-900 w-[55%]"/>
                    <button className="rounded-r-3xl h-9 w-14 bg-gradient-to-r to-purple-400 from-orange-300 cursor-pointer">
                        <FaMagnifyingGlass className="text-white ml-[18.5px]"/>
                    </button>
                    <div className="flex items-center ml-4">
                        <label className="inline-flex items-center mr-2">
                            <input type="checkbox" className="accent-violet-500 w-6"/>
                            <span className="ml-2 text-gray-700">Usuario</span>
                        </label>
                        <label className="inline-flex items-center mr-2">
                            <input type="checkbox" className="accent-violet-500 w-6"/>
                            <span className="ml-2 text-gray-700">Vendedor</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="accent-violet-500 w-6"/>
                            <span className="ml-2 text-gray-700">Emprendedor</span>
                        </label>
                    </div>
                </div>

                <div className="">
                    usercards... 
                </div>
            </div>
            <div className="sticky bottom-0 bg-gray-50 py-4 w-full text-center">
                <Pagination className="self-center" defaultCurrent={1} total={50}></Pagination>
            </div>
        </>
    );
}
