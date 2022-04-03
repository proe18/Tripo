import styled, { css } from 'styled-components'

export const Inner = styled.header`
    padding-top: 162px;

    @media (max-width: 860px) {
        padding-top: 90px;
    }
`

export const Heading = styled.div`
    width: 100%;
    max-width: 564px;
    font-family: 'Roboto', sans-serif;
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

    @media (max-width: 320px) {
        font-size: 1.8rem;
    }
`

export const Title = styled.h1`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    font-weight: 500;
    margin: 20px 0 30px;

    @media (max-width: 320px) {
        font-size: 3rem;
    }

    @media (min-width: 320px) and (max-width: 640px) {
        font-size: 4rem;
    }
`

export const Text = styled.p`
    font-size: 1.8rem;
    line-height: 2.9rem;

    @media (max-width: 320px) {
        font-size: 1.6rem;
    }
`