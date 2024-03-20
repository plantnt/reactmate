import type { SelectProps } from 'antd';
import { Select, Space } from 'antd';

import "./ProductForm.css"

const ProductForm = () => {
    
    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };
    const options: SelectProps['options'] = [
        {
          label: 'Mueble de madera',
          value: '1',
          desc: 'Mueble de madera',
        },
        {
          label: 'Mueble de plástico',
          value: '2',
          desc: 'Mueble de plástico',
        },
        {
          label: 'Mueble restaurado',
          value: '3',
          desc: 'Mueble restaurado',
        },
        {
          label: 'Mueble de jardín',
          value: '4',
          desc: 'Mueble de jardín',
        },
      ];
          
    document.querySelector("#select")?.classList.remove(".css-b62m3t-container")
    return(
        <div className="h-[400px] flex flex-col">
            <label>
                Titulo
                <input type="text" className="border-2 " />
            </label>
            <label>
                Precio
                <input type="text" className="border-2 " />
            </label>
            <label>
                Categorías
                <Select
                mode="multiple"
                style={{ width: '200px' }}
                placeholder="Seleccione una categoría"
                onChange={handleChange}
                optionLabelProp="label"
                options={options}
                optionRender={(option) => (
                <Space>
                    <span role="img" aria-label={option.data.label}>
                    {option.data.emoji}
                    </span>
                    {option.data.desc}
                </Space>
                )}
            />
            </label>
        </div>
    )
}

export default ProductForm