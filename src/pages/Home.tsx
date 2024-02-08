import ProductCard from "../components/productCard"
import Filters from "../components/filters"
import Footer from "../components/UI/footer"
import Rating from "../components/rating"

const Home = () => {
    return(
        <>
            <div className="h-full w-full flex flex-col items-center">
                <div className="absolute left-0">
                    <Filters/>
                </div>
                <div className="min-h-full">
                    <div className="mt-3">
                        <Rating/>
                    </div>
                    <div className="flex flex-wrap max-w-[700px] pt-3">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
                <div className="w-full relative tv:fixed tv:bottom-0">
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Home