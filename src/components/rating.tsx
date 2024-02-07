export default function Rating(){
    return(
        <div>
            <label htmlFor="" className="flex items-center">
                Precio: 
                <input type="text" className="border-2 border-slate-300 w-[54px] h-[1.2em] mx-1 outline-none" placeholder="Min."/>
                <span className="block w-[8px] h-[5px] bg-slate-300"></span>
                <input type="text" className="border-2 border-slate-300 w-[54px] h-[1.2em] mx-1 outline-none" placeholder="Max."/>
            </label>
        </div>
    )
}