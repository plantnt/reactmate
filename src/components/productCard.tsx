import { Rate } from 'antd'
import { NavLink } from 'react-router-dom'
import { supabase } from "../utils/Utils";

import product1 from '../assets/products/1.jpg'
import product2 from '../assets/products/2.jpg'
import product3 from '../assets/products/3.jpg'
import product4 from '../assets/products/4.jpg'
import product5 from '../assets/products/5.jpg'
import { useEffect, useState } from 'react';

type ImageUrl = string
    const images: ImageUrl[] = [
        product1,
        product2,
        product3,
        product4,
        product5
    ]

    function getRandomImage(images: ImageUrl[]): ImageUrl | undefined {
        if(images.length === 0){
            return undefined
        }
        
        const randomIndex = Math.floor(Math.random() * images.length)
        return images[randomIndex]
    }
    const [Imagenes, setImagenes]=useState({
        image:"",
        price:"",
        title:""
    })
    useEffect(() => {
        const fetchImagenes = async () => {
          try {
            
            const { data, error } = await supabase
              .from('products')
              .select('image, title, price')
              ;
            
            if (error) {
              console.error('Error fetching user data:', error.message);
              return;
            }
            
            if (data) {
              setImagenes(data);
              console.log(setImagenes)
            } else {
              console.error('No user data found for the specified ID.');
            }
          } catch (error) {
            console.error('Error in fetchUserData:', error);
          }
        };
    
        fetchImagenes();
      }, );
    
const ProductCard = () => {
    const randomImage = getRandomImage(images)
    return(
        <>
            <NavLink to={'/productPage'}>
                <div className='w-[10rem] bg-white border-2 border-slate-200 rounded-lg shadow-md'>
                    <div className="h-[140px] w-full overflow-hidden">
                        <img src={randomImage} alt="Imagen product" className='object-cover'/>
                    </div>
                    <div className='w-full p-2 bg-white'>
                        <h3 className='font-semibold text-wrap truncate'>{Imagenes.title}</h3>
                        <Rate allowHalf disabled value={5} className="text-violet-400 text-xs" />
                        <h1 className='text-lg'>$ COP {Imagenes.price}</h1>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default ProductCard