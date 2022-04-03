import styled, { css, createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
    color: {
        primaryColor: '#da392b',
        secondColor: '#fcff72',
        footerColor: '#757575',
        thirdColor: 'rgb(39, 36, 67)',
        overlayAbout: 'rgba(246, 244, 240, 0.75)',
        textColor: '#272443',
        textColorFooter: 'rgb(117, 117, 117)',
        whiteColor: '#ffff',
        blackColor: '#000',
        bgColor: '#f6f4f0',
        bgPrimaryColor: 'rgba(218, 57, 43, 0.75)',
        bgSecondColor: 'rgba(39, 36, 67, 0.65)',
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

export const StyleProvider = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
        height: 100vh;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: transparent;
        color: #000000;
        font-size: 10px;

        ${({ mobileMenu, closeGallery }) => (mobileMenu || !closeGallery) 
            && css`
                overflow-y: hidden;
                scrollbar-width: none;
                -ms-overflow-style: none;
                &::-webkit-scrollbar {
                    display: none;
                }
            `
        }
    }
`

export const Pages = styled.div`
    width: 100%;
    height: 100%;
    margin-top: ${({ positionFixed }) => positionFixed && '-60px'};
    background-color: ${theme.color.bgColor};

    @media (max-width: 860px) {
        opacity: ${({ mobileMenu }) => mobileMenu ? 0 : 1};
        will-change: opacity;
        transition: opacity ease-in-out 0.3s;
        -moz-transition: opacity ease-in-out 0.3s;
        -o-transition: opacity ease-in-out 0.3s;
        -webkit-transition: opacity ease-in-out 0.3s;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1320px;
    margin: 0 auto;

    @media (max-width: 320px) {
        max-width: 280px;
    }

    @media (max-width: 1319px) {
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
`

export const Link = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    max-height: 45px;
    text-decoration: none;

    &:first-of-type {
        max-width: 135px;
    }

    &:last-of-type {
        max-width: 152px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`