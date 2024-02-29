import ProductCard from "../components/productCard"
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

export default function FeaturedProducts(){

 return(
    <>
<div className="w-full bg-gradient-to-r from-furnipurple to-furniorange rounded min-h-[250px] my-4 p-8">
    <h1 className="text-white text-2xl pb-5 font-bold antialiased">Productos Destacados</h1>

    <div className="flex">

       <div className="border-4 border-yellow-500">
         <button className="bg-white rounded-full h-10 w-10">
         <SlArrowLeft />
         </button>
       </div>
        
        
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        
            

       <div className="border-4 border-yellow-500 center align-center">
         <button className="bg-white rounded-full h-10 w-10 justify-self-center">
         <SlArrowRight/>
         </button>
       </div>

    </div>
</div>
    </>
 )
}