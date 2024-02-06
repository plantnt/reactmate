import ProductCard from "../components/productCard"
import Filters from "../components/filters"
import Footer from "../components/UI/footer"

const Home = () => {
    return(
        <div className="flex flex-row justify-center h-full">
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
            <div className="fixed bottom-0">
                <Footer />
            </div>
                
        </div>
    )
}

export default Home