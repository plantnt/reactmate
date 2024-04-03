import { useState, useRef, useEffect } from 'react';
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
 
 const deleteImage = () => {
    setImgSrc(null)
  }

  const deleteItem1 = () => {
    setItem1Src(null)
    {imgCounter <= 1 ? setImgCounter(0) : setImgCounter(imgCounter - 1)}
  }

  const deleteItem2 = () => {
    setItem2Src(null)
    setImgCounter(imgCounter - 1)
  }

  const deleteItem3 = () => {
    setItem3Src(null)
    setImgCounter(imgCounter - 1)
  }

  const deleteItem4 = () => {
    setItem4Src(null)
    setImgCounter(imgCounter - 1)
  }

  const deleteItem5 = () => {
    setItem5Src(null)
    setImgCounter(imgCounter - 1)
  }

  const deleteItem6 = () => {
    setItem6Src(null)
    setImgCounter(imgCounter - 1)
  }



   const images ={
   imgP:"",
   img_1:"",
   img_2:"",
   img_3:"",
   img_4:"",
   img_5:"",
   img_6:""

   }
   
   const [formData, setFormData]=useState(images)


  const uploadimgs = async ()=>{
    try{
  const { data, error } = await supabase
  .from('products')
  .insert([{ image:`${formData.imgP}`, aditImages: [`${Item1Src}`, `${Item2Src}`, `${Item3Src}`, `${Item4Src}`,
  `${Item5Src}`, `${Item6Src}`] }])
   console.log(formData)
   console.log(data)
   if (error) {
    throw error;
}


}catch (error) {
console.error('Error al subir imagenes', error);
}
}

