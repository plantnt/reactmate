import { SelectProps } from 'antd';
import { Select, Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { MdAttachMoney } from 'react-icons/md';
import ColorPick from './ColorPick';


const ProductForm = () => {
    
    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };
    const material: SelectProps['options'] = [
        {
          label: 'Madera',
          value: 'Madera',
          desc: 'Madera',
        },
        {
          label: 'Plástico',
          value: 'Plastico',
          desc: 'Plástico',
        },
        {
          label: 'Madera reciclada',
          value: 'Madera reciclada',
          desc: 'Madera reciclada',
        },
        {
          label: 'Plástico reciclado',
          value: 'Plastico reciclado',
          desc: 'Plástico reciclado',
        },
        {
          label: 'Tela',
          value: 'Tela',
          desc: 'Tela',
        },
      ];

    const categoria: SelectProps['options'] = [
        {
          label: 'Mueble de sala',
          value: 'Mueble de sala',
          desc: 'Mueble de sala',
        },
        {
          label: 'Mueble de exteriores',
          value: 'Mueble de exteriores',
          desc: 'Mueble de exteriores',
        },
        {
          label: 'Mueble de cocina',
          value: 'Mueble de cocina',
          desc: 'Mueble de cocina',
        },
        {
          label: 'Mueble restaurado',
          value: 'Mueble restaurado',
          desc: 'Mueble restaurado',
        },
        {
          label: 'Mueble de playa',
          value: 'mueble de playa',
          desc: 'Mueble de playa',
        },
      ];

      const [value, setValue] = useState('')
      const handleInput = (event: { target: { value: string } }) => {
        const result = event.target.value.replace(/\D/g, '')
        setValue(result)
      }
      //contador de palabras
      const [charCount, setCharCount] = useState(0);
      const textAreaRef = useRef<HTMLTextAreaElement>(null)

      useEffect(() => {
        const textArea = textAreaRef.current
        if (textArea){
          const updateCharacterCounter = () => {
            const text = textArea.value
            const count = text.length
            setCharCount(count)
          }
          textArea.addEventListener( "input", updateCharacterCounter )
          return (()=>{
            textArea.removeEventListener("input", updateCharacterCounter)
          })
        }
      })

      // const [titulo, setTitulo] = useState("");
      // const [precio, setPrecio] = useState("");
      // const [material, setMaterial] = useState("");
      // const [categoria, setCategoria] = useState("");
      // const [descripcion, setDescripcion] = useState("");
      


    return(
      <>
        <div className="flex flex-col w-[400px] space-y-5">
            <label className='grid'>
                Titulo
                <input name="title" type="text" className="px-1 border-2 rounded-md outline-none w-full h-[2.4em]" required maxLength={1000}/>
            </label>
            <label className='grid'>
                Precio
                <div className='flex items-center'>
                  COP
                  <MdAttachMoney size={25}/>
                  <input type="text" onChange={handleInput} value={value} className="px-1 border-2 rounded-md outline-none w-full h-[2.4em]" required />
                </div>
            </label>
            <label className='grid gap-2'>
              Descripción
              <textarea ref={textAreaRef} name="description" className='px-1 border-2 rounded-md outline-none w-full h-[202px] text-gray-800' required maxLength={1000} spellCheck={false}></textarea>
              <span className='text-xs italic'>{charCount}/1000</span>
            </label>
        </div>
        <div className='flex flex-col space-y-5'>
            <label className='grid'>
                Material
                <Select
                id="Mopcion"
                style={{ width: '200px' }}
                placeholder="Seleccione una categoría"
                onChange={handleChange}
                optionLabelProp="label"
                options={material}
                optionRender={(option) => (
                  <Space>
                    {option.data.desc}
                </Space>
                )}/> 
              </label>
              <label className='grid'>
                  Categoría
                  <Select
                  id="Copcion"
                  mode="multiple"
                  style={{ width: '200px' }}
                  placeholder="Seleccione una categoría"
                  onChange={handleChange}
                  optionLabelProp="label"
                  options={categoria}
                  optionRender={(option) => (
                    <Space>
                      {option.data.desc}
                  </Space>
                  )}/>
            </label>
            <label className='flex flex-col space-y-2'>
              Color
              <ColorPick/>
            </label>
        </div>
      </>
    )
  }
  
  export default ProductForm