import styled from 'styled-components'
import { Image } from '../../GlobalStyles'
import { ButtonLinkStyled as ButtonLink } from '../button/ButtonStyled'

export const Inner = styled.section`
    width: 100%;
    height: 100%;
    max-height: 1349px;
    margin-top: 275px;
    position: relative;

    ${Image} {
        max-width: 488px;
        max-height: 414px;
        position: absolute;
        top: 335px;
        right: 138px;

        @media (max-width: 280px) {
            max-width: 240px;
            max-height: 180px;
            right: 50%;
            transform: translateX(-50%);
        }
    }

    @media (max-width: 280px) {
        max-width: 280px;
    }
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: ${({ bg }) => `url(${bg})`} no-repeat;
    background-size: cover;
    background-attachment: fixed, scroll;

    &:first-of-type {
        min-height: 747px;
    }

    &:nth-last-of-type(2) {
        min-height: 600px;
    }

    
`

export const Overlay = styled.div`
`

export const Heading = styled.div`
    width: 100%;
    max-width: 770px;
    color: ${({ theme }) => theme.color.whiteColor};
    position: absolute;
    top: 115px;

    ${ButtonLink} {
        margin: 0;
        max-width: 150px;
        text-align: center;
        color: ${({ theme }) => theme.color.textColor};
        background-color: ${({ theme }) => theme.color.secondColor};

        &:hover {
            background-color: ${({ theme }) => theme.color.whiteColor};
        }

        @media (max-width: 280px) {
            max-height: 55px;
            line-height: 55px;
        }
    }

    @media (max-width: 280px) {
        max-width: 260px;
        top: 40px;
    }
`

export const Title = styled.h1`
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 280px) {
        font-size: 1.8rem;
    }
`

export const Text = styled.p`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    margin: 15px 0;

    @media (max-width: 280px) {
        font-size: 2.6rem;
        margin: 15px 0 25px;
    }
`