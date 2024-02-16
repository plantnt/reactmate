import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { Layers, MessagesSquare } from "lucide-react"
import { FaStar } from "react-icons/fa";

export default function SubpageSelect(){  
    return(
        <>
            <DropdownButton className="max-w-[120px] 
                            bg-furniorange p-2 pl-2 
                            text-black font-bold rounded-lg" title="Catalogo">
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
            </DropdownButton>
        </>
    )
    
}