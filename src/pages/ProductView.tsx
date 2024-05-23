import { NavLink, useParams } from "react-router-dom";
import { supabase } from "../utils/Utils";
import { useEffect, useState } from "react";

import { Rate } from "antd";

import Separator from "../components/UI/separator";
import BuyProduct from "../components/UI/BuyProduct";

import feli from '../assets/feli.jpg'
import productsrc from '../assets/products/2.jpg'


export default function ProductView(){
  const { productId } = useParams()
  
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Fetch products where user_id matches the provided userId
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', productId);

        if (error) {
          console.error('Error fetching data:', error.message);
          return;
        }

        if (data) {
          setProductData(data);
        } else {
            console.error('No data found for the specified product ID.');
        }
    } catch (error) {
        console.error('Error in fetchProductData:', error);
    }
};

fetchProductData();
}, [productId]);

console.log(productData)
  return(
        <div className="flex flex-col h-full items-center p-6">
          <BuyProduct/>
          <div className="grid md:flex md:justify-center sm:justify-center md:flex-wrap md:space-y-6 sm:space-y-6 space-y-0 relative w-full p-4">
            <img src={productData.image || productsrc} className="w-[500px] h-[500px] border-4 border-violet-400 rounded-md" />
            <div className="flex flex-col lg:ml-6 md:ml-0 relative w-[400px]">
              <div className="flex w-full justify-between">
                <h3>Publicado por</h3>
                <div className="flex space-x-3">
                  <p>Juanca Lopez</p>
                  <NavLink to="/ProfilePageView">
                    <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden border-2 hover:border-furniorange transition-colors">
                      <img src={feli} className="w-full h-full hover:scale-110 transition-transform"/>
                    </div>
                  </NavLink>
                </div>
              </div>
              <h2 className="text-xl font-semibold">{productData.title || 'Sofá gris de sala'}</h2>
              <div className="flex  items-center space-x-3 mb-2">
                <Rate allowHalf disabled value={4} className="text-violet-400 text-sm" />
                <p className="text-xs">0 Votos</p>
              </div>
              <h1 className="text-3xl font-semibold mb-3">$ {productData.price || '120,000' }</h1>
              <Separator />
              <h2 className="font-semibold mt-3">Categorías</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Mueble de sala</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Mueble familiar</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Mueble de madera</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Tela</p>
                <p className="w-fit rounded-xl p-2 border shadow hover:cursor-pointer hover:text-violet-500 transition-colors">Mueble nuevo</p>
              </div>
              <h2 className="font-semibold mt-3">Colores</h2>
              <div className="flex flex-wrap gap-1 w-full mt-1">
                <div className="w-[40px] h-[40px] border p-[2.5px] rounded-sm hover:cursor-pointer">
                  <div className="w-full h-full bg-[#797979] rounded-sm"/>
                </div>
                <div className="w-[40px] h-[40px] border p-[2.5px] rounded-sm hover:cursor-pointer">
                  <div className="w-full h-full bg-[#6b83a2] rounded-sm"/>
                </div>
                <div className="w-[40px] h-[40px] border p-[2.5px] rounded-sm hover:cursor-pointer">
                  <div className="w-full h-full bg-[#235248] rounded-sm"/>
                </div>
                <div className="w-[40px] h-[40px] border p-[2.5px] rounded-sm hover:cursor-pointer">
                  <div className="w-full h-full bg-[#557c6f] rounded-sm border"/>
                </div>
              </div>
            </div>
          </div>
          <Separator />
            <div className="lg:w-[950px] w-[500px] mt-4">
               <h2 className="text-xl font-bold mb-3">Descripción</h2>
               <p className="ml-4 text-justify leading-8">
                    Transforma tu sala de estar con este elegante y moderno sofá de sala gris, diseñado para ofrecer confort y estilo a tu hogar. Con su tonalidad neutra, este sofá se adapta fácilmente a cualquier decoración, mientras que las almohadas verdes añaden un toque fresco y vibrante.
                    <br/><b>Dimensiones</b>:<br/>
                        Largo: 220 cm (87 pulgadas)<br/>
                        Ancho: 90 cm (35 pulgadas)<br/>
                        Alto: 85 cm (33 pulgadas)<br/>
                        Altura del asiento: 45 cm (18 pulgadas)<br/>
                        Profundidad del asiento: 60 cm (24 pulgadas)<br/>

                    <b>Materiales:</b><br/>
                        Tapizado: El sofá está tapizado con una tela de poliéster gris de alta calidad, conocida por su durabilidad y resistencia a las manchas, ideal para el uso diario.<br/>
                        Estructura: La estructura interna está hecha de madera maciza de pino, asegurando una base fuerte y estable que soportará el paso del tiempo.<br/>
                        Relleno: Los cojines del asiento y del respaldo están rellenos de espuma de alta densidad, proporcionando un equilibrio perfecto entre soporte y comodidad.<br/>
                        Patas: Las patas del sofá están hechas de madera de haya con un acabado natural, complementando el diseño moderno del sofá.<br/>
                        Almohadas: Viene con cuatro almohadas decorativas en color verde esmeralda, hechas de tela de lino suave y rellenas con fibra de poliéster para una sensación de lujo y confort.<br/>

                <b>Características Adicionales</b>:<br/>

                    Diseño Moderno: Las líneas limpias y la silueta contemporánea hacen de este sofá una pieza central atractiva en cualquier sala de estar.<br/>
                    Fácil Mantenimiento: La tela de poliéster es fácil de limpiar con un paño húmedo, y las fundas de las almohadas son removibles y lavables.<br/>
                    Montaje Sencillo: Requiere un montaje mínimo; incluye instrucciones y herramientas para ensamblar las patas.<br/>

                <b>Beneficios</b>:<br/>

                    Confort Superior: La combinación de espuma de alta densidad y tela suave garantiza un asiento cómodo y relajante.<br/>
                    Versatilidad de Estilo: El color gris neutro permite que el sofá se integre sin esfuerzo en diversos estilos de decoración, mientras que las almohadas verdes aportan un toque de color.<br/>
                    Durabilidad: Construido con materiales de alta calidad, este sofá está diseñado para durar, ofreciendo un excelente retorno de inversión.<br/>
               </p>

               <Separator />
              
               <h2 className="text-xl font-semibold justify-center align-center mt-10 text-center">Reseñas</h2>
              
               <div className="bg-gray-100 rounded-3xl p-4 inline-flex flex-wrap gap-3 align-center border-2 border-purple-300 mt-4">
               <NavLink to="/ProfilePageView">
                    <div className="items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden border-2 hover:border-furniorange transition-colors">
                      <img src={feli} className="w-full h-full hover:scale-110 transition-transform"/>
                    </div>
                    </NavLink>
                 <p className="font-semibold">Nombre de usuario</p>
               <Rate allowHalf disabled value={4} className="text-violet-400 text-sm bg-purple-200 rounded-full px-2 " />
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem accusamus fugit mollitia odit. Numquam asperiores, illum quaerat, perferendis ea, blanditiis voluptatibus placeat at dolor corporis ipsum ducimus laudantium veniam?
               Distinctio esse nulla itaque rerum perferendis</p>
               </div>

               <div className="bg-gray-100 rounded-3xl p-4 inline-flex flex-wrap gap-3 align-center border-2 border-purple-300 mt-4">
               <NavLink to="/ProfilePageView">
                    <div className="items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden border-2 hover:border-furniorange transition-colors">
                      <img src={feli} className="w-full h-full hover:scale-110 transition-transform"/>
                    </div>
                    </NavLink>
                 <p className="font-semibold">Nombre de usuario</p>
               <Rate allowHalf disabled value={3} className="text-violet-400 text-sm bg-purple-200 rounded-full px-2" />
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem accusamus fugit mollitia odit. Numquam asperiores, illum quaerat, perferendis ea, blanditiis voluptatibus placeat at dolor corporis ipsum ducimus laudantium veniam?
               Distinctio esse nulla itaque rerum perferendis</p>
               </div>

               <div className="bg-gray-100 rounded-3xl p-4 inline-flex flex-wrap gap-3 align-center border-2 border-purple-300 mt-4">
               <NavLink to="/ProfilePageView">
                    <div className="items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden border-2 hover:border-furniorange transition-colors">
                      <img src={feli} className="w-full h-full hover:scale-110 transition-transform"/>
                    </div>
                    </NavLink>
                 <p className="font-semibold">Nombre de usuario</p>
                 <Rate allowHalf disabled value={2} className="flex align-center text-violet-400 text-sm bg-purple-200 rounded-full px-2 w-min" />
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem accusamus fugit mollitia odit. Numquam asperiores, illum quaerat, perferendis ea, blanditiis voluptatibus placeat at dolor corporis ipsum ducimus laudantium veniam?
               Distinctio esse nulla itaque rerum perferendis</p>
               </div>
               
            </div>
        </div>
        
    )
}

/*ALGUIEN QUE ALINEE ESAS ESTRELLAS POR DIOS (gracias :>)*/