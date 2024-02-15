import ProductCard from "../components/productCard"
import Filters from "../components/filters"
import Footer from "../components/UI/footer"
import Rating from "../components/rating"
import FeaturedProducts from "./featured"

import './styles/home.css'

import { Pagination } from "antd"

const Home = () => {
    return(
        <>
            <div className="h-full w-full flex flex-col items-center">
                <FeaturedProducts/>
                <div className="flex w-full">
                    <div className="">
                        <Filters/>
                    </div>      
                    <div className="flex flex-col items-center">
                        <div className="mt-3">
                            <Rating/>
                        </div>
                        <div className="max-w-[70%] inline-flex flex-wrap gap-3 ml-3 pt-3">
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
                        <Pagination className="mt-6" defaultCurrent={1} total={50}></Pagination>
                    </div>
                </div>
                <div className="w-full">
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Home