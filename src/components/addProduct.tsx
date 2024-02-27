import { BiAddToQueue } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { Layers } from "lucide-react"

export default function AddProduct(){
  return(

    <div className="dropdown">
                  <button className=" 
                  link 
                  flex 
                  items-center 
                  bg-furniorange 
                  p-2 
                  w-[50px] 
                  rounded-full 
                  font-semibold 
                  text-white 
                  transition-allrelative">
                      <BiAddToQueue size={30}/> 
                      </button>

                  <div className="dropdown-menu">
                    <button className="dropdown-foro 
                    transition-all
                    flex
                    items-center
                    p-2 
                    mt-1 
                    w-[50px] 
                    rounded-full
                    font-semibold
                    text-white ">
                      <CgAdd size={30} className='mr-2'/> 
                    </button>
                    
                    <button className="dropdown-deseados
                    flex
                    items-center
                    p-2 
                    mt-1 
                    w-[50px] 
                    rounded-full
                    text-white ">
                      <Layers size={30} className='mr-2'/>
                    </button>
                 </div>
                 </div>

  )
}