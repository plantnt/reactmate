import { Carousel } from "antd";
import ProductCard from "../components/productCard";

export default function FeaturedProducts(){
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    }
 return(
    <>
        <div className="flex flex-wrap justify-center space-x-4 p-7 w-full bg-gradient-to-r from-furniorange to-[#9d4dff]">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        <div className=" absolute flex justify-between mt-[100px] min-w-[80%]">
            <span>d</span>
            <span>d</span>
        </div>
        </div>
    </>
 )
}