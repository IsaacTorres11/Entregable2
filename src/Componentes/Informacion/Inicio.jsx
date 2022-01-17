import React, {useState} from 'react'

// Componentes 
import Formulario from '../Formulario/Formulario'
import Loarder from '../Cargando/Loarder'
import InformacionCiudad from '../Ciudad/InformacionCiudad'


const Inicio = () => {
    // State
    const [city, setCity] = useState ('')
    const [cityInformation, setCityInformation] = useState (null)
    const [loader, setLoader] = useState (false)

    // Funciones 
    const handleCity =({value})=>{
        setCity(value)  
    }
    const heandleSearchWeather = async (e) =>{
        e.preventDefault()
        setCityInformation(null)
        setLoader(true)
        const key ='d8c370645d30d5157df9e2b02e58a846'
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        const repsonse = await fetch (API)
        const responseJson = await repsonse.json()
        setCityInformation(responseJson)
        console.log(responseJson);
        setLoader(false)
    } 

    return (
        <div className='contenedor'>
            <Formulario 
            handleCity ={handleCity}
            city = {city}
            heandleSearchWeather = {heandleSearchWeather}
            />
            {
                loader && <Loarder/>
            }

            {
                cityInformation && <InformacionCiudad 
                ciudad = {cityInformation.name}
                grados = {cityInformation.main.temp}
                />
            }
        </div>
    )
}

export default Inicio
