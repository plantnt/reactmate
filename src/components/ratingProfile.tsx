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

    
    return (
        <>
            <div className="flex ml-3">
                <div className="flex items-center ml-10 text-slate-700">
                    Calificación promedio:
                    <Rate allowHalf disabled value={value} onChange={handleChange} className="mt-[5px] ml-2 text-violet-400 text-sm" />
                </div>
            </div>
        </>
        )

}

//El propio usuario no podrá calificarse a si mismo por lo que manipular este botón está restringido