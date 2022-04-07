import styled, { css } from 'styled-components'
import { Wrapper } from '../../GlobalStyles'

const widthContent = '660'

export const Inner = styled.section`
    @media (max-width: 1000px) {
        ${Wrapper} {
            width: 100%;
            max-width: 100%;
        }
    }
`

export const RedContent = styled.div`
    width: 100%;
    max-width: ${`${widthContent}px`};
    color: ${({ theme }) => theme.color.whiteColor};
    background-color: ${({ theme }) => theme.color.primaryColor};

    @media (min-width: 661px) and (max-width: 1000px) {
        max-width: 100%;
        margin: 0 auto;
    }
`

export const WhiteContent = styled.div`
    width: 100%;
    max-width: ${`${widthContent}px`};
    color: ${({ theme }) => theme.color.textColor};
    background-color: ${({ theme }) => theme.color.whiteColor};

    @media (min-width: 661px) and (max-width: 1000px) {
        max-width: 100%;
        margin: 0 auto;
    }
`

export const Wrap = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 140px auto;

    @media (max-width: 1000px) {
        width: 90%;
        max-width: 90%;
        margin: 0 auto;
        padding: 40px 0;
    }
`

export const Group = styled.div`
    width: 100%;
    max-width: ${`${widthContent * 2}px`};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -275px;

    ${Wrap} {
        opacity: 0;
        transform: translateX(-50px);
        transition: all linear 1.5s;

        ${({ active }) => active && css`
            will-change: opacity, transform;
            opacity: 1;
            transform: translateX(0);
        `}
    }

    @media (max-width: 1000px) {
        margin-top: 0;
        display: block;

        ${Wrap} {
            transform: translateY(100px);

            ${({ active }) => active && css`
                transform: translateY(0);
            `}
        }
    }
`

export const Title = styled.h1`
    font-size: 3.4rem;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 34px;

    @media (max-width: 640px) {
        font-size: 2.2rem;
        margin-bottom: 20px;
    }

    @media (min-width: 600px) and (max-width: 1000px) {
        text-align: center;
    }
`

export const Text = styled.p`
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
    line-height: 2.8rem;

    &:not(:last-of-type) {
        margin-bottom: 30px;
    }

    @media (max-width: 640px) {
        font-size: 1.6rem;

        &:not(:last-of-type) {
            margin-bottom: 25px;
        }
    }
`