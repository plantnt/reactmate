import ProductCard from "../components/productCard"
import Filters from "../components/filters"
import Footer from "../components/UI/footer"
import Rating from "../components/rating"

const Home = () => {
    return(
        <>
            <div className="h-full w-full flex flex-col items-center">
                <div className="flex w-full">
                    <div className="basis-1/5">
                        <Filters/>
                    </div>      
                    <div className="">
                        <div className="mt-3">
                            <Rating/>
                        </div>
                        <div className="grid grid-cols-4 gap-3 pt-3">
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
                </div>
                <div className="w-full">
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Home