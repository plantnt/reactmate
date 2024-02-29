import { BiAddToQueue } from "react-icons/bi";
function AddProduct2(){
  location.href="#"
}

export default function AddProduct(){
  
  return(
    <>
    

<button className="
      fixed top-[80vh] right-[40px]
      w-[70px] h-[70px]
      bg-furnipurple
      hover:bg-violet-800
      ease-in-out duration-1000
      rounded-full  
      p-2 flex justify-center items-center text-white
      " 
      onClick={AddProduct2}
      > 
        <BiAddToQueue size={35} />
      </button>

    </>
  )
}