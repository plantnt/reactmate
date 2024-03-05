import { Instagram } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Footer(){
    return(
        <>
            <div id="FooterMain" className="bg-[#f2f1f5] mt-10 pb-5">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex justify-evenly w-full">
                    <div className="md:w-[50%] pt-5">
                        <div className="text-lg font-semibold text-[#282828]">Ayuda</div>
                        <div className="text-[#222] text-sm">
                            <NavLink to="helpPage">Reportar problemas</NavLink>
                        </div>
                    </div>
                    <div className="md:w-[50%] pt-6 ">
                        <a href="https://www.instagram.com/furnimate_zw/?hl=en" target="_blank">
                        <Instagram size={20}/>
                            @furnimate_zw
                        </a>
                    </div>
                </div>
            </div>
            </div>
            <div id="FooterSub" className="w-full bg-[#000000] text-sm text-gray-400 flex ">
            <div className="max-w-[1200px] mx-auto p-4 font-bold font-extrawide">
                &copy; ZEROWARE - furnimate. 2024
            </div>
            </div>
        </>
    )
}