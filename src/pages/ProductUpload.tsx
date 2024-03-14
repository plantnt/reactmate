/*import { BiCamera } from "react-icons/bi";*/
/*<BiCamera />*/
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

import UploadWidget from '../components/Imageupload/UploadWidget';

import { FaRegCheckCircle } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../utils/Utils';

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

  // const [value, setValue] = useState('')
  // const handleChangeP = (event: { target: { value: string } }) => {
  //     const result = event.target.value.replace(/\D/g, '')
  //     setValue(result)
  // }

  const initialState = {
    title: "",
    description: "",
    price: "",
    image: null,
}


    const [formData, setFormData] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState(false)

    const handleChange = async (e:any) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    
    const handleImage = async (e:any) => {
        const reader = new FileReader()
        reader.onloadend = async () => {
            setLoading(true)
        }
        
        const files = e.target.files[0]
        if(!files) return
        const data = new FormData()
        data.append('file', files) 
        data.append('upload_preset', 'c_tags')
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dotrqr59h/upload",
            {
                method: "POST",
                body: data
            }
        ) 
        
        const file = await res.json()
        setFormData({...formData, image: file.secure_url})
        setLoading(false)
    }
        
    const createProduct = async () => {
        const res = await supabase.from("products").insert([
            {
                image: `${formData.image}`,
                title: `${formData.title}`,
                description: `${formData.description}`,
                price: `${formData.price}`,
            }
        ])
        if (res.error === null && res.status === 201) {
            setStatus(true);
            setFormData(initialState);
            setTimeout(() => {
              setStatus(false);
            }, 5000);
    }
}
console.log(loading)

  return(
    <> 
      <div className="flex space-x-9 p-8">
          <form className='grid grid-cols-3' onSubmit={(e:any) => {
                            e.preventDefault()
                            createProduct()
                        }}>
          <UploadWidget />
          <div className='ml-4'>
            <label className='grid'>
              Título del producto
              <input type="text" id='title' name='title' className='border border-slate-300 h-[2em] outline-none p-1 rounded-md' required 
              onChange={handleChange}/>
            </label>
            <label className='relative grid'>
              Precio
              <input type="text" name='price' onChange={handleChange} className="border border-slate-300 h-[2em] outline-none p-1 rounded-md" maxLength={10} placeholder='$'/>
            </label>
            <label className='grid'>
              Descripción
              <textarea id='description' name='description' className='border border-slate-300 resize-none outline-none p-1 rounded-lg' cols={30} rows={10} maxLength={500} onChange={handleChange}></textarea>
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
        <NavLink to="/">
          <button className='group flex items-center bg-slate-300 px-4 py-2 rounded-xl text-slate-800 hover:bg-green-400 hover:text-white transition-colors'>
            <FaRegCheckCircle className='transform mr-2 translate-y-8 group-hover:translate-y-0 transition duration-500 ease-in-out'/>
            Publicar
          </button>
        </NavLink>
      </div>
  </>
 )
}
