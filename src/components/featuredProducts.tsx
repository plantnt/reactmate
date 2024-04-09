import { Rate } from 'antd'
import { NavLink } from 'react-router-dom'

import product1 from '../assets/products/1.jpg'
import product2 from '../assets/products/2.jpg'
import product3 from '../assets/products/3.jpg'
import product4 from '../assets/products/4.jpg'
import product5 from '../assets/products/5.jpg'

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
    
    
const FeaturedProducts: React.FC = () => {
    const randomImage = getRandomImage(images)
    return(
        <>
            <NavLink to={'/productPage'}>
                <div className='w-[10rem] bg-white border-[1px] border-slate-500 rounded-lg shadow-md'>
                        <img src={randomImage} alt="Imagen product" className='object-cover'/>
                    <div className="h-[140px] w-full overflow-hidden">
                    </div>
                    <div className='w-full p-2 bg-white'>
                        <h3 className='font-semibold text-wrap'>Mueble azul de casa</h3>
                        <Rate allowHalf disabled value={5} className="text-violet-400 text-xs" />
                        <h1 className='text-lg'>$ 999.99</h1>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default FeaturedProducts