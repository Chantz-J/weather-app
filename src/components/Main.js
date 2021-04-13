import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import WeatherContainer from './WeatherContainer'


const MainHeader = styled.header`
    background: ${props => props.theme.colors.primary};
    color: #fff;
    width: 100%;
    height: 100vh;
`

const Main = ({isLoading, weather}) => {
    return (
        <MainHeader>
            <WeatherContainer isLoading={isLoading}/>
        </MainHeader>
    )
}
const maptoStateProps = state => {
    return {
        isLoading: state.isLoading,
    }
}
export default connect(maptoStateProps,{})(Main)