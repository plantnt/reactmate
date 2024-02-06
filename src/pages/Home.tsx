import ProductCard from "../components/productCard"
import Filters from "../components/filters"
import Footer from "../components/UI/footer"

const Home = () => {
    return(
        <div className="h-full overflow-x-hidden">
            <div className="flex flex-row justify-center">
                <div className="absolute left-0">
                    <Filters></Filters>
                </div>
                <div className="flex flex-wrap justify-center max-w-[700px] p-2">
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>
            </div>
            <div className="w-full">
                <Footer />                
            </div>

        </div>
    )
}

export default Home