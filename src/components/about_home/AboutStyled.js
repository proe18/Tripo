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
    }
`

export const Title = styled.h1`
    width: 100%;
    max-width: 808px;
    margin: 0 auto;
    font-size: 5rem;
    font-weight: 500;
    font-family: 'Suez One', serif;
`

export const SubTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 2.1rem;
    font-family: "Roboto", sans-serif;
`

export const Text = styled.p`
    width: 100%;
    max-width: 720px;
    line-height: 2.8rem;
    margin: 20px auto 40px;
    font-size: 1.8rem;
    font-family: "Roboto", sans-serif;
`

export const Wrap = styled.div`
    max-width: 698px;
    max-height: 398px;
    margin: 65px auto 0;
    position: relative;
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
    }
`
