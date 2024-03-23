import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import ProductForm from '../components/UI/ProductForm';
import { supabase } from "../utils/Utils";

import { LuUpload } from "react-icons/lu";
import { GiCancel } from "react-icons/gi";
import { Plus } from 'lucide-react';
import { FaRegCheckCircle } from 'react-icons/fa';


export default function Upload(){
  const mainFile = useRef<HTMLInputElement>(null)
  const item1 = useRef<HTMLInputElement>(null)
  const item2 = useRef<HTMLInputElement>(null)
  const item3 = useRef<HTMLInputElement>(null)
  const item4 = useRef<HTMLInputElement>(null)
  const item5 = useRef<HTMLInputElement>(null)
  const item6 = useRef<HTMLInputElement>(null)

  const [imgSrc, setImgSrc] = useState<string|null>(null)
  const [Item1Src, setItem1Src] = useState<string|null>(null)
  const [Item2Src, setItem2Src] = useState<string|null>(null)
  const [Item3Src, setItem3Src] = useState<string|null>(null)
  const [Item4Src, setItem4Src] = useState<string|null>(null)
  const [Item5Src, setItem5Src] = useState<string|null>(null)
  const [Item6Src, setItem6Src] = useState<string|null>(null)

  const [imgCounter, setImgCounter] = useState(0)


  const handleUpload = () => {
    mainFile.current && mainFile.current.click()
  }

  const handleUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if(file){
      const reader = new FileReader()
      reader.onload = () => {
        if(typeof reader.result === 'string'){
          setImgSrc(reader.result)
          console.log("Imagen principal", imgCounter)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const deleteImage = () => {
    setImgSrc(null)
  }

  const handleUpload1 = () => {
    item1.current && item1.current.click()
  }

  const handleUpload1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file){
      const reader = new FileReader()
      reader.onload = () => {
        if(typeof reader.result === 'string'){
          setItem1Src(reader.result)
          setImgCounter(imgCounter + 1)
          console.log(setImgCounter)
        }
      }
      reader.readAsDataURL(file)
    }
  }
  
  const handleUpload2 = () => {
    item2.current && item2.current.click()
  }

  const handleUpload2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file){
      const reader = new FileReader()
      reader.onload = () => {
        if(typeof reader.result === 'string'){
          setItem2Src(reader.result)
          setImgCounter(imgCounter + 1)
          console.log(setImgCounter)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload3 = () => {
    item3.current && item3.current.click()
  }

  const handleUpload3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file){
      const reader = new FileReader()
      reader.onload = () => {
        if(typeof reader.result === 'string'){
          setItem3Src(reader.result)
          setImgCounter(imgCounter + 1)
          console.log(setImgCounter)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload4 = () => {
    item4.current && item4.current.click()
  }

  const handleUpload4Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file){
      const reader = new FileReader()
      reader.onload = () => {
        if(typeof reader.result === 'string'){
          setItem4Src(reader.result)
          setImgCounter(imgCounter + 1)
          console.log(setImgCounter)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload5 = () => {
    item5.current && item5.current.click()
  }

  const handleUpload5Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file){
      const reader = new FileReader()
      reader.onload = () => {
        if(typeof reader.result === 'string'){
          setItem5Src(reader.result)
          setImgCounter(imgCounter + 1)
          console.log(setImgCounter)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload6 = () => {
    item6.current && item6.current.click()
  }

  const handleUpload6Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file){
      const reader = new FileReader()
      reader.onload = () => {
        if(typeof reader.result === 'string'){
          setItem6Src(reader.result)
          setImgCounter(imgCounter + 1)
          console.log(setImgCounter)
        }
      }
      reader.readAsDataURL(file)
    }
  }
 
return(
  <div className='p-5'>
    <form className='flex space-x-6'>
      <div className='flex flex-col gap-2 w-[400px]'>
        <div className='group relative flex flex-col items-center justify-center w-full h-[300px] border-4 border-violet-400 rounded-xl hover:cursor-pointer overflow-hidden'
            onClick={() => handleUpload()}>
          {imgSrc ? (
            <>
              <img src={imgSrc} className="w-full h-full object-cover hover:scale-105 transition-transform" />
              <div className='group-hover:flex items-center justify-center h-[20px] w-[20px] rounded-full bg-red-500 absolute top-1 right-2 hidden hover:bg-opacity-60 transition-all' 
                    title='Eliminar imagen' onClick={deleteImage}>
                <GiCancel className='text-white'/>
              </div>
            </>
          ) : (
            <>
              <input ref={mainFile} onChange={handleUploadChange} type="file" accept='image/png, image/jpeg' hidden />
              <LuUpload size={30} className='text-violet-400 group-hover:opacity-70 transition-opacity'/>
              <p>Subir archivo</p>
            </>
          )}
        </div>
        {imgSrc && (
          <div className='flex gap-2 flex-wrap'>
            <div className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 hover:cursor-pointer transition-opacity overflow-hidden'>
              {Item1Src ? (
                <>
                  <img src={Item1Src} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                  <div className='group-hover:flex items-center justify-center h-[20px] w-[20px] rounded-full bg-red-500 absolute top-1 right-2 hidden hover:bg-opacity-60 transition-all' 
                        title='Eliminar imagen' onClick={deleteImage}>
                    <GiCancel className='text-white'/>
                  </div>
                </>
              ):(
                <>
                    <Plus className='group-hover:scale-150 transition-all'
                    onClick={()=> handleUpload1()}/>
                    <input ref={item1} onChange={handleUpload1Change} type="file" accept='image/png, image/jpeg' hidden />
                </>
              )}
            </div>
            {imgCounter >= 1 && (
              <div className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 hover:cursor-pointer transition-opacity overflow-hidden'>
                {Item2Src ? (
                  <>
                    <img src={Item2Src} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                  </>
                ) : (
                  <>
                    <Plus className='group-hover:scale-150 transition-all'
                    onClick={()=> handleUpload2()}/>
                    <input ref={item2} onChange={handleUpload2Change} type="file" accept='image/png, image/jpeg' hidden />
                  </>
                )}
            </div>
            )}
            {imgCounter >= 2 && (
              <div className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 hover:cursor-pointer transition-opacity overflow-hidden'>
                {Item3Src ? (
                  <>
                    <img src={Item3Src} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                  </>
                ) : (
                  <>
                    <Plus className='group-hover:scale-150 transition-all'
                    onClick={()=> handleUpload3()}/>
                    <input ref={item3} onChange={handleUpload3Change} type="file" accept='image/png, image/jpeg' hidden />
                  </>
                )}
            </div>
            )}
            {imgCounter >= 3 && (
              <div className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 hover:cursor-pointer transition-opacity overflow-hidden'>
                {Item4Src ? (
                  <>
                    <img src={Item4Src} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                  </>
                ) : (
                  <>
                    <Plus className='group-hover:scale-150 transition-all'
                    onClick={()=> handleUpload4()}/>
                    <input ref={item4} onChange={handleUpload4Change} type="file" accept='image/png, image/jpeg' hidden />
                  </>
                )}
            </div>
            )}
            {imgCounter >= 4 && (
              <div className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 hover:cursor-pointer transition-opacity overflow-hidden'>
                {Item5Src ? (
                  <>
                    <img src={Item5Src} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                  </>
                ) : (
                  <>
                    <Plus className='group-hover:scale-150 transition-all'
                    onClick={()=> handleUpload5()}/>
                    <input ref={item5} onChange={handleUpload5Change} type="file" accept='image/png, image/jpeg' hidden />
                  </>
                )}
            </div>
            )}
            {imgCounter >= 5 && (
              <div className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 hover:cursor-pointer transition-opacity overflow-hidden'>
                {Item6Src ? (
                  <>
                    <img src={Item6Src} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                  </>
                ) : (
                  <>
                    <Plus className='group-hover:scale-150 transition-all'
                    onClick={()=> handleUpload6()}/>
                    <input ref={item6} onChange={handleUpload6Change} type="file" accept='image/png, image/jpeg' hidden />
                  </>
                )}
            </div> 
            )}      
          </div>
        )}
        <p className='text-xs '>{imgCounter}/6 Imagenes adicionales</p>
        </div>
        <ProductForm/>
      </form>
      <div className='p-8 flex space-x-3'>
        <NavLink to="/" className="overflow-hidden">
        <button className='group flex items-center bg-slate-300 px-4 py-2 rounded-xl text-slate-800 hover:bg-red-500 hover:text-white transition-colors'>
        <GiCancel className='transform  mr-2 translate-y-8 group-hover:translate-y-0 transition duration-500 ease-in-out'/>
        Cancelar
        </button>
        </NavLink>
        <NavLink to="/">
        <button type='submit' className={imgSrc ? 
        'group flex items-center bg-slate-300 px-4 py-2 rounded-xl text-slate-800 hover:bg-green-400 hover:text-white transition-colors overflow-hidden'
        : 'flex items-center opacity-80 bg-slate-300 px-4 py-2 rounded-xl text-slate-800 hover:cursor-not-allowed transition-colors overflow-hidden'}
                disabled={!imgSrc}
                title={!imgSrc ? "Primero debe subir una imagen":"Publicar"}>
        <FaRegCheckCircle className='transform mr-2 translate-y-8 group-hover:translate-y-0 transition duration-500 ease-in-out'/>
        Publicar
        </button>
        </NavLink>
      </div>
  </div>
 )
}