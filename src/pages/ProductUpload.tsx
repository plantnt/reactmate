import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useState, useRef } from 'react';

import UploadWidget from '../components/Imageupload/UploadWidget';
import { NavLink } from 'react-router-dom';
import { supabase } from "../utils/Utils";

import { FaRegCheckCircle } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";
import { GiCancel } from "react-icons/gi";
import { Plus } from 'lucide-react';


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

  const inputFile = useRef<HTMLInputElement>(null)

  const [imgSrc, setImgSrc] = useState<string|null>(null)

  const handleUpload = () => {
    inputFile.current && inputFile.current.click()
  }

  const handleUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if(file){
      const reader = new FileReader()
      reader.onload = () => {
        if(typeof reader.result === 'string'){
          setImgSrc(reader.result)
        }
      }
      reader.readAsDataURL(file)
    }
  }
 
return(
  <>
    <div className='flex flex-col gap-2 w-[400px]'>
      <div className='group flex flex-col items-center justify-center w-full h-[300px] border-4 border-violet-400 rounded-xl hover:cursor-pointer overflow-hidden'
          onClick={() => handleUpload()}>
        {imgSrc ? (
          <img src={imgSrc} className="w-full h-full object-cover hover:scale-105 transition-transform" />
        ) : (
          <>
            <input ref={inputFile} onChange={handleUploadChange} type="file" hidden />
            <LuUpload size={30} className='text-violet-400 group-hover:opacity-70 transition-opacity'/>
            <p>Subir archivo</p>
          </>
        )}
      </div>
      {imgSrc && (
      <div className='flex gap-2 flex-wrap'>
          <button className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 transition-opacity'
                  type='button'>
              <Plus className='group-hover:scale-150 transition-all'/>
          </button>
          <button className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 transition-opacity'
                  type='button'>
              <Plus className='group-hover:scale-150 transition-all'/>
          </button>
          <button className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 transition-opacity'
                  type='button'>
              <Plus className='group-hover:scale-150 transition-all'/>
          </button>
          <button className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 transition-opacity'
                  type='button'>
              <Plus className='group-hover:scale-150 transition-all'/>
          </button>
          <button className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 transition-opacity'
                  type='button'>
              <Plus className='group-hover:scale-150 transition-all'/>
          </button>
          <button className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 transition-opacity'
                  type='button'>
              <Plus className='group-hover:scale-150 transition-all'/>
          </button>
        </div>
        )}
      </div>
      {/* <div className='p-8 flex space-x-3'>
        <NavLink to="/" className="overflow-hidden">
        <button className='group flex items-center bg-slate-300 px-4 py-2 rounded-xl text-slate-800 hover:bg-red-500 hover:text-white transition-colors'>
        <GiCancel className='transform  mr-2 translate-y-8 group-hover:translate-y-0 transition duration-500 ease-in-out'/>
        Cancelar
        </button>
        </NavLink>
        <NavLink to="/">
        <button type='submit' className='group flex items-center bg-slate-300 px-4 py-2 rounded-xl text-slate-800 hover:bg-green-400 hover:text-white transition-colors overflow-hidden'>
        <FaRegCheckCircle className='transform mr-2 translate-y-8 group-hover:translate-y-0 transition duration-500 ease-in-out'/>
        Publicar
        </button>
        </NavLink>
      </div> */}
  </>
 )
}