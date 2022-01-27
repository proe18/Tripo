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
    }
`

export const Text = styled.p`
    font-size: 2.4rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.textColor};
`

export const Wrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    border-style: solid;
    border-width: 1px 0;
    margin-top: 50px;
`


export const ListTitle = styled.h1`
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.textColor};
    margin-bottom: 20px;
`

export const NavList = styled.ul`
    list-style: none;
    padding: 60px 0;
    
    ${Image} {
        max-width: 135px;
    }

    &:nth-last-of-type(1) ${Image} {
        max-height: 40px;
    }

    &:last-of-type ${Image} {
        min-height: 40px;
    }
`

export const Link = styled.a``

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
    }

    ${Link} {
        text-decoration: none;
        color: ${({ theme }) => theme.color.footerColor};
    }
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
    }
`