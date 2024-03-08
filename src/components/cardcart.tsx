import { NavLink } from "react-router-dom"

function Cardproduct(){
    return(
        <div className="max-w-[200px] rounded-xl border border-slate-200 cursor-pointer hover:transform">
        <NavLink to="/productPage"><img src="src\assets\products\2.jpg" className="w-full rounded-t-xl" /></NavLink>
        
    </div> 
     
    )
}
function Infocart(){
    return(<div className="p-4 flex">
            <h2 className="font-black ml-15px">Titulo</h2>
            <h4 className="font-bold ml-14">$9999</h4>
        </div>)
    
}
function Complementocart(){
    return(
        <div className="">hola</div>
    )
}
export default function Cardcart(){
    return(
        <>
        <div className="card border-4 rounded-r-3xl rounded-l-3xl w-7/12 p-4 m-2 flex">
            <Cardproduct/>
            <Infocart/> 
            <Complementocart/>
        </div>
        </>
    )
}