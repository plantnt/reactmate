import { Rate } from 'antd'
import { NavLink } from 'react-router-dom'


import { FaLeaf } from "react-icons/fa"
    
const ProductCard = ({ id, title='', price=555, image='' }) => {
    // const randomImage = getRandomImage(images)

    const values = Math.random() * (5 - 0.5) + 0.5;

    // const price1 = Math.round(Math.random() * (999 - 100) + 100) ;
    // const price2 = Math.round(Math.random() * (999 - 100) + 100) ; 

     const logo = Math.round(Math.random()*(5 - 0));

    

    return(
        <>
            <NavLink to={`/productPage/${id}`}>
                
                      <div className='w-[10rem] bg-white border-2 border-slate-200 rounded-lg shadow-md'>

                      <div className="h-[140px] w-full overflow-hidden relative">
                          {logo > 3 ? (
                              <FaLeaf size={25} className="text-[#27ff59] w-[30px] h[30px] block absolute top-0 left-0  bg-white rounded-md p-1"/>
                                
                          ) : (
                              ''
                          ) }
                              <img src={image} alt="Imagen product" className='object-cover'/>
                          </div>
          
                          <div className='w-full p-2 bg-white'>
                          <Rate allowHalf disabled value={values} className="text-violet-400 pt-1 text-xs text-center bg-purple-200 rounded-b-full px-1 w-full" />
                              <h3 className='font-semibold text-wrap truncate'>{title}</h3>
                              <h1 className='text-lg'>COP ${price}</h1>
                          </div>
                      </div>                
            </NavLink>
        </>
    )
}

export default ProductCard