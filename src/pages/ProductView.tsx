import { Rate } from "antd";

export default function ProductView(){
    return(
        <>
        
        <div className="flex w-full h-[400px] px-4 mt-[60px] ml-4">
            <div className="w-[440px] h-[90%]  border-[5px] border-furnipurple rounded-3xl transition-all ease-in-out duration-700">
                <img src="/src\assets\products\1.jpg" className="w-full h-full"></img>
            </div>
            
        <ul className="p-4 w-[500px]">
              <li className="my-4">
                <legend>Nombre del Producto:</legend>
                <input type="text" disabled placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXX" className="border-2 border-violet-400  px-2 w-full bg-purple-200 placeholder:text-violet-500 rounded-full"/>
              </li>

              <li className="my-4">
                <legend>Precio del Producto:</legend>
                <input type="Number" disabled placeholder="$XXXXXX" className="border-2 border-violet-400 px-2 bg-purple-200 placeholder:text-violet-500 rounded-full"/>
              </li>

              <li className="my-4 ">
                <legend>Descripcion del Producto:</legend>
                <input type="text" disabled placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" className="border-2 px-2 border-violet-400  w-full h-[150px] bg-purple-200 placeholder:text-violet-500 rounded-2xl"/>
              </li>
              
          </ul>
          <div className="flex items-top text-slate-700 mt-10 ml-10">
                    Calificación:
                    <Rate allowHalf className="mt-[5px] ml-2 text-violet-400 text-sm" />
                    <label className="text-gray-400 ml-4">Votos (XXXXXX)</label>
                    
                </div>
                
        </div>
        <div className="flex w-full justify-end">
    <button className="border-2 border-purple-800 bg-furnipurple hover:bg-purple-700 rounded-full p-2 text-purple-800 hover:text-purple-200  font-bold transition-all ease-in-out duration-500 mx-4 w-[150px]">Añadir al carro</button>
      <button className="border-2 border-orange-500 bg-[#FFA375] hover:bg-[#FF8D55] rounded-full p-2 text-orange-500 hover:text-orange-200 font-bold transition-all ease-in-out duration-500 mr-20 w-[8%]">Comprar</button>
    </div>

        </>
    )
}