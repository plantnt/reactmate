import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import ProductForm from '../components/UI/ProductForm';
import { supabase } from "../utils/Utils";

import { LuUpload } from "react-icons/lu";
import { GiCancel } from "react-icons/gi";
import { Plus } from 'lucide-react';
import { FaRegCheckCircle } from 'react-icons/fa';

export default function Upload() {
  const [images, setImages] = useState({
    main: null,
    items: []
  });

  const mainFile = useRef<HTMLInputElement>(null);
  const itemFiles = useRef(Array.from({ length: 6 }, () => null));

  const handleUpload = (index: number | null = null) => {
    if (index !== null && itemFiles.current[index]) {
      itemFiles.current[index].click();
    } else if (mainFile.current) {
      mainFile.current.click();
    }
  };

  const handleUploadChange = (event: React.ChangeEvent<HTMLInputElement>, index: number | null = null) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          if (index !== null) {
            const newItems = [...images.items];
            newItems[index] = reader.result;
            setImages({ ...images, items: newItems });
          } else {
            setImages({ ...images, main: reader.result });
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

const deleteImage = (index = null) => {
  if (index !== null) {
    const newItems = [...images.items];
    newItems.splice(index, 1);
    setImages({ ...images, items: newItems });
  } else {
    if (images.items.length > 0) {
      const [newMain, ...remainingItems] = images.items;
      setImages({ main: newMain, items: remainingItems });
    } else {
      setImages({ main: null, items: [] });
    }
  }
};
  
  
const title=sessionStorage.getItem("titulo")
const description=sessionStorage.getItem("descripcion")
const price =sessionStorage.getItem("precio")
const material=sessionStorage.getItem("material")
const categoria=sessionStorage.getItem("Categoria")
var Categoriarecuperada = JSON.parse(categoria)



 const uploadImgs = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .insert([{ image: images.main, aditImages: images.items,
           title:title, description:description, price:price, material:material, categoria:Categoriarecuperada }]);
      console.log(data)
      console.log("info enviada");
      console.log(title, description, price, material, Categoriarecuperada)
      alert("su producto a sido subido con exito")
      if (error) {
        throw error;
      }
    } catch (error) {
      alert("vuelva a intentarlo")
      console.error('Error al subir imágenes', error);
    }
  } 

  return (
    <div className='p-8 grid'>
      <form className='flex space-x-6'>
        <div className='flex flex-wrap   w-[400px]'>
          <div className='group relative flex flex-col items-center justify-center w-full h-[400px] border-4 border-violet-400 rounded-xl hover:cursor-pointer overflow-hidden'
            onClick={() => handleUpload()}>
            {images.main ? (
              <>
                <img src={images.main} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                <div className='group-hover:flex items-center justify-center h-[20px] w-[20px] rounded-full bg-red-500 absolute top-1 right-2 hidden hover:bg-opacity-60 transition-all'
            title='Eliminar imagen' onClick={(e) => { e.stopPropagation(); deleteImage(); }}>
            <GiCancel className='text-white' />
                  
                </div>
              </>
            ) : (
              <>
                <input ref={mainFile} onChange={(e) => handleUploadChange(e)} type="file" accept='image/png, image/jpeg' hidden />
                <LuUpload size={30} className='text-violet-400 group-hover:opacity-70 transition-opacity' />
                <p>Subir archivo</p>
              </>
            )}
          </div>
          {images.items.map((itemSrc, index) => (
            <div key={index} className='m-0.5 mt-1.5 group relative flex items-center justify-center h-[120px] md:w-[32%] w-[48%] text-slate-400 rounded-md border-2 border-slate-400 hover:cursor-pointer transition-opacity overflow-hidden'>
              {itemSrc ? (
                <>
                  <img src={itemSrc} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  <div className='group-hover:flex absolute top-0 right-0 items-center justify-center h-[20px] w-[20px] rounded-full bg-red-500 hidden z-50 transition-all'
                    title='Eliminar imagen' onClick={(e) => { e.stopPropagation(); deleteImage(index); }}>
                    <GiCancel className='text-white text-lg' />
                  </div>
                
          </>
              ) : (
                <>
                  <Plus className='group-hover:scale-150 transition-all'
                    onClick={() => handleUpload(index)} />
                  <input ref={(el) => itemFiles.current[index] = el} onChange={(e) => handleUploadChange(e, index)} type="file" accept='image/png, image/jpeg' hidden />
                </>
              )}
            </div>
          ))}
          {images.main ?(
          <>
          {images.items.length < 6 && (
            <div className='m-0.5 mt-1.5 group relative flex items-center justify-center h-[120px] md:w-[32%] w-[48%] text-slate-400 rounded-md border-2 border-slate-400 hover:cursor-pointer transition-opacity'>
              <Plus className='group-hover:scale-150 transition-all' onClick={() => handleUpload(images.items.length)} />
              <input ref={(el) => itemFiles.current[images.items.length] = el} onChange={(e) => handleUploadChange(e, images.items.length)} type="file" accept='image/png, image/jpeg' hidden />
            </div>
          )}
          </>
          ):(<>
          </>)}
          
        
          <p className='text-xs m-2 '>{images.items.filter(Boolean).length}/6 Imágenes adicionales</p>
        </div>
        <ProductForm />
      </form>
      <div className='flex p-8 justify-end space-x-3'>
        <NavLink to="/">
          <button onClick={uploadImgs} type='button' className={images.main ?
            'group flex items-center bg-slate-300 w-[200px] h-[50px] px-4 py-2 rounded-xl text-lg text-slate-800 hover:bg-green-400 hover:text-white transition-colors overflow-hidden'
            : 'flex items-center opacity-80 bg-slate-300 w-[200px] h-[50px] px-4 py-2 rounded-xl text-lg text-slate-800 hover:cursor-not-allowed transition-colors overflow-hidden'}
            disabled={!images.main }
            title={!images.main ? "Primero debe subir una imagen" : "Publicar"}>
            <FaRegCheckCircle className='transform mr-2 translate-y-9 group-hover:translate-y-0 transition duration-500 ease-in-out' />
            Publicar
          </button>
        </NavLink>
        <NavLink to="/" className="overflow-hidden">
          <button className='group flex items-center bg-slate-300 w-[200px] h-[50px] px-4 py-2 rounded-xl text-lg text-slate-800 hover:bg-red-500 hover:text-white transition-colors'>
            <GiCancel className='transform  mr-2 translate-y-9 group-hover:translate-y-0 transition duration-500 ease-in-out' />
            Cancelar
          </button>
        </NavLink>
      </div>
    </div>
  );
}

