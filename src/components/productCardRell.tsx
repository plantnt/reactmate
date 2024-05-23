import { Rate } from 'antd'
import { NavLink } from 'react-router-dom'
//import { supabase } from "../utils/Utils";

import product1 from '../assets/products/recu10.jpg'
import product2 from '../assets/products/recu8.jpg'
import product3 from '../assets/products/recu13.jpg'
import product4 from '../assets/products/recu18.jpg'
import product5 from '../assets/products/recu15.jpg'

import { FaLeaf } from "react-icons/fa"


type ImageUrl = string
    const images: ImageUrl[] = [
        product1,
        product2,
        product3,
        product4,
        product5
    ]
type Names = string
    const names: Names[] = [
        'Sofá Modular Seccional de Lujo ',
        'Mesa de Comedor Extensible de Madera Maciza',
        'Silla de Oficina Ergonómica ',
        'Estantería de Almacenamiento ',
        'Cama Queen con Cabecero Tapizado ',
        'Conjunto de Muebles de Jardín de Ratán',
        'Mesa de Centro con Almacenamiento',
        'Silla de Comedor de Cuero Sintético ',
        'Escritorio de Estudio con Espacio de Almacenamiento ',
        'Mueble de TV Flotante con Estantes Minimalismo',
    ]


    function getRandomImage(images: ImageUrl[]): ImageUrl | undefined {
        if(images.length === 0){
            return undefined
        }
        
        const randomIndex = Math.floor(Math.random() * images.length)
        return images[randomIndex]
    }
    function getRandomName(names: Names[]): Names | undefined {
        if(names.length === 0){
            return undefined
        }
        
        const randomIndex = Math.floor(Math.random() * images.length)
        return images[randomIndex]
    }
    const ProductCardRell = ({id}) => {
    
    
    const randomName = getRandomImage(names)
    const randomImage = getRandomImage(images)

    const values = Math.random() * (5 - 0.5) + 0.5;

    const price1 = Math.round(Math.random() * (999 - 100) + 100) ;
    const price2 = Math.round(Math.random() * (999 - 100) + 100) ; 

    const logo = Math.round(Math.random()*(5 - 0));

    

    return(
        <>
            <NavLink to={`/productPage/${id}`}>
                      <div className='w-[10rem] h-[300px] overflow-hidden bg-white border-2 border-slate-200 rounded-lg shadow-md'>

                      <div className="h-[140px] w-full overflow-hidden relative">
                          {logo > 3 ? (
                              <FaLeaf size={25} className="text-[#27ff59] w-[30px] h[30px] block absolute top-0 left-0  bg-white rounded-md p-1"/>
                                
                          ) : (
                              ''
                          ) }
                              <img src={randomImage} alt="Imagen product" className='object-cover h-full w-full'/>
                          </div>
          
                          <div className='w-full p-2 bg-white'>
                          {logo > 3 ? (
                              <Rate allowHalf disabled value={values} className="text-green-400 pt-1 text-xs text-center bg-green-200 rounded-b-full px-1 w-full" />
                          ) : (
                            <Rate allowHalf disabled value={values} className="text-violet-400 pt-1 text-xs text-center bg-purple-200 rounded-b-full px-1 w-full" />
                          ) }
                          
                              <h3 className='font-semibold tex'>{randomName}</h3>
                              <h1 className='text-lg'>COP ${price1},{price2}</h1>
                          </div>
                      </div>                
            </NavLink>
        </>
    )
}

export default ProductCardRell