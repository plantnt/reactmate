import { useState } from "react";
import { IoMdImage, IoIosClose } from "react-icons/io";

const Modal = ({onClose}) => {
  return(
    <>
      <div className="flex items-center justify-center relative bg-white z-[9999] inset-0 w-[500px] h-[500px]">
        <IoIosClose className="" onClick={onClose}/>
      </div>
    </>
  )
}

export default function ProfilePicHandler() {
  const [openModal, setOpenModal] = useState(false)

  const handleShowModal = () =>{
    setOpenModal(true)
  }

  const handleCloseModal = () =>{
    setOpenModal(false)
  }

  return(
    <>
      {!openModal ? 
        <>
          <IoMdImage size={30} className="text-violet-500 hover:scale-105 transition-transform"
          onClick={handleShowModal} />
          <p className="select-none text-center text-wrap text-[0.9em] text-violet-500">
            Elegir imagen
          </p>
        </>
      : <Modal onClose={handleCloseModal}/>}
    </>
  )
}
