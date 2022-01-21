import styled, { createGlobalStyle } from 'styled-components'

export const theme = {
    color: {
        primaryColor: '#da392b',
        secondColor: '#fcff72',
        thirdColor: 'rgb(39, 36, 67)',
        textColor: '#272443',
        textColorFooter: 'rgb(117, 117, 117)',
        whiteColor: '#ffff',
        blackColor: '#000',
        bgColor: '#f6f4f0',
        bgPrimaryColor: 'rgba(218, 57, 43, 0.75)',
        bgCareersColor: 'rgb(39, 36, 67, 0.65)',
        bgHoverFounder: 'rgba(8, 8, 8, 0.75)',
    },
    borderRadius: {
        radius1: '10px',
        radius2: '20px'
    },
    shadow: {
        boxShadow: '7.07px 7.07px 10px 0px rgba(237, 75, 64, 0.1)',
        errorsBoxShadow: '3px 3px 7px 0px rgba(36, 35, 35, 0.4)',
    },
    font: {
        roboto: 'Roboto, sans-serif',
        caveat: 'Caveat, cursive'
    },
    breakPoint: '1000'
    
}

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
        height: 100%;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: transparent;
        color: #333333;
        font-size: 10px;
    }
`

export const Pages = styled.div`
    width: 100%;
    height: 100%;
    margin-top: -60px;
`