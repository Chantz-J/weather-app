import { 
FETCH_WEATHER_START, 
FETCH_WEATHER_SUCCESS, 
FETCH_WEATHER_FAILED } from '../actions/index'

export const initialState = {
    error: '',
    isLoading: false,
    weather: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_WEATHER_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                weather: action.payload
            }
        case FETCH_WEATHER_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state
    }
}