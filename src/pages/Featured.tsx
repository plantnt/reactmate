import ProductCard from "../components/productCard"
export default function FeaturedProducts(){

 return(
    <>
<div className="w-full bg-gradient-to-r from-furnipurple to-furniorange rounded min-h-[250px] my-4 flex p-5">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    </div>
    </>
 )
}