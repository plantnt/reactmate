import ReactCrop, { centerCrop, makeAspectCrop, type Crop, convertToPixelCrop }  from 'react-image-crop'
import { useRef, useState } from "react";

import setCanvasPreview from "../components/setCanvasPreview";

interface ImageCropProps{
    closeModal: () => void
    updateAvatar: () => void
}

const aspect_ratio = 1
const min_widht = 150

const ImageCrop: React.FC<ImageCropProps> = ({closeModal, updateAvatar}) => {
    const imgRef = useRef(null) 
    const previewCanvasRef = useRef(null)
    const [avatarSrc, setAvatarSrc] = useState('')
    const [crop, setCrop] = useState<Crop>()
    const [error, setError] = useState("")
  
    const handleAvatarSrc = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if(file){
          const reader = new FileReader()
          reader.addEventListener("load", () => {
            const ImageElement = new Image()
            const imageUrl = reader.result?.toString() || ""
            ImageElement.src = imageUrl
  
            ImageElement.addEventListener("load", (e) => {
              if(error) setError("") 
              const {naturalHeight, naturalWidth} = e.currentTarget //ignore
              if(naturalHeight < min_widht || naturalWidth < min_widht){
                setError("La imagen debe tener por lo menos 150 x 150 pixeles") 
                return setAvatarSrc("")
    
              } 
            })
            setAvatarSrc(imageUrl)
          })
          reader.readAsDataURL(file)
      } else return
    }
  
    const imageLoaded = (e: { currentTarget: { width: any; height: any; naturalHeight:any; naturalWidth:any }; }) => {
      const {width, height } = e.currentTarget
  
      const crop = centerCrop(
        makeAspectCrop(
          {
            unit: "%",
            width: 100
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
      <div className='flex flex-col items-center'>
        <label className="m-3 w-fit">
          <input type="file" accept="image/jpg, image/png, image/jpeg" 
            onChange={handleAvatarSrc}
            className="block text-wrap max-w-[300px] text-sm 
            text-slate-500 file:mr-4 file:py-1 file:px-2 
            file:rounded-full file:border-0 file:text-xs 
            file:bg-furniorange file:text-white hover:file:bg-[#d66154] 
            cursor-pointer"/>
        </label>
        {error && <p className='text-red-500 text-xs'>{error}</p>}
        {avatarSrc && (
        <>
          <div className="flex flex-col items-center p-4">
            <ReactCrop
              crop={crop}
              onChange={crop => setCrop(crop)} 
              circularCrop
              keepSelection
              aspect={aspect_ratio}
              minWidth={min_widht}>
                <img ref={imgRef} 
                     src={avatarSrc} 
                     style={{maxHeight: "50vh"}} 
                     onLoad={imageLoaded}/>
              </ReactCrop>
          </div>
          <button type='button' 
          className='bg-furniorange w-[100px] text-lg 
            rounded-full py-1 text-white 
            hover:bg-[#d66154] transition-all'
            onClick={() => {
                setCanvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    convertToPixelCrop(
                        crop,
                        imgRef.current.width,
                        imgRef.current.height
                    )
                )
                const dataUrl = previewCanvasRef.current.toDataUrl()
                updateAvatar(dataUrl)
                closeModal
            }}>
            Aceptar
          </button>
        </>
        )}
        {crop && (
            <canvas 
                ref={previewCanvasRef}
                className='mt-4'
                style={{
                    display: "none",
                    border: "1px solid black",
                    objectFit: "contain",
                    width: 150,
                    height: 150,
            }}/>
        )}
      </div>
    )
  }

export default ImageCrop