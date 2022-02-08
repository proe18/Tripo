import styled from 'styled-components'
import { Wrapper } from '../../GlobalStyles'

export const Background = styled.section`
    width: 100%;
    height: 100%;
    max-height: 860px;
    background: ${({bg}) => `url(${bg})`} no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed, scroll;

    @media (max-width: 866.5px) {
        max-height: calc(860px * 2);
    }
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    max-height: 860px;
    background-color: ${({theme}) => theme.color.overlayAbout};

    @media (max-width: 420px) {
        ${Wrapper} {
            max-width: 280px;
        }
    }

    @media (max-width: 866.5px) {
        max-height: calc(860px * 2);
    }
`

export const Title = styled.h1`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    font-weight: 500;
    text-align: center;
    padding-top: 155px;
    margin-bottom: 75px;
    color: ${({theme}) => theme.color.textColor};

    @media (max-width: 639.5px) {
        font-size: 2.6rem;
    }

    @media (min-width: 640px) and (max-width: 700px) {
        font-size: 3.8rem;
    }

    @media (min-width: 701px) and (max-width: 800px) {
        font-size: 4.3rem;
    }

    @media (max-width: 866.5px) {
        padding-top: 40px;
        margin: 0;
    }
`

export const Group = styled.div`
    width: 100%;
    max-width: 820px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 866.5px) {
        display: block;
    }
`

export const Box = styled.div`
    width: 100%;
    max-width: 390px;
    padding: 40px;
    border-radius: ${({theme}) => theme.borderRadius.radius2};
    background-color: ${({theme}) => theme.color.whiteColor};
    box-shadow: ${({theme}) => theme.shadow.boxShadow};

    &:last-of-type {
        width: 100%;
        max-width: 820px;
        margin-top: 42px;

        @media (min-width: 434px) and (max-width: 866.5px) {
            max-width: 390px;
        }
    }

    @media (min-width: 434px) and (max-width: 866.5px) {
        margin: 0 auto;
    }

    @media (max-width: 866.5px) {
        padding: 40px 30px;
        margin-top: 40px;

        &:first-of-type {
            margin-top: 20px;
        }
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 310px;
    
    ${Title} {
        font-size: 3.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        padding: 0;
        margin: 0;
        text-align: left;
        color: ${({theme}) => theme.color.primaryColor};

        @media (max-width: 639.5px) {
            font-size: 2.2rem;
            text-align: center;
        }
    }

    &:last-of-type {
        width: 100%;
        max-width: 820px;
    }

    @media (max-width: 639.5px) {
        text-align: center;
    }
`

export const Text = styled.p`
    font-size: 1.6rem;
    line-height: 2.8rem;
    font-family: 'Roboto', sans-serif;
    margin-top: 20px;
`