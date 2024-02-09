import ProductCard from "../components/productCard"
import Filters from "../components/filters"
import Footer from "../components/UI/footer"
import Rating from "../components/rating"

import './styles/home.css'

import { Pagination } from "antd"

const Home = () => {
    return(
        <>
            <div className="h-full w-full flex flex-col items-center">
                <div className="flex w-full">
                    <div className="basis-1/5">
                        <Filters/>
                    </div>      
                    <div className="flex flex-col items-center">
                        <div className="self-start mt-3">
                            <Rating/>
                        </div>
                        <div className="grid grid-cols-4 gap-3 ml-3 pt-3">
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