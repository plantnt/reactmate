import ProductCard from "../components/productCard"
import Filters from "../components/filters"
import Footer from "../components/UI/footer"
import Rating from "../components/rating"
import FeaturedProducts from "./Featured"
import AddProduct from "../components/addProduct"
import Navbar from "../components/UI/navbar"
import './styles/home.css'

import { Pagination } from "antd"

const Home = () => {
    return(
        <>
        <Navbar></Navbar>
            <div className="h-full w-full flex flex-col">
                <FeaturedProducts />
                <div className="grid grid-flow-col">
                    <Filters/>      
                    <div className="max-w-[60rem] justify-self-start">
                        <div className="mt-3">
                            <Rating/>
                        </div>
                        <div className="max-w-[90%] inline-flex flex-wrap gap-3 ml-3 pt-3">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                        
                    </div>
                    <AddProduct/>
                </div>
               <br></br>
                <Pagination className="self-center mt-6" defaultCurrent={1} total={50}></Pagination>
                <div className="grid w-full justify-self-end">
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Home