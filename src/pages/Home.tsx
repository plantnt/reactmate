import Filters from "../components/filters"
import Rating from "../components/rating"
import FeaturedProducts from "./Featured"
import AddProduct from "../components/addProduct"
import './styles/home.css'

import { Pagination } from "antd"

import Catalog from "../components/catalog"

const Home = () => {
    
    return(
        <>
            <div className="h-full w-full flex flex-col">
                <FeaturedProducts />
                <div className="flex justify-center w-full">
                    <div className="flex w-full">
                    <Filters/>
                        <div className="ml-5">
                            <Rating/>
                            <Catalog />
                        </div>
                    </div>
                    <AddProduct/>
                </div>
                <Pagination className="self-center mt-6 mb-6" defaultCurrent={1} total={50}></Pagination>
            </div>
        </>
    )
}

export default Home