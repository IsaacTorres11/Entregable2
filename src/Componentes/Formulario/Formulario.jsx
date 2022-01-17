import React from 'react'


const Formulario = ({handleCity,city,heandleSearchWeather}) => {
    return (
        <form action = '' onSubmit={(e)=>heandleSearchWeather(e)} className='formulario'>
            <input 
            type ='text' 
            placeholder='Name City' 
            onChange ={({target})=> handleCity(target)}
            value = {city}/>
            
            <input type='submit' value ='Buscar'/>
        </form>
    )
}

export default Formulario
