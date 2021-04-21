import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { fetchWeather } from './actions/index'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

import WeatherContainer from './components/WeatherContainer'
import Current from './components/Current'

const App = ({fetchWeather, isLoading}) => {
  useEffect(() => {fetchWeather()},[fetchWeather])
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Current  isLoading={isLoading} />
        <WeatherContainer isLoading={isLoading} />
      </div>
    </ThemeProvider>
  )
}
const maptoStateProps = state => {
  return {
    error: state.error,
    weather: state.weather,
    isLoading: state.isLoading
  }
}
export default connect(maptoStateProps, {fetchWeather})(App)

