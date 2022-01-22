import styled from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom'
import BackGround from '../../images/background_home_1.jpg'

export const Background = styled.header`
    width: 100%;
    height: 100%;
    max-height: 800px;
    background: url(${BackGround}) no-repeat;
    background-size: cover;
    /* display: none; */

    @media (max-width: 1000px) {
        max-height: 315px;
        background-position: 50% 0;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1320px;
    margin: 0 auto;

    @media (max-width: 280px) {
        width: 90%;
    }
`

export const Heading = styled.div`
    padding-top: 185px;
    color: ${({ theme }) => theme.color.textColor};

    @media (max-width: 280px) {
        padding-top: 70px;
    }
`

export const Title = styled.h1`
    font-size: 8rem;
    font-weight: 500;
    font-family: 'Suez One', serif;

    @media (max-width: 280px) {
        width: 80%;
        font-size: 4rem;
    }
`

export const Text = styled.p`
    font-size: 2.4rem;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 45px;

    @media (max-width: 280px) {
        font-size: 1.6rem;
        margin: 8px 0 15px;
    }
`

export const Platforms = styled.div`
    width: 100%;
    height: 100%;
    max-width: 305px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 280px) {
        max-width: 235px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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

    @media (max-width: 280px) {
        min-height: 35px;

        &:first-of-type {
            max-width: 105px;
        }

        &:last-of-type {
            max-width: 117px;
        }
    }
`

export const Games = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 228px;

    @media (max-width: 280px) {
        flex-direction: column;
        margin-top: 85px;
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

export const Game = styled(ReactRouterLink)`
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

        @media (max-width: 280px) {
            min-height: 375px;
        }
    }

    ${Heading} {
        position: absolute;
        bottom: 35px;
        left: 50px;
        color: ${({ theme }) => theme.color.whiteColor};
        font-family: 'Roboto', sans-serif;

        @media (max-width: 280px) {
            left: 30px;
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

    @media (max-width: 280px) {
        max-height: 375px;
        margin-bottom: 8px;
    }
`

export const More = styled.div`
    width: 100%;
    height: 100%;
    max-width: 300px;
    min-height: 398px;
    overflow: hidden;
    position: relative;
    background-color: rgb(252, 255, 114);
    border-radius: ${({ theme }) => theme.borderRadius.radius2};

    &:hover ${Overlay} {
        background: transparent;
    }

    ${Heading} {
        width: 80%;
        max-width: 300px;
        color: #000;
        padding-top: 0;
        margin: 49% 10%;
        position: absolute;
        text-align: center;
        font-size: 4rem;
        will-change: transition;
        transition: ease-in-out 0.9s;
        -moz-transition: ease-in-out 0.9s;
        -webkit-transition: ease-in-out 0.9s;

        @media (max-width: 280px) {
            margin: 0;
            top: 55%;
            left: 90%;
            transform: translate(-90%, -55%);
        }
    }

    ${Title} {
        font-size: 3rem;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;
    }

    &:hover ${Heading} {
        will-change: transform;
        transform: scale(1.1);
        -ms-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
    }

    @media (max-width: 280px) {
        max-height: 375px;
    }
`