import styled, { css } from 'styled-components'
import { Image } from '../../GlobalStyles'

export const Inner = styled.header`
    padding-top: 162px;

    @media (max-width: 860px) {
        padding-top: 90px;
    }
`

export const Heading = styled.div`
    width: 100%;
    height: 100%;
    max-width: 770px;
    color: ${({ theme }) => theme.color.textColor};
    will-change: opacity, transform;
    transform: translateX(-150px);
    opacity: 0;
    ${({ animationHeading }) => animationHeading && css`
        transform: translateX(0);
        opacity: 1;
    `}
    transition: all linear 0.5s;
    -moz-transition: all linear 0.5s;
    -o-transition: all linear 0.5s;
    -webkit-transition: all linear 0.5s;
`

export const SubTitle = styled.h2`
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 500px) {
        font-size: 1.8rem;
    }
`

export const Title = styled.h1`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    font-weight: 500;
    margin-top: 20px;

    @media (max-width: 500px) {
        font-size: 3rem;
    }
`

export const Group = styled.div`
    width: 100%;
    height: 100%;
    max-height: 590px;
    margin-top: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.color.primaryColor};

    @media (max-width: 1000px) {
        margin-top: 50px;
        display: block;
        max-height: calc(590px * 2);
    }
`

export const Wrap = styled.div`
    width: 100%;
    max-width: 607px;
    height: 590px;
    
    ${({ isScroll }) => isScroll && css`
        ${Image} {
            will-change: transform;
            transform: ${({ translateLeft }) => `translateX(${translateLeft}px)`};
        }
    `}

    @media (max-width: 1000px) {
        max-width: 100%;

        ${({ isScroll }) => isScroll && css`
            ${Image} {
                transform: none;
            }
        `}
    }

    @media (max-width: 500px) {
        height: 250px;
    }

    @media (min-width: 1001px) and (max-width: 1100px) {
        max-width: 507px;
    }

    @media (min-width: 1101px) and (max-width: 1150px) {
        max-width: 557px;
    }
`

export const Text = styled.p`
    font-size: 1.8rem;
    line-height: 2.8rem;
    font-family: 'Roboto', sans-serif;
`

export const Content = styled.div`
    width: 100%;
    max-width: 467px;
    margin: auto;
    color: ${({ theme }) => theme.color.whiteColor};
    transform: translateX(-50px);
    opacity: 0;
    ${({ active }) => active && css`
        will-change: opacity, transform;
        opacity: 1;
        transform: translateX(0);
        transition: all linear 1.5s;
    `}

    ${Text}:not(:last-of-type) {
        margin-bottom: 30px;
    }

    @media (max-width: 1000px) {
        padding: 40px 0;
        transform: translateY(50px);

        ${({ active }) => active && css`
            transform: translateY(0);
        `}
    }

    @media (max-width: 1150px) {
        ${Text} {
            width: 90%;
            margin: auto;
        }
    }

    @media (max-width: 500px) {
        ${Text} {
            font-size: 1.6rem;
        }
    }

    @media (min-width: 468px) and (max-width: 1000px) {
        max-width: 100%;
    }
`