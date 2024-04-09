import Card1 from "../components/productsCards/Card1"
import Filters from "../components/filters"
import Rating from "../components/rating"
import FeaturedProducts from "./Featured"
import AddProduct from "../components/addProduct"
import './styles/home.css'

import { Pagination } from "antd"
import ProductCard from "../components/productCard"
import Catalog from "../components/catalog"

const Home = () => {
    
    return(
        <>
            <div className="h-full w-full flex flex-col">
                <FeaturedProducts />
                <div className="flex justify-center w-full">
                    <Filters/>
                    <div className="max-w-[60rem] justify-self-start">
                        <div className="mt-3">
                            <Rating/>
                        </div>
                        <Catalog />
                    </div>
                    <AddProduct/>
                </div>
                <Pagination className="self-center mt-6 mb-6" defaultCurrent={1} total={50}></Pagination>
            </div>
        </>
    )
}

export default Home