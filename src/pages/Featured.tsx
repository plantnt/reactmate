import ProductCard from "../components/productCard"
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

export default function FeaturedProducts(){
 return(
    <>
<div className="w-full bg-gradient-to-r from-[#9448e1] to-[#fb728b] min-h-[250px] mb-4 p-8">
    <h1 className="text-white text-2xl pb-5 font-bold antialiased">PRODUCTOS DESTACADOS</h1>

    <div className="flex space-x-10 justify-center">

       <div className="pr-8 flex justify-center items-center">
         <button className="bg-gray-700 bg-opacity-15 rounded-full h-10 w-10 p-2 flex justify-center items-center text-white hover:bg-opacity-40 ease-in-out duration-1000">
         <SlArrowLeft />
         </button>
       </div>
        
        
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      
       
        
            

       <div className="pl-8 flex justify-center items-center">
         <button className="bg-gray-700 bg-opacity-15 rounded-full h-10 w-10 p-2 flex justify-center items-center text-white hover:bg-opacity-40 ease-in-out duration-1000">
         <SlArrowRight/>
         </button>
       </div>

    </div>
</div>
    </>
 )
}