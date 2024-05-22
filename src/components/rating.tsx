import { useState } from "react"

import { Rate } from "antd";

export default function Rating(){

    //Evitar letras en los inputs
    const [value, setValue] = useState('')
    const handleChange = (event: { target: { value: string } }) => {
        const result = event.target.value.replace(/\D/g, '')
        setValue(result)
    }
    const [value2, setValue2] = useState('')
    const handleChange2 = (event: { target: { value: string } }) => {
        const result2 = event.target.value.replace(/\D/g, '')
        setValue2(result2)
    }

    
    return(
        <>
            <div className="flex ml-3">
                <div className="flex items-center">
                    Precio: 
                    <input type="text" value={value} onChange={handleChange} className="border-[1.6px] border-slate-300 rounded-sm w-[54px] h-[1.2em] mx-1 outline-none pb-[1px] text-slate-700" placeholder="Min."/>
                    <span className="block w-[8px] h-[5px] bg-slate-300"></span>
                    
                    <input type="text" value={value2} onChange={handleChange2} className="border-[1.6px] border-slate-300 rounded-sm w-[54px] h-[1.2em] mx-1 outline-none pb-[1px] text-slate-700" placeholder="Max."/>
                </div>
                <div className="flex items-center ml-10 text-slate-700">
                    Calificación:
                    <Rate allowHalf onChange={() => console.log("hoal")} className="mt-[5px] ml-2 text-violet-400 text-sm" />
                    
                </div>
            </div>
        </>
    )
}