return(
  <div className='p-8 grid'>
    <form className='flex space-x-6'>
      <div className='flex flex-col gap-2 w-[400px]'>
        <div className='group relative flex flex-col items-center justify-center w-full h-[400px] border-4 border-violet-400 rounded-xl hover:cursor-pointer overflow-hidden'
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
          <div className='flex md:justify-start justify-center md:gap-[7px] gap-1 flex-wrap'>
            <div className='group relative flex items-center justify-center h-[120px] md:w-[32%] w-[48%] text-slate-400 rounded-md border-2 border-slate-400 hover:cursor-pointer transition-opacity overflow-hidden'>
              {Item1Src ? (
                <>
                  <img src={Item1Src} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                  <div className='group-hover:flex absolute top-0 right-0 items-center justify-center h-[20px] w-[20px] rounded-full bg-red-500 hidden z-50 transition-all' 
                        title='Eliminar imagen' onClick={deleteItem1}>
                    <GiCancel className='text-white text-lg'/>
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
              <div className='group relative flex items-center justify-center h-[120px] md:w-[32%] w-[48%] text-slate-400 rounded-md border-2 border-slate-400 hover:cursor-pointer transition-opacity overflow-hidden'>
                {Item2Src ? (
                  <>
                    <img src={Item2Src} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                    <div className='group-hover:flex absolute top-0 right-0 items-center justify-center h-[20px] w-[20px] rounded-full bg-red-500 hidden z-50 transition-all' 
                        title='Eliminar imagen' onClick={deleteItem2}>
                      <GiCancel className='text-white text-lg'/>
                    </div>
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
              <div className='group relative flex items-center justify-center h-[120px] md:w-[32%] w-[48%] text-slate-400 rounded-md border-2 border-slate-400 hover:cursor-pointer transition-opacity overflow-hidden'>
                {Item3Src ? (
                  <>
                    <img src={Item3Src} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                    <div className='group-hover:flex absolute top-0 right-0 items-center justify-center h-[20px] w-[20px] rounded-full bg-red-500 hidden z-50 transition-all' 
                        title='Eliminar imagen' onClick={deleteItem3}>
                      <GiCancel className='text-white text-lg'/>
                    </div>
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
              <div className='group relative flex items-center justify-center h-[120px] md:w-[32%] w-[48%] text-slate-400 rounded-md border-2 border-slate-400 hover:cursor-pointer transition-opacity overflow-hidden'>
                {Item4Src ? (
                  <>
                    <img src={Item4Src} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                    <div className='group-hover:flex absolute top-0 right-0 items-center justify-center h-[20px] w-[20px] rounded-full bg-red-500 hidden z-50 transition-all' 
                        title='Eliminar imagen' onClick={deleteItem4}>
                      <GiCancel className='text-white text-lg'/>
                    </div>
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
              <div className='group relative flex items-center justify-center h-[120px] md:w-[32%] w-[48%] text-slate-400 rounded-md border-2 border-slate-400 hover:cursor-pointer transition-opacity overflow-hidden'>
                {Item5Src ? (
                  <>
                    <img src={Item5Src} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                    <div className='group-hover:flex absolute top-0 right-0 items-center justify-center h-[20px] w-[20px] rounded-full bg-red-500 hidden z-50 transition-all' 
                        title='Eliminar imagen' onClick={deleteItem5}>
                      <GiCancel className='text-white text-lg'/>
                    </div>
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
              <div className='group relative flex items-center justify-center h-[120px] md:w-[32%] w-[48%] text-slate-400 rounded-md border-2 border-slate-400 hover:cursor-pointer transition-opacity overflow-hidden'>
                {Item6Src ? (
                  <>
                    <img src={Item6Src} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
                    <div className='group-hover:flex absolute top-0 right-0 items-center justify-center h-[20px] w-[20px] rounded-full bg-red-500 hidden z-50 transition-all' 
                        title='Eliminar imagen' onClick={deleteItem6}>
                      <GiCancel className='text-white text-lg'/>
                    </div>
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
      <div className='flex p-8 justify-end space-x-3'>
          <NavLink to="/">
            <button onSubmit={(e:any) => {e.preventDefault()
            uploadimgs()}} type='submit' className={imgSrc ? 
            'group flex items-center bg-slate-300 w-[200px] h-[50px] px-4 py-2 rounded-xl text-lg text-slate-800 hover:bg-green-400 hover:text-white transition-colors overflow-hidden'
            : 'flex items-center opacity-80 bg-slate-300 w-[200px] h-[50px] px-4 py-2 rounded-xl text-lg text-slate-800 hover:cursor-not-allowed transition-colors overflow-hidden'}
            disabled={!imgSrc}
            title={!imgSrc ? "Primero debe subir una imagen":"Publicar"}>
              <FaRegCheckCircle className='transform mr-2 translate-y-9 group-hover:translate-y-0 transition duration-500 ease-in-out'/>
              Publicar
            </button>
          </NavLink>
          <NavLink to="/" className="overflow-hidden">
            <button className='group flex items-center bg-slate-300 w-[200px] h-[50px] px-4 py-2 rounded-xl text-lg text-slate-800 hover:bg-red-500 hover:text-white transition-colors'>
              <GiCancel className='transform  mr-2 translate-y-9 group-hover:translate-y-0 transition duration-500 ease-in-out'/>
              Cancelar
            </button>
          </NavLink>
      </div>
  </div>
 )
}
// import { useState, useRef } from 'react';
// import { NavLink } from 'react-router-dom';

// import ProductForm from '../components/UI/ProductForm';
// import { supabase } from "../utils/Utils";
// import { LuUpload } from "react-icons/lu";
// import { GiCancel } from "react-icons/gi";
// import { Plus } from 'lucide-react';
// import { FaRegCheckCircle } from 'react-icons/fa';

// export default function Upload() {
//   const mainFile = useRef<HTMLInputElement>(null);
//   const itemRefs = Array.from({ length: 6 }, () => useRef<HTMLInputElement>(null));

//   const [imgSrc, setImgSrc] = useState<string | null>(null);
//   const [additionalImages, setAdditionalImages] = useState<Array<string | null>>(Array.from({ length: 6 }, () => null));

//   const handleUpload = (index: number) => {
//     itemRefs[index].current && itemRefs[index].current.click();
//   };

//   const handleUploadChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (typeof reader.result === 'string') {
//           if (index === -1) {
//             setImgSrc(reader.result);
//           } else {
//             const newAdditionalImages = [...additionalImages];
//             newAdditionalImages[index] = reader.result;
//             setAdditionalImages(newAdditionalImages);
//           }
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const deleteImage = () => {
//     setImgSrc(null);
//   };

//   const deleteItem = (index: number) => {
//     const newAdditionalImages = [...additionalImages];
//     newAdditionalImages[index] = null;
//     setAdditionalImages(newAdditionalImages);
//   };

//   const uploadimgs = async () => {
//     try {
//       const { data, error } = await supabase
//         .from('products')
//         .insert([{ image: imgSrc, aditImages: additionalImages.filter(image => image !== null) }]);
      
//       console.log(data);
//       if (error) {
//         throw error;
//       }
//     } catch (error) {
//       console.error('Error al subir imágenes', error);
//     }
//   };

//   return (
//     <div className='p-8 grid'>
//       <form className='flex space-x-6'>
//         <div className='flex flex-col gap-2 w-[400px]'>
//           {/* Imagen principal */}
//           <div className='group relative flex flex-col items-center justify-center w-full h-[400px] border-4 border-violet-400 rounded-xl hover:cursor-pointer overflow-hidden'
//               onClick={() => handleUpload(-1)}>
//             {imgSrc ? (
//               <>
//                 <img src={imgSrc} className="w-full h-full object-cover hover:scale-105 transition-transform" />
//                 <div className='group-hover:flex items-center justify-center h-[20px] w-[20px] rounded-full bg-red-500 absolute top-1 right-2 hidden hover:bg-opacity-60 transition-all' 
//                       title='Eliminar imagen' onClick={deleteImage}>
//                   <GiCancel className='text-white'/>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <input ref={mainFile} onChange={(e) => handleUploadChange(e, -1)} type="file" accept='image/png, image/jpeg' hidden />
//                 <LuUpload size={30} className='text-violet-400 group-hover:opacity-70 transition-opacity'/>
//                 <p>Subir archivo</p>
//               </>
//             )}
//           </div>
          
//           {/* Imágenes adicionales */}
//           <div className='flex md:justify-start justify-center md:gap-[7px] gap-1 flex-wrap'>
//             {additionalImages.map((image, index) => (
//               <div key={index} className='group relative flex items-center justify-center h-[120px] md:w-[32%] w-[48%] text-slate-400 rounded-md border-2 border-slate-400 hover:cursor-pointer transition-opacity overflow-hidden'>
//                 {image ? (
//                   <>
//                     <img src={image} className="w-full h-full object-cover hover:scale-105 transition-transform"/>
//                     <div className='group-hover:flex absolute top-0 right-0 items-center justify-center h-[20px] w-[20px] rounded-full bg-red-500 hidden z-50 transition-all' 
//                         title='Eliminar imagen' onClick={() => deleteItem(index)}>
//                       <GiCancel className='text-white text-lg'/>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <Plus className='group-hover:scale-150 transition-all'
//                     onClick={()=> handleUpload(index)}/>
//                     <input ref={itemRefs[index]} onChange={(e) => handleUploadChange(e, index)} type="file" accept='image/png, image/jpeg' hidden />
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//           <p className='text-xs '>{additionalImages.filter(image => image !== null).length}/6 Imágenes adicionales</p>
//         </div>
//         <ProductForm/>
//       </form>
//       <div className='flex p-8 justify-end space-x-3'>
//         <button onSubmit={(e: any) => {e.preventDefault(); uploadimgs();}} type='submit' className={imgSrc ? 
//             'group flex items-center bg-slate-300 w-[200px] h-[50px] px-4 py-2 rounded-xl text-lg text-slate-800 hover:bg-green-400 hover:text-white transition-colors overflow-hidden'
//             : 'flex items-center opacity-80 bg-slate-300 w-[200px] h-[50px] px-4 py-2 rounded-xl text-lg text-slate-800 hover:cursor-not-allowed transition-colors overflow-hidden'}
//             disabled={!imgSrc}
//             title={!imgSrc ? "Primero debe subir una imagen":"Publicar"}>
//           <FaRegCheckCircle className='transform mr-2 translate-y-9 group-hover:translate-y-0 transition duration-500 ease-in-out'/>
//           Publicar
//         </button>
//         <NavLink to="/" className="overflow-hidden">
//           <button className='group flex items-center bg-slate-300 w-[200px] h-[50px] px-4 py-2 rounded-xl text-lg text-slate-800 hover:bg-red-500 hover:text-white transition-colors'>
//             <GiCancel className='transform  mr-2 translate-y-9 group-hover:translate-y-0 transition duration-500 ease-in-out'/>
//             Cancelar
//           </button>
//         </NavLink>
//       </div>
//     </div>
//   );
// }
