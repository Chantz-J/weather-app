import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
       font-size: 100%;
       padding: 0;
       margin: 0;

    &:before {
       box-sizing: border-box;
    }

     &:after {
        box-sizing: border-box;
      }

      -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: system, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", "Segoe UI", Arial, sans-serif;
      
    }

    .App {
       height: 100vh;
       background: ${props => props.theme.colors.primary};
       display: flex;
       flex-direction: column;
       justify-content: center;
       
    }
`