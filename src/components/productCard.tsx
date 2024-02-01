import prod1 from "../assets/products/1.jpg"

export default function ProductCard(){
    return(
        <div className="max-w-[200px] rounded-xl border border-slate-200">
            <img src={prod1} className="w-full" />
            <div>
                <h2 className="font-black">Titulo</h2>
                <h4 className="font-bold">$9999</h4>
            </div>
        </div>
    )
}