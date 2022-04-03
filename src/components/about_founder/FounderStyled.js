import styled, { css } from 'styled-components'
import { Image, Wrapper } from '../../GlobalStyles'

export const Inner = styled.section`
    ${Wrapper} {
        background-color: ${({ theme }) => theme.color.thirdColor};
    }

    @media (max-width: 1320px) {
        ${Wrapper} {
            width: 100%;
            max-width: 100%;
        }
    }
`

export const Title = styled.h1`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    text-align: center;
    padding: 110px 0 70px;
    color: ${({ theme }) => theme.color.whiteColor};
    opacity: 0;
    ${({ active }) => active && css`
        will-change: opacity;
        opacity: 1;
        transition: opacity linear 1s;
    `}

    @media (max-width: 640px) {
        font-size: 2.6rem;
        padding: 40px 0 45px;
    }

    @media (min-width: 641px) and (max-width: 700px) {
        font-size: 3.2rem;
    }

    @media (min-width: 701px) and (max-width: 800px) {
        font-size: 3.8rem;
    }

    @media (min-width: 801px) and (max-width: 900px) {
        font-size: 4.3rem;
    }
`

export const Group = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0;
    transform: translateY(50px);
    ${({ active }) => active && css`
        will-change: opacity, transform;
        opacity: 1;
        transform: translateY(0);
        transition: all linear 1s;
    `}

    @media (max-width: 1000px) {
        flex-wrap: wrap;
    }

    @media (max-width: 559.5px) {
        justify-content: center;
    }

    @media (min-width: 560px) and (max-width: 1000px) {
        justify-content: space-around;
    }
`

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 242px;
    max-height: 322px;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};

    ${Image} {
        transition: ease-in-out 0.9s;
        -moz-transition: ease-in-out 0.9s;
        -webkit-transition: ease-in-out 0.9s;
    }

    &:hover {
        ${Image} {
            will-change: transform;
            transform: scale(1.1);
            -ms-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -webkit-transform: scale(1.1);
        }
    }

    @media (max-width: 559.5px) {
        max-width: 280px;
        max-height: 373px;
    }
`

export const Box = styled.div`
    width: 100%;
    max-width: 242px;

    @media (max-width: 559.5px) {
        max-width: 280px;
    }

    @media (min-width: 726px) and (max-width: 1000px) {
        ${Wrap} {
            margin: 0 auto;
        }
    }

    @media (min-width: 726px) and (max-width: 839.5px) {
        max-width: 280px;
    }

    @media (min-width: 840px) and (max-width: 899.5px) {
        max-width: 300px;
    }

    @media (min-width: 900px) and (max-width: 959.5px) {
        max-width: 320px;
    }

    @media (min-width: 960px) and (max-width: 1000px) {
        max-width: 340px;
    }
`

export const Info = styled.div`
    text-align: center;
    margin: 20px 0 85px;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.whiteColor};
`

export const Name = styled.h1`
    font-size: 2.1rem;
    margin-bottom: 5px;
`

export const Position = styled.p`
    font-size: 1.6rem;
`