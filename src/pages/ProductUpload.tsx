/*import { BiCamera } from "react-icons/bi";*/
/*<BiCamera />*/

import Select from 'react-select'
import makeAnimated from 'react-select/animated';
export default function Upload(){

  const animatedComponents = makeAnimated();

  const categorias = [
    { value: '1', label: 'Mueble de hogar' },
    { value: '2', label: 'Mueble de exteriores' },
    { value: '3', label: 'Mueble de madera' },
    { value: '4', label: 'Mueble de plastico' }
  ]

  const colores = [
    { value: '1', label: 'Negro' },
    { value: '2', label: 'Gris' },
    { value: '3', label: 'Cafe' },
    { value: '4', label: 'Verde' }
  ]

  const materiales = [
    { value: '1', label: 'Madera' },
    { value: '2', label: 'Madera reciclada' },
    { value: '3', label: 'Cuero' },
    { value: '4', label: 'Plastico Reciclado' }
  ]

  return(
      <> 
      
      <div className="flex w-full h-[400px] px-4 mt-[60px]">
        <input type="file" className="
          w-[500px] 
          h-full
          file:border-[5px]
          file:border-furnipurple
          file:border-dashed
          file:w-full file:h-[90%] 
          file:rounded-3xl 
          file:bg-[#FFC08F] 
          file:text-furnipurple 
          file:font-bold
          file:hover:bg-[#FEB881]
          file:transition-all 
          file:ease-in-out
          file:duration-700 
          file:
          " 
          accept="image/*">
        </input>

          <ul className="p-4 w-[600px]">
              <li className="my-4">
                <legend>Nombre del Producto:</legend>
                <input type="text" placeholder="(Minimo 5 caracteres)" className="border-2 border-violet-400  px-2 w-full bg-purple-200 placeholder:text-violet-500"/>
              </li>

              <li className="my-4">
                <legend>Precio del Producto:</legend>
                <input type="Number" placeholder="(Minimo 5 caracteres)" className="border-2 border-violet-400 px-2 bg-purple-200 placeholder:text-violet-500"/>
              </li>

              <li className="my-4 ">
                <legend>Descripcion del Producto:</legend>
                <input type="text" placeholder="(Espacio opcional para describir tu producto)" className="border-2 px-2 border-violet-400  w-full h-[150px] bg-purple-200 placeholder:text-violet-500"/>
              </li>
              
          </ul>

          <ul className="p-4 w-[300px] h-full">
              <li className="my-10">
                <legend className="text-center">Elige una categoria</legend>
                <Select options={categorias} isMulti components={animatedComponents} placeholder="Seleccionar...">
                </Select>
              </li>

              <li className="my-10 ">
                <legend className="text-center">Elige un color</legend>
                <Select options={colores} isMulti components={animatedComponents} placeholder="Seleccionar...">
                </Select>
              </li>

              <li className="my-10">
                <legend className="text-center">Elige un material</legend>
                <Select options={materiales} isMulti components={animatedComponents} placeholder="Seleccionar...">
                </Select>
              </li>
              
          </ul>
      </div>

    <div className="flex w-full justify-end">
    <button className="border-2 border-gray-400 bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-gray-400  font-bold transition-all ease-in-out duration-500 mx-5 w-[8%]">Cancelar</button>
      <button className="border-2 border-orange-500 bg-[#FFA375] hover:bg-[#FF8D55] rounded-full p-2 text-orange-500 hover:text-orange-200 font-bold transition-all ease-in-out duration-500 mx-5 w-[8%]">Publicar</button>
    </div>
      
      </>
 )
}