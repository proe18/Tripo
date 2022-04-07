import styled from 'styled-components'
import Bg from '../../images/background_home_1.jpg'
import { PlatForms, Link } from '../../GlobalStyles'

export const Inner = styled.header`
    width: 100%;
    height: 100%;
    min-height: 800px;
    position: relative;
    top: 0;
    overflow: hidden;

    @media (max-width: 420px) {
        min-height: 315px;
    }

    @media (min-width: 421px) and (max-width: 640px) {
        min-height: 480px;
    }

    @media (min-width: 641px) and (max-width: 768px) {
        min-height: 550px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        min-height: 650px;
    }
`

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
`

export const Background = styled.div`
    width: 105%;
    height: 100%;
    max-height: 800px;
    position: absolute;
    top: 0;
    background: url(${Bg}) no-repeat;
    background-size: cover;
    will-change: transform;
    transform: ${({ translateLeft }) => `translateX(-${translateLeft}px)`};

    @media (max-width: 420px) {
        width: 110%;
        max-height: 315px;
        background-position: 50% 0;
    }

    @media (min-width: 421px) and (max-width: 640px) {
        width: 111%;
        max-height: 480px;
        background-position: 53% 0;
    }

    @media (min-width: 641px) and (max-width: 768px) {
        width: 110%;
        max-height: 550px;
        background-position: 40% 0;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 110%;
        max-height: 650px;
        background-position: 36% 0;
    }

    @media (min-width: 1025px) and (max-width: 1180px) {
        width: 110%;
        background-position: 38% 0;
    }
`

export const Heading = styled.div`
    padding-top: 185px;
    color: ${({ theme }) => theme.color.textColor};
    will-change: opacity;
    opacity: ${({ animationHeading }) => animationHeading ? 1 : 0};
    transition: opacity linear 2s;
    -moz-transition: opacity linear 2s;
    -o-transition: opacity linear 2s;
    -webkit-transition: opacity linear 2s;

    @media (max-width: 450.5px) {
        padding-top: 70px;
    }

    @media (min-width: 451px) and (max-width: 640px) {
        padding-top: 90px;
    }

    ${PlatForms} {
        @media (max-width: 640px) {
            max-width: 235px;
        }
    }

    ${Link} {
        @media (max-width: 640px) {
            min-height: 35px;

            &:first-of-type {
                max-width: 105px;
            }

            &:last-of-type {
                max-width: 117px;
            }
        }
    }
`

export const Title = styled.h1`
    font-size: 8rem;
    font-weight: 500;
    font-family: 'Suez One', serif;

    @media (max-width: 290.5px) {
        width: 80%;
        font-size: 4rem;
    }

    @media (min-width: 291px) and (max-width: 320px) {
        width: 72%;
        font-size: 4rem;
    }

    @media (min-width: 321px) and (max-width: 420px) {
        width: 90%;
        font-size: 5rem;
    }

    @media (min-width: 421px) and (max-width: 640px) {
        font-size: 5.5rem;
    }

    @media (min-width: 641px) and (max-width: 673.8px) {
        font-size: 6rem;
    }
    
    @media (min-width: 674px) and (max-width: 770px) {
        font-size: 7rem;
    }
`

export const Text = styled.p`
    font-size: 2.4rem;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 45px;

    @media (max-width: 528px) {
        margin: 8px 0 15px;
    }

    @media (max-width: 320px) {
        font-size: 1.6rem;
    }

    @media (min-width: 321px) and (max-width: 420px) {
        font-size: 1.9rem;
    }

    @media (min-width: 421px) and (max-width: 528px) {
        font-size: 2rem;
    }

    @media (min-width: 529px) and (max-width: 640px) {
        font-size: 2.2rem;
    }
`