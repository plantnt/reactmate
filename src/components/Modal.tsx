import { IoIosClose } from "react-icons/io";
import ImageCrop from "./ImageCropper";

interface ModalProps {
  closeModal: () => void,
  updateAvatar: () => void
}

const Modal: React.FC<ModalProps> = ({ updateAvatar, closeModal}) => { //ignorar error
  return(
    <div className="relative z-10 cursor-auto" aria-labelledby="crop-image-dialog" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-all">
        <div className="inset-0 z-10 overflow-y-auto">
          <div className="flex justify-center px-2 py-12 text-center">
            <div className="flex items-center justify-center relative rounded-xl shadow-lg bg-white w-[500px] h-[500px]">
              <IoIosClose className="absolute top-0 right-0 text-slate-500 hover:scale-105 hover:text-red-600 cursor-pointer transition-all" size={30} 
              onClick={closeModal}/>
              <ImageCrop updateAvatar={updateAvatar} closeModal={closeModal}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
