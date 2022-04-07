import styled, { css } from 'styled-components'
import { Image } from '../../GlobalStyles'
import { Link as ReactLink } from 'react-router-dom'
import { ButtonLinkStyled as ButtonLink } from '../button/ButtonStyled'

export const Inner = styled.section``

//================ Heading About ==================
export const Group = styled.div`
    margin-top: 172px;

    @media (max-width: 1318.5px) {
        margin-top: 50px;
    }
`

export const Title = styled.h1`
    width: 100%;
    max-width: 808px;
    margin: 0 auto;
    font-size: 5rem;
    font-weight: 500;
    font-family: 'Suez One', serif;

    @media (max-width: 394px) {
        font-size: 2.6rem;
    }

    @media (min-width: 395px) and (max-width: 719px) {
        font-size: 3rem;
    }

    @media (min-width: 541px) and (max-width: 719px) {
        max-width: 500px;
    }
`

export const SubTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 2.1rem;
    font-family: "Roboto", sans-serif;

    @media (max-width: 394px) {
        font-size: 1.8rem;
    }

    @media (min-width: 395px) and (max-width: 719px) {
        font-size: 2rem;
    }
`

export const Text = styled.p`
    width: 100%;
    max-width: 720px;
    line-height: 2.8rem;
    margin: 20px auto 40px;
    font-size: 1.8rem;
    font-family: "Roboto", sans-serif;

    @media (max-width: 394px) {
        font-size: 1.6rem;
    }
`

export const Heading = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.color.textColor};

    ${ButtonLink} {
        max-width: 142px;
        
        &:hover {
            outline: 1px solid;
        }

        @media (max-width: 394px) {
            max-width: 140px;
            max-height: 55px;
            line-height: 55px;
        }
    }

    & {
        ${Title}, ${SubTitle}, ${Text}, ${ButtonLink} {
            opacity: 0;
            transition: opacity linear 0.8s;
        }
    }
    
    ${({ active }) => active && css`
        ${SubTitle} {
            will-change: opacity;
            opacity: 1;
        }

        ${Title} {
            will-change: opacity;
            opacity: 1;
            transition-delay: 0.2s;
        }

        ${Text} {
            will-change: opacity;
            opacity: 1;
            transition-delay: 0.4s;
        }

        ${ButtonLink} {
            will-change: opacity;
            opacity: 1;
            transition-delay: 0.6s;
        }
    `}
`

export const WrapImage = styled.div`
    max-width: 698px;
    max-height: 398px;
    margin: 65px auto 0;
    position: relative;

    ${Image} {
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    opacity: 0;
    transition: all linear 0.8s;

    &:first-of-type {
        transform: translateY(50px);
    }

    ${({ active }) => active && css`
        will-change: opacity, transform;

        &:first-of-type {
            opacity: 1;
            transform: translateY(0);
        }

        &:last-of-type {
            opacity: 1;
        }
    `}

    &:last-of-type {
            max-width: 229px;
            max-height: 247px;
            border-radius: unset;
            position: absolute;
            bottom: -50px;
            left: -90px;

            @media (max-width: 1000px) {
                bottom: -85px;
                left: 50%;
                transform: translateX(-50%); 
            }

            @media (max-width: 389px) {
                max-width: 120px;
                max-height: 130px;
            }

            @media (min-width: 390px) and (max-width: 415px) {
                max-width: 150px;
                max-height: 165px;
            }

            @media (min-width: 416px) and (max-width: 540px) {
                max-width: 180px;
                max-height: 195px;
            }
        }
    }

    @media (max-width: 394px) {
        max-height: 233px;
    }
`
//==========================================================

//================ Games ===================================
export const Games = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -228px;

    @media (max-width: 680px) {
        flex-direction: column;
    }

    @media (min-width: 681px) and (max-width: 1319px) {
        flex-wrap: wrap;
    }

    @media (max-width: 680px) {
        margin-top: 20px;
    }

    @media (min-width: 681px) and (max-width: 768.5px) {
        padding-top: 150px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        padding-top: 80px;
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
    background-image: linear-gradient(180deg, transparent, rgb(188, 52, 41));
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
        opacity: unset;
        transition: unset;
        text-align: unset;

        @media (max-width: 420px) {
            width: 70%;
        }
    }

    ${Title} {
        font-size: 2.1rem;
        font-weight: 600;
        opacity: 1;
        font-family: 'Roboto', sans-serif;
    }

    ${Text} {
        margin-bottom: 0;
        font-size: 1.6rem;
        opacity: 1;
        margin: 0;
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
        opacity: 1;

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

export const GameMore = styled(ReactLink)``
//==========================================================