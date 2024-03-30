import ReactCrop, { centerCrop, makeAspectCrop, type Crop }  from 'react-image-crop'
import { useState } from "react";

import { IoIosClose } from "react-icons/io";

const aspect_ratio = 1
const min_widht = 150

const ImageCrop = () => {
  const [avatarPic, setAvatarPic] = useState('')
  const [crop, setCrop] = useState<Crop>()

  const handleAvatarPic = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if(file){
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            const imageUrl = reader.result?.toString() || ""
            setAvatarPic(imageUrl)
        })
        reader.readAsDataURL(file)
    } else return
  }

  const imageLoaded = (e) => {
    const {width, height} = e.currentTarget

    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: "px",
          width: min_widht
        },
        aspect_ratio,
        width,
        height
      ),
      width,
      height
    )
    setCrop(crop)
  }
  return(
    <div className='flex flex-col'>
      <label className="m-3 w-fit">
        <input type="file" accept="image/jpg, image/png, image/jpeg" 
          onChange={handleAvatarPic}
          className="block text-wrap max-w-[300px] text-sm 
          text-slate-500 file:mr-4 file:py-1 file:px-2 
          file:rounded-full file:border-0 file:text-xs 
          file:bg-furniorange file:text-white hover:file:bg-[#d66154] 
          cursor-pointer"/>
      </label>
      {avatarPic && 
      <div className="flex flex-col items-center p-4">
        <ReactCrop
          crop={crop}
          onChange={c => setCrop(c)}
          circularCrop
          keepSelection
          aspect={aspect_ratio}
          minWidth={min_widht}>
            <img src={avatarPic} style={{maxHeight: "50vh"}} onLoad={imageLoaded}/>
          </ReactCrop>
      </div>}
    </div>
  )
}

const Modal = ({onClose}) => { //ignorar error
  return(
    <div className="relative z-10 cursor-auto" aria-labelledby="crop-image-dialog" role="dialog" aria-modal="true">
      <div className="fixed inset-0 transition-all">
        <div className="inset-0 z-10 overflow-y-auto">
          <div className="flex justify-center px-2 py-12 text-center">
            <div className="flex items-center justify-center relative rounded-xl shadow-lg bg-white w-[500px] h-[500px]">
              <IoIosClose className="absolute top-0 right-0 text-slate-500 hover:scale-105 hover:text-red-600 cursor-pointer transition-all" size={30} onClick={onClose}/>
              <ImageCrop />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
