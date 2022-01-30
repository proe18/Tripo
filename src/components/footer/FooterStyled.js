import styled from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom'
import { LogoStyled as Logo } from '../logo/LogoStyled'
import { Image } from '../../GlobalStyles'

export const Inner = styled.footer``

export const Heading = styled.div`
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
    text-align: center;

    ${Logo} {
        margin: 0 auto 20px;

        @media (max-width: 640px) {
            font-size: 2.2rem;
            max-width: 140px;
            max-height: 50px;
        }
    }
`

export const Text = styled.p`
    font-size: 2.4rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.textColor};

    @media (max-width: 640px) {
        font-size: 1.9rem;
        margin-top: 25px;
    }
`

export const Box = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    border-style: solid;
    border-width: 1px 0;
    margin-top: 50px;

    @media (max-width: 640px) {
        flex-wrap: wrap;
        margin-top: 33px;
    }

    @media (max-width: 379.5px) {
        justify-content: flex-start;
    }

    @media (min-width: 380px) and (max-width: 700px) {
        justify-content: space-between;
    }
`


export const ListTitle = styled.h1`
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.textColor};
    margin-bottom: 20px;

    @media (max-width: 640px) {
        font-size: 1.8rem;
        margin-bottom: 12px;
    }
`

export const Wrap = styled.div``

export const NavList = styled.ul`
    list-style: none;
    padding: 60px 0;
    
    ${Image} {
        max-width: 135px;
    }

    ${Image}:nth-last-of-type(1) {
        max-height: 40px;

        @media (max-width: 700px) {
            max-height: 35px;
        }
    }

    ${Image}:last-of-type {
        min-height: 40px;

        @media (max-width: 700px) {
            min-height: 35px;
        }
    }

    @media (max-width: 640px) {
        padding: 30px 0;
    }

    @media (max-width: 700px) {
        ${Image} {
            max-width: 115px;
        }
    }

    @media (max-width: 379.5px) {
        &:first-of-type {
            min-width: 70%;
        }

        &:nth-last-of-type(2) {
            margin-left: 30px;
        }

        &:last-of-type {
            min-width: 250px;

            ${Wrap} {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }

    @media (min-width: 380px) and (max-width: 464px) {
        &:first-of-type {
            min-width: 50%;
        }
    }

    @media (min-width: 380px) and (max-width: 640px) {
        &:last-of-type {
            min-width: 139.4px;
        }
    }

    @media (min-width: 465px) and (max-width: 580px) {
        &:first-of-type {
            min-width: 60%;
        }
    }

    @media (min-width: 581px) and (max-width: 640px) {
        &:first-of-type {
            min-width: 70%;
        }
    }
`

export const Item = styled.li`
    display: block;
    width: 100%;
    height: 100%;
    min-height: 32px;
    line-height: 32px;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;

    ${Text} {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.color.footerColor};
        margin: 0;
    }

    @media (max-width: 640px) {
        min-height: 30px;
        line-height: 30px;
    }
`

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.footerColor};
`

export const RouteLink = styled(ReactRouterLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.footerColor};
`

export const CoppyRight = styled.div`
    width: 100%;
    max-width: 330px;
    margin: 0 auto;
    text-align: center;

    ${Text} {
        font-size: 1.6rem;
        padding: 70px 0;

        @media (max-width: 700px) {
            padding: 20px 0;
        }
    }
`