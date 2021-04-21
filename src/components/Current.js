import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Clear from '.././svg/Clear'
import Clouds from '.././svg/Clouds'
import Drizzle from '.././svg/Drizzle'
import Snow from '.././svg/Snow'
import Thunderstorm from '.././svg/Thunderstorm'
import Windy from '.././svg/Windy'
import Loader from '.././svg/Loader'

const CurrentSec = styled.section`
    height: 35vh;
    width: 37%;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    margin: 0 auto;
      
    .current-weather {

      .current-description {
        padding-left: 32%;
        font-weight: 500;
        font-size: 1.5rem;
      }

    }
    
`

function Current({weather, isLoading, error}){

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

    const Icon = iconRender(weather.current &&  weather.current.weather[0].main)
    return(
       <CurrentSec>
           {
               isLoading ? <Loader /> :
               <div className="current-weather">
                  <p className="current-description">Current Weather</p>
                   {Icon}
                   <p className="current-description" style={{fontSize: '1rem'}}>
                     { weather.current && weather.current.weather[0].description}
                    </p>
                   {error ? <p style={{color: 'red'}}>{error}</p> : null}
               </div>
           }
       </CurrentSec>
    )
}
const maptoStateProps = state => {
    return {
        error: state.error,
        weather: state.weather,
    }
}
export default connect(maptoStateProps, {})(Current)