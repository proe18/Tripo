import styled, { css } from 'styled-components'
import { ButtonStyled as Button } from '../button/ButtonStyled'
import PositionBg from '../../images/background_position.jpg'

export const Inner = styled.header``

export const Background = styled.div`
    width: 100%;
    height: 100%;
    min-height: 875px;
    background: url(${PositionBg}) no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed, scroll;

    @media (max-width: 640px) {
        min-height: 385px;
    }
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    min-height: 875px;
    background-color: ${({ theme }) => theme.color.bgSecondColor};

    @media (max-width: 640px) {
        min-height: 385px;
    }
`

export const Content = styled.div`
    padding-top: 160px;
    color: ${({ theme }) => theme.color.whiteColor};
    opacity: 0;
    transform: translateX(-150px);
    opacity: 0;
    transition: all linear 0.8s;
    -moz-transition: all linear 0.8s;
    -o-transition: all linear 0.8s;
    -webkit-transition: all linear 0.8s;
    
    ${({ animationContent }) => animationContent && css`
        will-change: opacity, transform;
        transform: translateX(0);
        opacity: 1;
    `}

    ${Button} {
        max-width: 142px;
        color: ${({ theme }) => theme.color.textColor};
        background-color: ${({ theme }) => theme.color.secondColor};

        &:hover {
            background-color: ${({ theme }) => theme.color.whiteColor};
        }

        @media (max-width: 640px) {
            max-width: 140px;
            max-height: 55px;
            line-height: 55px;
        }
    }

    @media (max-width: 640px) {
        padding-top: 80px;
    }
`

export const SubTitle = styled.h2`
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 640px) {
        font-size: 1.8rem;
    }
`

export const Title = styled.h1`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    font-weight: 500;
    margin: 20px 0 30px;

    @media (max-width: 640px) {
        font-size: 3rem;
        margin: 10px 0 20px;
    }
`

export const Text = styled.div`
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 40px;

    @media (max-width: 640px) {
        font-size: 1.6rem;
        margin-bottom: 20px;
    }
`

export const Location = styled.p`
    margin-bottom: 8px;
`

export const Employment = styled.p``