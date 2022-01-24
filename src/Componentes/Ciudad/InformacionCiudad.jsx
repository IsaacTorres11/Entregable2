import React from 'react'

//Imagenes
import sol from '../../Img/sol.jpg'
import nublado from '../../Img/nublado.jpg'
import frio from '../../Img/nublado.jpg'

const InformacionCiudad = ({ciudad,grados}) => {
    const centigrados = (grados - 272.15).toFixed(2)
    console.log(centigrados);
    return (
        <div className='tarjetaPais'>
            <h2>Ciudad: {ciudad}</h2>
            <h2>Grados Centigrados: {centigrados}</h2>
            
            {/* Usamos un renderizado condicional anidado */}
            {
                centigrados > 20 ?(
                    <div className='iconoClima'> <img src={sol} alt='sol'/> </div>
                ) : (
                    centigrados < 19 ? (
                        <div className='iconoClima'> <img src={nublado} alt='numblado'/> </div>
                    ) : (
                        centigrados < 14 ? (
                            <div className='iconoClima'> <img src={frio} alt='frio'/> </div>
                        ) : (
                            <p>No esta la opcion</p>
                        )
                    )
                )
            } 
            {/* Se termina el renderizado condicional anidado */}

        </div>
    )
}

export default InformacionCiudad
