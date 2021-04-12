import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { fetchWeather } from './actions/index'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

import SearchBar from './components/Search'
import WeatherContainer from './components/WeatherContainer'

const App = ({fetchWeather}) => {
  useEffect(() => {fetchWeather()},[fetchWeather])
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <SearchBar />
        <WeatherContainer />
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

