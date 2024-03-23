import { SelectProps } from 'antd';
import { Select, Space } from 'antd';
import { useState } from 'react';
import { MdAttachMoney } from 'react-icons/md';
import ColorPick from './ColorPick';


const ProductForm = () => {
    
    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };
    const material: SelectProps['options'] = [
        {
          label: 'Madera',
          value: '1',
          desc: 'Madera',
        },
        {
          label: 'Plástico',
          value: '2',
          desc: 'Plástico',
        },
        {
          label: 'Madera reciclada',
          value: '3',
          desc: 'Madera reciclada',
        },
        {
          label: 'Plástico reciclado',
          value: '4',
          desc: 'Plástico reciclado',
        },
        {
          label: 'Tela',
          value: '5',
          desc: 'Tela',
        },
      ];

    const categoria: SelectProps['options'] = [
        {
          label: 'Mueble de sala',
          value: '1',
          desc: 'Mueble de sala',
        },
        {
          label: 'Mueble de exteriores',
          value: '2',
          desc: 'Mueble de exteriores',
        },
        {
          label: 'Mueble de cocina',
          value: '3',
          desc: 'Mueble de cocina',
        },
        {
          label: 'Mueble restaurado',
          value: '4',
          desc: 'Mueble restaurado',
        },
        {
          label: 'Mueble de playa',
          value: '5',
          desc: 'Mueble de playa',
        },
      ];

      const [value, setValue] = useState('')
      const handleInput = (event: { target: { value: string } }) => {

      const result = event.target.value.replace(/\D/g, '')
        setValue(result)
      }
          
    document.querySelector("#select")?.classList.remove(".css-b62m3t-container")
    return(
        <div className="h-[400px] w-[400px] space-y-5 flex flex-col">
            <label className='grid'>
                Titulo
                <input type="text" className="px-1 border-2 rounded-md outline-none w-full h-[2.4em]" maxLength={50}/>
            </label>
            <label className='grid'>
                Precio
                <span className='flex items-center'>
                  COP
                  <MdAttachMoney size={25}/>
                  <input type="text" onChange={handleInput} value={value} className="px-1 border-2 rounded-md outline-none w-full h-[2.4em]" />
                </span>
            </label>
            <label className='grid'>
                Material
                <Select
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
                  Categoría
                  <Select
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
    )
}

export default ProductForm