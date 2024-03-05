import Cardcart from "../components/cardcart"
import Navbar from "../components/UI/navbar.tsx"

const Cart = () => {
    return(
        <>
        <Navbar></Navbar>
        <div className="">
            <Cardcart/>
        </div>
        </>
        
    )
}

export default Cart