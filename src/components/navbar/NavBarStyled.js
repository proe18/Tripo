import styled from 'styled-components/macro';
import { NavLink as ReactRouerNavLink } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 1320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    
    //Mobile device
    @media (max-width: ${({ theme }) => `${theme.breakPoint}px`}) {
        width: 80%;
        align-items: flex-start;
        ${({ mobileMenu }) => mobileMenu && 'width: 100%;'}
    }

    //PC and Tablet device
    @media (min-width: ${({ theme }) => `${+theme.breakPoint + 1}px`}) {
        width: 90%;
    }
`

export const Inner = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    //Mobile device
    @media (max-width: ${({ theme }) => `${theme.breakPoint}px`}) {
        ${({ mobileMenu }) => mobileMenu
            ? 
                `width: 100vw;
                height: 100vh;
                overflow: hidden;`
            : 
                `width: 100%;
                height: 50px;`
        }
        position: relative;
        z-index: 10;
        background-color: ${({ theme }) => theme.color.whiteColor};
    }
`

export const Nav = styled.ul`
    width: 100%;
    height: 100%;
    max-width: 553px;
    max-height: 60px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.roboto};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
    overflow: hidden;
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.radius1};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.radius1};

    //Mobile device
    @media (max-width: ${({ theme }) => `${theme.breakPoint}px`}) {
        font-size: 2.6rem;
        display: ${({ mobileMenu }) => !mobileMenu && 'none'};
        flex-direction: column;
        justify-content: flex-start;
        margin-top: ${({mobileMenu}) => mobileMenu && '95px'};
        position: absolute;
        top: 0;
        max-width: 100vw;
        max-height: 100vh;
    }
`

export const Link = styled(ReactRouerNavLink)`
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.color.textColor};
    transition: ease-in-out 0.28s;

    //Mobile device
    @media (max-width: ${({ theme }) => `${theme.breakPoint}px`}) {
        padding-left: 30px;
    }
`

export const Item = styled.li`
    width: 100%;
    height: 100%;
    max-height: 60px;
    line-height: 60px;
    cursor: pointer;
    text-align: center;
    transition: ease-in-out 0.28s;

    ${Link}.active {
        color: ${({ theme }) => theme.color.whiteColor};
        background-color: ${({ theme }) => theme.color.primaryColor};
    }

    &:hover:not(:nth-child(2)) {
        background-color: ${({ theme }) => theme.color.primaryColor};
    }
    
    &:hover:not(:nth-child(2)) ${Link} {
        color: ${({ theme }) => theme.color.whiteColor};
    }

    @media (max-width: ${({ theme }) => `${theme.breakPoint}px`}) {
        text-align: left;
        &:hover:not(:nth-child(2)) ${Link} {
            color: ${({ theme }) => theme.color.primaryColor};
        }

        ${Link}.active {
            color: ${({ theme }) => theme.color.primaryColor};
            background-color: ${({ theme }) => theme.color.whiteColor};
        }
    }
`

export const NavDropDown = styled.div`
    cursor: pointer;
    position: relative;

    //Mobile device
    @media (max-width: ${({ theme }) => `${theme.breakPoint}px`}) {
        padding-left: 30px;
    }
`

export const Icon = styled.div`
    width: 100%;
    height: 100%;
    max-width: 50px;
    max-height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: ${({ theme, mobileMenu }) => !mobileMenu ? theme.color.whiteColor : theme.color.primaryColor};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.radius1};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.radius1};

    & {
        font-size: 2.6rem;
        padding-top: 5px;
        color: ${({ theme, mobileMenu }) => mobileMenu && theme.color.whiteColor};
    }

    //Show icon on mobile device
    @media (max-width: ${({ theme }) => `${theme.breakPoint}px`}) {
        display: block;
        position: absolute;
        top: 0;
        right: 5%;
        z-index: 11;
    }
    //Hidden icon on PC and Tablet device
    @media (min-width: ${({ theme }) => `${+theme.breakPoint + 1}px`}) {
        display: none;
    }
`

export const DropDownIcon = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & {
        padding-right: 40px;
    }
`