import styled, { css } from 'styled-components'
import { Link as ReactLink } from 'react-router-dom'
import Bg from '../../images/background_home_1.jpg'
import { Image, PlatForms, Link } from '../../GlobalStyles'

export const Inner = styled.header`
    width: 100%;
    height: 100%;
    max-height: 800px;
    position: relative;
    top: 0;
`

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-height: 800px;
    overflow-y: scroll;
    /* overflow-x: ${({ isScroll }) => isScroll && 'hidden'}; */
    /* ${({ isScroll }) => isScroll && css`
        width: 105%;
        overflow-x: hidden;
        &::-webkit-scrollbar:horizontal {
            height: 0;
            width: 0;
            display: none;
        }
    `} */
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    max-height: 800px;
    position: absolute;
    top: 0;
    background: url(${Bg}) no-repeat;
    background-size: cover;
    ${({ isScroll }) => isScroll && css`
        width: 105%;
        &::-webkit-scrollbar:horizontal {
            height: 0;
            width: 0;
            display: none;
        }
        will-change: transform;
        transform: ${({ translateLeft }) => `translateX(-${translateLeft}px)`};
    `}

    @media (max-width: 420px) {
        max-height: 315px;
        background-position: 50% 0;
    }

    @media (min-width: 421px) and (max-width: 640px) {
        max-height: 480px;
        background-position: 53% 0;
    }

    @media (min-width: 641px) and (max-width: 768px) {
        max-height: 550px;
        background-position: 40% 0;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        max-height: 650px;
        background-position: 36% 0;
    }

    @media (min-width: 1025px) and (max-width: 1180px) {
        background-position: 20% 0;
    }
`

export const Heading = styled.div`
    padding-top: 185px;
    color: ${({ theme }) => theme.color.textColor};
    will-change: opacity, transition;
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

export const Games = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 228px;

    @media (max-width: 680px) {
        flex-direction: column;
    }

    @media (min-width: 681px) and (max-width: 1319px) {
        flex-wrap: wrap;
    }

    @media (max-width: 1000px) {
        margin-top: 0;
    }

    @media (max-width: 420px) {
        padding-top: 85px;
    }

    @media (min-width: 681px) and (max-width: 1000px) {
        padding-top: ${({ marginTop }) => `${(marginTop / 8)}px`};
    }

    @media (min-width: 421px) and (max-width: 450px) {
        padding-top: ${({ marginTop }) => `${(marginTop / 2.2)}px`};
    }

    @media (min-width: 451px) and (max-width: 540px) {
        padding-top: ${({ marginTop }) => `${(marginTop / 3)}px`};
    }

    @media (min-width: 541px) and (max-width: 640px) {
        padding-top: ${({ marginTop }) => `${(marginTop / 2)}px`};
    }

    @media (min-width: 641px) and (max-width: 680px) {
        padding-top: ${({ marginTop }) => `${(marginTop / 2.8)}px`};
    }

    @media (min-width: 1001px) and (max-width: 1024px) {
        margin: 80px auto 0;
    }

    @media (min-width: 821px) and (max-width: 1000px) {
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 1001px) and (max-width: 1319px) {
        max-width: 690px;
        margin-left: auto;
        margin-right: auto;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(180deg, transparent ,rgb(188, 52, 41));
    will-change: transition;
    transition: background-image ease-out 1.5s;
    -moz-transition: background-image ease-out 1.5s;
    -webkit-transition: background-image ease-out 1.5s;
`

export const Game = styled(ReactLink)`
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 398px;
    text-decoration: none;
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    overflow: hidden;

    ${Image} {
        max-width: 300px;
        min-height: 398px;
        will-change: transition;
        transition: ease-in-out 0.9s;
        -moz-transition: ease-in-out 0.9s;
        -webkit-transition: ease-in-out 0.9s;

        @media (max-width: 320px) {
            min-height: 375px;
        }
    }

    ${Heading} {
        position: absolute;
        bottom: 35px;
        left: 50px;
        color: ${({ theme }) => theme.color.whiteColor};
        font-family: 'Roboto', sans-serif;
        opacity: unset;
        transition: unset;

        @media (max-width: 420px) {
            width: 70%;
        }
    }

    ${Title} {
        font-size: 2.1rem;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;
    }

    ${Text} {
        margin-bottom: 0;
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
    }

    &:hover ${Overlay} {
        background: transparent;
    }

    &:hover ${Heading} {
        will-change: opacity;
        opacity: 0;
    }

    &:hover ${Image} {
        will-change: transform;
        transform: scale(1.1);
        -ms-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
    }

    @media (max-width: 360px) {
        max-height: 375px;
    }

    @media (max-width: 540px) {
        margin-bottom: 10px;
    }

    @media (min-width: 541px) and (max-width: 1319px) {
        margin-bottom: 30px;
    }
`

export const More = styled.div`
    width: 100%;
    height: 100%;
    max-width: 300px;
    min-height: 398px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background-color: rgb(252, 255, 114);
    border-radius: ${({ theme }) => theme.borderRadius.radius2};

    &:hover ${Overlay} {
        background: transparent;
    }

    ${Heading} {
        width: 100%;
        max-width: 300px;
        min-height: 398px;
        color: #000;
        padding: 49% 10%;
        position: absolute;
        text-align: center;
        font-size: 4rem;
        opacity: unset;
        will-change: transition;
        transition: ease-in-out 0.9s;
        -moz-transition: ease-in-out 0.9s;
        -webkit-transition: ease-in-out 0.9s;

        @media (max-width: 280px) {
            padding: 65% 10%;
        }
    }

    ${Title} {
        font-size: 3rem;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;

        @media (max-width: 541px) {
            width: 100%;
        }
    }

    &:hover ${Heading} {
        will-change: transform;
        transform: scale(1.1);
        -ms-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
    }

    @media (max-width: 1280px) {
        &:hover ${Heading} {
            transform: none;
            -ms-transform: none;
            -moz-transform: none;
            -webkit-transform: none;
        }
    }

    @media (min-width: 681px) and (max-width: 1319px) {
        margin-top: -30px;
    }
`