import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { FaCcMastercard } from "react-icons/fa";
import { SiVisa, SiNubank } from "react-icons/si";
import { useState } from "react";

const BuyProduct = () => {
    const [containerStyle, setContainerStyle] = useState({
        width: "300px",
        justifyContent: "center",
        top: "80px", // Ajuste de 100px desde el fondo
    });
    const [arrowStyle, setArrowStyle] = useState({
        open: { display: "initial" },
        close: { display: "none" },
    });
    const [actionsStyle, setActionsStyle] = useState({
        display: "none",
    });

    function handleShow() {
        console.log("show");
        setContainerStyle({
            width: "28%",
            justifyContent: "left",
            top: "80px", // Ajuste para mostrarlo en la parte inferior
        });
        setArrowStyle({
            open: { display: "none" },
            close: { display: "initial" },
        });
        setActionsStyle({ display: "initial" });
    }

    function handleHide() {
        console.log("hide");
        setContainerStyle({
            width: "60px",
            justifyContent: "center",
            top: "80px", // Ajuste de 100px desde el fondo
        });
        setArrowStyle({
            open: { display: "initial" },
            close: { display: "none" },
        });
        setActionsStyle({ display: "none" });
    }

    return (
        <>
            <div
                id="container"
                className="opacity-70 fixed flex items-center justify-left right-0 bottom-[0.1px] h-full border rounded-l-lg p-3 transition-all z-[99] overflow-hidden bg-[#E2D6FB]"
                style={containerStyle}
            >
                
                <IoMdArrowDropleft
                    size={40}
                    id="openArrow"
                    className="text-purple-600 text-xl hover:cursor-pointer z-[100]"
                    style={arrowStyle.open}
                    onClick={() => handleShow()}
                    
                />
                <IoMdArrowDropright
                    size={40}
                    id="closeArrow"
                    className="text-purple-600 text-xl hover:cursor-pointer z-[100]"
                    style={arrowStyle.close}
                    onClick={() => handleHide()}
                />
                
                <div id="actions" style={actionsStyle}>
                    <h1 className="flex font-black text-2xl -mb-4 text-violet-700 justify-center">
                        Factura del Carrito
                    </h1>
                    <div className="p-4">
                        <h1 className="font-bold text-lg pt-4 flex justify-center text-violet-500">
                            Metodo de pago
                        </h1>
                        <div className="flex space-x-5 justify-center">
                            <button className="text-violet-800 hover:text-violet-500 transition-all ease-in-out duration-300">
                                <FaCcMastercard size={40} />
                            </button>
                            <button className="text-violet-800 hover:text-violet-500 transition-all ease-in-out duration-300">
                                <SiVisa size={40} />
                            </button>
                            <button className="text-violet-800 hover:text-violet-500 transition-all ease-in-out duration-300">
                                <SiNubank size={40} />
                            </button>
                        </div>
                        <div className="grid justify-items-center">
                            <h1 className="font-bold text-lg mt-4">Numero de tarjeta</h1>
                            <input
                                type="number"
                                className="px-2 border-b-violet-700 border-b-2 focus:outline-none bg-[#E2D6FB] mb-2 bg-opacity-0"
                            />
                        </div>
                        <div className="flex space-x-4 justify-center mt-2">
                            <div className="grid justify-items-center space-y-2">
                                <h2 className="font-bold">Fecha de Expiracion</h2>
                                <input
                                    type="date"
                                    className="px-2 border-b-violet-700 border-b-2 focus:outline-none bg-[#E2D6FB] bg-opacity-0"
                                />
                            </div>
                            <div className="grid justify-items-center space-y-2">
                                <h2 className="font-bold">Codigo de Seguridad</h2>
                                <input
                                    type="number"
                                    className="px-2 border-b-violet-700 border-b-2 focus:outline-none bg-[#E2D6FB] bg-opacity-0"
                                />
                            </div>
                        </div>
                        <div className="mt-5 font-semibold text-white">
                            <button className="flex items-center justify-center bg-violet-600 hover:bg-violet-800 px-4 p-2 rounded-full w-full transition-all ease-in-out duration-500">
                                <MdAttachMoney size={25} />
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuyProduct;
