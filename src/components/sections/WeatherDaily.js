import React from 'react'
import styled from 'styled-components'

import Clear from '../../svg/Clear'
import Clouds from '../../svg/Clouds'
import Drizzle from '../../svg/Drizzle'
import Snow from '../../svg/Snow'
import Thunderstorm from '../../svg/Thunderstorm'
import Windy from '../../svg/Windy'
import Loader from '../../svg/Loader'

const Day = styled.div`
   width: 100%;
   margin: 1rem 1rem;
   
   display: flex;
   flex-direction: column;

   .weather-info {

      .temp {
        font-size: 2rem;
      }

   }
   
`

export default function WeatherDaily({daily, isLoading, error}){

    const iconRender = (main) => {
        switch(main) {
            case main = "Rain":
              return <Thunderstorm />
            case main = "Clouds":
              return <Clouds />
            case main = "Clear":
              return <Clear />
            case main = "Drizzle":
              return <Drizzle /> 
            case main = "Snow":
              return <Snow />
            case main = "Mist" || "Smoke" || "Haze" || "Dust" || "Fog" || "Sand" || "Ash" || "Squall":
                return <Windy />
            default:
              return null
          }
       }

    const Icon = iconRender(daily.weather[0].main)

    return (
        <Day>
            {
                isLoading ? <Loader /> :
             <div className="weather-info">
                {Icon}
                <p>{daily.weather[0].description}</p>
                <p className="temp">{Math.round((daily.temp.day - 273) * 9/5 + 32)} &deg;</p>
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
             </div>
            }
        </Day>
    )
}


