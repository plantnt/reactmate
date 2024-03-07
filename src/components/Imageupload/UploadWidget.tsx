import { useEffect, useState } from 'react';

import { Plus } from 'lucide-react';
import { LuUpload } from "react-icons/lu";

const Upload = () => {
    const cloudName = import.meta.env.VITE_CLOUD_NAME;          //Variables de sistema
    const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

    const [loaded, setLoaded] = useState(false);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const uwScript = document.getElementById('uw');
        if (!loaded && !uwScript) {
        const script = document.createElement('script');
        script.setAttribute('async', '');
        script.setAttribute('id', 'uw');
        script.src = 'https://upload-widget.cloudinary.com/global/all.js';
        script.addEventListener('load', () => setLoaded(true));
        document.body.appendChild(script);
        }
    }, [loaded]);

    const processResults = (error:any, result:any) => {
        if (result.event === 'close') {
        setIsDisabled(false);
        }
        if (result && result.event === 'success') {
        const secureUrl = result.info.secure_url;
        const previewUrl = secureUrl.replace(
            '/upload/',
            '/upload/w_400/f_auto,q_auto/'
        );
        setUploadedImages((prevImages) => [...prevImages, previewUrl]);
        setIsDisabled(false);
        }
        if (error) {
        setIsDisabled(false);
        }
    };

    const uploadWidget = () => {
        setIsDisabled(true);
        window.cloudinary.openUploadWidget(
        {
            cloudName,
            uploadPreset,
            sources: ['local', 'url'],
            tags: ['myphotoalbum-react'],
            clientAllowedFormats: ['image'],
            resourceType: 'image',
            multiple: false
        },
        processResults
        );
    };
    
  return (
    <div className='flex flex-col space-y-4'>
        <div className='flex items-center justify-center w-auto max-w-[500px] h-auto border-[3px] border-violet-400 rounded-xl relative overflow-y-hidden'>
            <div className="flex items-center justify-center w-full h-full cursor-pointer hover:scale-110 transition-all">
                {uploadedImages.length < 1 && (
                    <button
                    onClick={uploadWidget}
                    disabled={isDisabled}
                    className="flex flex-col justify-center items-center p-3 rounded-md hover:opacity-80 transition-opacity z-10"
                    type="button"
                    >
                        <LuUpload size={30} className='text-violet-400'/>
                        <p className='hidden md:block'>
                            {isDisabled ? 'Subiendo archivo' : 'Subir archivo'}
                        </p>
                    </button>
                )}
                
                {uploadedImages.length !== 0 && (
                    <>
                    {uploadedImages.map((uploadedImage, idx) => (
                        <img
                        key={idx}
                        className=""
                        src={uploadedImage}
                        alt="uploaded image"
                        />
                        
                        ))}
                    </>
                )}
            </div>
        </div>
        {uploadedImages.length == 1 && (
            <div className='flex gap-2 flex-wrap'>
                <button className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 transition-opacity'
                        type='button'>
                    <Plus className='group-hover:scale-150 transition-all'/>
                </button>
                <button className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 transition-opacity'
                        type='button'>
                    <Plus className='group-hover:scale-150 transition-all'/>
                </button>
                <button className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 transition-opacity'
                        type='button'>
                    <Plus className='group-hover:scale-150 transition-all'/>
                </button>
                <button className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 transition-opacity'
                        type='button'>
                    <Plus className='group-hover:scale-150 transition-all'/>
                </button>
                <button className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 transition-opacity'
                        type='button'>
                    <Plus className='group-hover:scale-150 transition-all'/>
                </button>
                <button className='group flex items-center justify-center h-[120px] w-[32%] text-slate-400 rounded-md border-2 border-slate-400 hover:opacity-50 transition-opacity'
                        type='button'>
                    <Plus className='group-hover:scale-150 transition-all'/>
                </button>
            </div>
        )}
    </div>
  );
};

export default Upload;
