import styled from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom'
import { LogoStyled as Logo} from '../logo/LogoStyled'
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
    color: ${({theme}) => theme.color.textColor};
`

export const Wrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    border-style: solid;
    border-width: 1px 0;
    margin-top: 50px;
`

export const NavList = styled.ul`
    list-style: none;
    padding: 60px 0;

    ${Image} {
        max-width: 135px;
        max-height: 40px;
    }
`

export const ListTitle = styled.h1`
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.color.textColor};
    margin-bottom: 20px;
`

export const Item = styled.li`
    display: block;
    text-decoration: none;

    ${Text} {
        font-size: 1.6rem;
        color: ${({theme}) => theme.color.footerColor};
        margin-top: 10px;
    }
`

export const Link = styled.a``

export const RouteLink = styled(ReactRouterLink)``

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