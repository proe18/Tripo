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
    }
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
    background-color: ${theme.color.bgColor};
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1320px;
    margin: 0 auto;

    @media (max-width: 1000px) {
        width: 90%;
    }

    @media (min-width: 1001px) and (max-width: 1319px) {
        width: 90%;
    }
`

export const PlatForms = styled.div`
    width: 100%;
    height: 100%;
    max-width: 305px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 540px) {
        max-width: 235px;
    }
`

export const Link = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    min-height: 45px;
    text-decoration: none;

    &:first-of-type {
        max-width: 135px;
    }

    &:last-of-type {
        max-width: 152px;
    }

    @media (max-width: 540px) {
        min-height: 35px;

        &:first-of-type {
            max-width: 105px;
        }

        &:last-of-type {
            max-width: 117px;
        }
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`