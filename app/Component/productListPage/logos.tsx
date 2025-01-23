import React from 'react'
import Image from "next/image"
function Logos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 bg-Primary md:px-9 justify-items-center items-center md:p-3">
        <div className="transition-transform hover:scale-105 duration-300">
            <Image src={"https://res.cloudinary.com/dd4xvwf8d/image/upload/v1737631522/303d910d-c591-4849-8d52-652d01f338ce-removebg-preview_wj5nnx.png"} alt="logo 1" height={240} width={340}/>
        </div>
        <div className="transition-transform hover:scale-105 duration-300">
            <Image src={"https://res.cloudinary.com/dd4xvwf8d/image/upload/v1737632689/Lovely_Perfume-removebg-preview_golmau.png"} alt="logo 1" height={90} width={230}/>
        </div>
        <div className="transition-transform hover:scale-105 duration-300">
            <Image src={"https://res.cloudinary.com/dd4xvwf8d/image/upload/v1737632839/logotipo_do_perfume_ilustra%C3%A7%C3%A3o_vetorial_design_de_s%C3%ADmbolo-removebg-preview_dl6p9g.png"} alt="logo 1" height={35} width={160}/>
        </div>
        <div className="transition-transform hover:scale-105 duration-300">
            <Image src={"https://res.cloudinary.com/dd4xvwf8d/image/upload/v1737632167/Relojes_Bulova_OpinionesHistoria_y_10_Mejores_Relojes-_Marefinos-removebg-preview_ds7eeb.png"} alt="logo 1" height={25} width={130}/>
        </div>
        <div className="transition-transform hover:scale-105 duration-300">
            <Image src={"https://res.cloudinary.com/dd4xvwf8d/image/upload/v1737631726/Simple_Classic_Watch_Logo_Illustration_Afbeelding_door_Alpha_Std___Creative_Fabrica-removebg-preview_x0psm8.png"} alt="logo 1" height={125} width={230}/>
        </div>
        <div className="transition-transform hover:scale-105 duration-300">
            <Image src={"https://res.cloudinary.com/dd4xvwf8d/image/upload/v1737632295/Rolex_Logo_The_Complete_History-_Millenary_Watches-removebg-preview_kgdnff.png"} alt="logo 1" height={25} width={130}/>
        </div>
       </div>

  )
}

export default Logos