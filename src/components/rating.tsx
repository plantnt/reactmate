import { useState } from "react"

import { IconStar } from "@tabler/icons-react"
import { IconStarFilled } from "@tabler/icons-react"

export default function Rating(){
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
        <div className="flex">
            <div className="flex items-center">
                Precio: 
                <input type="text" value={value} onChange={handleChange} className="border-2 border-slate-300 w-[54px] h-[1.2em] mx-1 outline-none pb-[1px] text-slate-700" placeholder="Min."/>
                <span className="block w-[8px] h-[5px] bg-slate-300"></span>
                
                <input type="text" value={value2} onChange={handleChange2} className="border-2 border-slate-300 w-[54px] h-[1.2em] mx-1 outline-none pb-[1px] text-slate-700" placeholder="Max."/>
            </div>
            <div className="flex items-center ml-10">
                Calificación:

                <IconStar size={16} id="star1" className="ml-1 cursor-pointer text-slate-300 hover:text-gray-400 transition-all" />
                <IconStar size={16} id="star2" className="ml-1 cursor-pointer text-slate-300 hover:text-gray-400 transition-all" />
                <IconStar size={16} id="star3" className="ml-1 cursor-pointer text-slate-300 hover:text-gray-400 transition-all" />
                <IconStar size={16} id="star4" className="ml-1 cursor-pointer text-slate-300 hover:text-gray-400 transition-all" />
                <IconStar size={16} id="star5" className="ml-1 cursor-pointer text-slate-300 hover:text-gray-400 transition-all" />
            </div>
        </div>
    )
}