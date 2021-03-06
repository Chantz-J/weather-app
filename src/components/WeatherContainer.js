import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'


import WeatherDaily from './sections/WeatherDaily'

const Main = styled.main`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2rem;
`

const WeatherContainer = ({error, weather, isLoading}) => {
    return (
        <Main>
            {
                   weather.daily && weather.daily.map(daily => {
                    return (
                         <WeatherDaily 
                          key={daily.dt} 
                          daily={daily}
                          error={error}
                          isLoading={isLoading}
                        />
                    )
                })
            }
       </Main>
    )
}
const maptoStateProps = state => {
    return {
        error: state.error,
        weather: state.weather,
    }
}
export default connect(maptoStateProps, {})(WeatherContainer)