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
    }
`

export const Title = styled.h1`
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;
`

export const Text = styled.p`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    margin: 15px 0;
`