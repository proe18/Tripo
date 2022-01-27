import styled from 'styled-components'
import { ButtonLinkStyled as ButtonLink } from '../button/ButtonStyled'

export const Inner = styled.section``

export const Heading = styled.div`
    margin-top: 410px;
    text-align: center;
    color: ${({theme}) => theme.color.textColor};

    ${ButtonLink} {
        max-width: 142px;
        
        &:hover {
            outline: 1px solid;
        }

        @media (max-width: 280px) {
            max-width: 140px;
            max-height: 55px;
        }
    }

    @media (max-width: 280px) {
        margin-top: 1630px;
    }
`

export const Title = styled.h1`
    width: 100%;
    max-width: 808px;
    margin: 0 auto;
    font-size: 5rem;
    font-weight: 500;
    font-family: 'Suez One', serif;

    @media (max-width: 280px) {
        font-size: 2.6rem;
    }
`

export const SubTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 2.1rem;
    font-family: "Roboto", sans-serif;

    @media (max-width: 280px) {
        font-size: 1.8rem;
    }
`

export const Text = styled.p`
    width: 100%;
    max-width: 720px;
    line-height: 2.8rem;
    margin: 20px auto 40px;
    font-size: 1.8rem;
    font-family: "Roboto", sans-serif;

    @media (max-width: 280px) {
        font-size: 1.6rem;
    }
`

export const Wrap = styled.div`
    max-width: 698px;
    max-height: 398px;
    margin: 65px auto 0;
    position: relative;

    @media (max-width: 280px) {
        max-height: 233px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({theme}) => theme.borderRadius.radius2};

    &:last-of-type {
        max-width: 229px;
        max-height: 247px;
        border-radius: unset;
        position: absolute;
        bottom: -50px;
        left: -90px;

        @media (max-width: 280px) {
            max-width: 120px;
            max-height: 130px;
            bottom: -85px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`
