import { ColorPicker } from "antd"

import { Plus } from "lucide-react"
import { useState } from "react"
import { IoIosCloseCircle } from "react-icons/io"

const ColorPick = () => {
    const [colorCount, setColorCount] = useState(0)
    

    return(
        <div className="flex space-x-2 items-start">
            <ColorPicker defaultValue="#fff" disabledAlpha/>
            {colorCount >= 1 ? (
                <>
                    <div className="group flex flex-col items-center relative">
                        <ColorPicker defaultValue="#fff" disabledAlpha/>
                        <IoIosCloseCircle className="relative opacity-0 group-hover:opacity-100  transition-all hover:cursor-pointer text-slate-500 hover:text-red-500"
                                        title="Eliminar" 
                                        onClick={() => setColorCount(colorCount - 1)}/>
                    </div>
                    {colorCount >= 2 ? (
                        <>
                            <div className="group flex flex-col items-center relative">
                                <ColorPicker defaultValue="#fff" disabledAlpha/>
                                <IoIosCloseCircle className="relative opacity-0 group-hover:opacity-100  transition-all hover:cursor-pointer text-slate-500 hover:text-red-500"
                                        title="Eliminar"
                                        onClick={() => setColorCount(colorCount - 1)}/>
                            </div>
                            {colorCount >= 3 ? (
                        <>
                            <div className="group flex flex-col items-center relative">
                                <ColorPicker defaultValue="#fff" disabledAlpha/>
                                <IoIosCloseCircle className="relative opacity-0 group-hover:opacity-100  transition-all hover:cursor-pointer text-slate-500 hover:text-red-500"
                                                title="Eliminar"
                                                onClick={() => setColorCount(colorCount - 1)}/>
                            </div>
                            {colorCount >= 4 ? (
                        <>
                            <div className="group flex flex-col items-center relative">
                                <ColorPicker defaultValue="#fff" disabledAlpha/>
                                <IoIosCloseCircle className="relative opacity-0 group-hover:opacity-100  transition-all hover:cursor-pointer text-slate-500 hover:text-red-500"
                                                title="Eliminar"
                                                onClick={() => setColorCount(colorCount - 1)}/>
                            </div>
                            {colorCount >= 5 ? (
                        <>
                            <div className="group flex flex-col items-center relative">
                                <ColorPicker defaultValue="#fff" disabledAlpha/>
                                <IoIosCloseCircle className="relative opacity-0 group-hover:opacity-100  transition-all hover:cursor-pointer text-slate-500 hover:text-red-500"
                                                title="Eliminar"
                                                onClick={() => setColorCount(colorCount - 1)}/>
                            </div>
                        </>
                    ):(
                        <>
                            <div className='flex items-center justify-center h-[32px] w-[32px] text-slate-400 rounded-md border border-slate-400 hover:border-furniorange hover:text-furniorange hover:cursor-pointer transition-all overflow-hidden'
                                onClick={() => setColorCount(colorCount + 1)}>
                                <Plus />
                            </div>
                        </>
                    )}
                        </>
                    ):(
                        <>
                            <div className='flex items-center justify-center h-[32px] w-[32px] text-slate-400 rounded-md border border-slate-400 hover:border-furniorange hover:text-furniorange hover:cursor-pointer transition-all overflow-hidden'
                                onClick={() => setColorCount(colorCount + 1)}>
                                <Plus />
                            </div>
                        </>
                    )}
                        </>
                    ):(
                        <>
                            <div className='flex items-center justify-center h-[32px] w-[32px] text-slate-400 rounded-md border border-slate-400 hover:border-furniorange hover:text-furniorange hover:cursor-pointer transition-all overflow-hidden'
                                onClick={() => setColorCount(colorCount + 1)}>
                                <Plus />
                            </div>
                        </>
                    )}
                        </>
                    ):(
                        <>
                            <div className='flex items-center justify-center h-[32px] w-[32px] text-slate-400 rounded-md border border-slate-400 hover:border-furniorange hover:text-furniorange hover:cursor-pointer transition-all overflow-hidden'
                                onClick={() => setColorCount(colorCount + 1)}>
                                <Plus />
                            </div>
                        </>
                    )}
                </>
            ) : (
                <>
                    <div className='flex items-center justify-center h-[32px] w-[32px] text-slate-400 rounded-md border border-slate-400 hover:border-furniorange hover:text-furniorange hover:cursor-pointer transition-all overflow-hidden'
                        onClick={() => setColorCount(colorCount + 1)}>
                        <Plus />
                    </div>
                </>
            )}
        </div>
    )
}

export default ColorPick