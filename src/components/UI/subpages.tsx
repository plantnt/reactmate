import { SetStateAction, useState } from "react";

export default function SubpageSelect(){
    const CustomSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select an option');
    
    const options = ['Option 1', 'Option 2', 'Option 3'];
    
    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };
    
    const selectOption = (value: SetStateAction<string>) => {
        setSelectedOption(value);
        toggleOptions();
    };
    
    return(
            <>
                <div id="subpage-selector" onClick={toggleOptions} className="flex items-center max-w-[120px] bg-furniorange p-2 pl-2 text-white font-bold rounded-lg cursor-pointer select-none">
                    {selectedOption}
                </div>
                {isOpen && (
                    <div className="options">
                        {options.map((option, index) => (
                            <div className="option" key={index} onClick={() => selectOption(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </>
        )
    }
}