import ProductCard from "../components/productCard"
import Filters from "../components/filters"

const Home = () => {
    return(
        <div className="flex flex-row justify-center">
            <div className="absolute left-0">
                <Filters></Filters>
            </div>
            <div className="flex space-x-4 max-w-[700px] p-2">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    )
}

export default Home