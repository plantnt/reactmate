/*import { BiCamera } from "react-icons/bi";*/
/*<BiCamera />*/
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

import UploadWidget from '../components/Imageupload/UploadWidget';

import { FaRegCheckCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

export default function Upload(){

  const animatedComponents = makeAnimated();

  const categorias = [
    { value: '1', label: 'Mueble de hogar' },
    { value: '2', label: 'Mueble de exteriores' },
    { value: '3', label: 'Mueble de madera' },
    { value: '4', label: 'Mueble de plastico' },
    { value: '5', label: 'Mueble de plastico reciclado' }
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
      <div className="flex space-x-9 p-8">
          <UploadWidget />
          <form className='grid grid-cols-2'>
          <div>
            <label className='grid'>
              Título del producto
              <input type="text" id='title' className='border border-slate-300 h-[2em] outline-none p-1 rounded-md' required/>
            </label>
            <label className='grid'>
              Precio
              <input type="text" id='title' className='border border-slate-300 h-[2em] outline-none p-1 rounded-md' required/>
            </label>
            <label className='grid'>
              Descrición
              <textarea id='description' className='border border-slate-300 resize-none outline-none p-1 rounded-lg' cols={30} rows={10} maxLength={500}></textarea>
            </label>
          </div>
          <div className='flex flex-col space-y-4 ml-4'>
            <label>
                Categoría
                <Select className='' options={categorias} isMulti components={animatedComponents}  placeholder="Seleccionar..." />
            </label>
            <label>
                Color
                <Select className='' options={colores} isMulti components={animatedComponents}  placeholder="Seleccionar..." />
            </label>
            <label>
                Material
                <Select className='' options={materiales} isMulti components={animatedComponents}  placeholder="Seleccionar..." />
            </label>
          </div>
        </form>
      </div>    
      <div className='p-8 flex space-x-3'>
        <NavLink to="/" className="overflow-hidden">
          <button className='group flex items-center bg-slate-300 px-4 py-2 rounded-xl text-slate-800 hover:bg-red-500 hover:text-white transition-colors'>
            <GiCancel className='transform  mr-2 translate-y-8 group-hover:translate-y-0 transition duration-500 ease-in-out'/>
            Cancelar
          </button>
        </NavLink>
        <button className='group flex items-center bg-slate-300 px-4 py-2 rounded-xl text-slate-800 hover:bg-slate-400 hover:text-white transition-colors'>
          <FaRegCheckCircle className='transform mr-2 translate-y-8 group-hover:translate-y-0 transition duration-500 ease-in-out'/>
          Publicar
        </button>
      </div>
  </>
 )
}