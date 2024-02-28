import { BiAddToQueue } from "react-icons/bi";
function AddProduct2(){
  location.href="login "
}

export default function AddProduct(){
  
  return(
    <>
    

    <button className="
      fixed top-[80vh] right-[40px]
      w-[70px] h-[70px]
      bg-furnipurple
      hover:bg-violet-700
      ease-in-out duration-500
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