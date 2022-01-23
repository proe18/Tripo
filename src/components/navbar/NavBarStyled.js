import styled, { keyframes } from 'styled-components'
import { NavLink as ReactRouerNavLink } from 'react-router-dom'

const slipDown = keyframes`
    0% {
        transform: translateY(-150%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    
    //Mobile device
    @media (max-width: 1000px) {
        width: 90%;
        align-items: flex-start;
        ${({ mobileMenu }) => mobileMenu && `
            width: 100%;
        `}
    }

    //PC and Tablet device
    @media (min-width: 1001px) {
        width: 90%;
    }
`

export const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;

    @media (min-width: 768px) and (max-width: 1000px) {
        ${({ mobileMenu }) => mobileMenu
        ? `
            width: 100vw;
            height: 100vh;
        `
        : `
            max-width: 60px;
            min-height: 60px;
        `}
        border-bottom-left-radius: ${({ theme }) => theme.borderRadius.radius1};
        border-bottom-right-radius: ${({ theme }) => theme.borderRadius.radius1};
        position: relative;
        z-index: 10;
        background-color: ${({ theme }) => theme.color.whiteColor};
    }
    
    //Mobile device
    @media (max-width: 767px) {
        ${({ mobileMenu }) => mobileMenu
        ? `
            width: 100vw;
            height: 100vh;
        `
        : `
            max-width: 50px;
            min-height: 50px;
        `}
        border-bottom-left-radius: ${({ theme }) => theme.borderRadius.radius1};
        border-bottom-right-radius: ${({ theme }) => theme.borderRadius.radius1};
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
    overflow: hidden;
    background-color: #ffff;
    font-family: ${({ theme }) => theme.font.roboto};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.radius1};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.radius1};

    //Mobile device
    @media (max-width: 1000px) {
        font-size: 2.6rem;
        display: ${({ mobileMenu }) => !mobileMenu && 'none'};
        will-change: animation;
        animation: 0.67s linear ${({ mobileMenu }) => mobileMenu && slipDown};
        flex-direction: column;
        justify-content: flex-start;
        margin-top: ${({ mobileMenu }) => mobileMenu && '95px'};
        box-shadow: none;
        position: absolute;
        top: 0;
        max-width: 100vw;
        max-height: 100vh;
    }

    @media (min-height: 280px) and (max-width: 1000px) {
        margin-top: ${({ mobileMenu }) => mobileMenu && '55px'};
        font-size: 2rem;
        overflow: scroll;
    }   

    @media (max-width: 1000px) and (min-height: 1368px) {
        font-size: 2.2rem;
    }

    @media (min-height: 360px) and (max-width: 1000px) {
        margin-top: ${({ mobileMenu }) => mobileMenu && '55px'};        
    }

    @media (min-height: 720px) and (max-width: 1000px) {
        animation: 0.86s linear ${({ mobileMenu }) => mobileMenu && slipDown};
    }

    @media (min-height: 1024px) and (max-width: 1000px) {
        animation: 0.96s linear ${({ mobileMenu }) => mobileMenu && slipDown};
    }
`

export const Link = styled(ReactRouerNavLink)`
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.color.textColor};
    will-change: transition;
    transition: all linear 0.28s;

    //Mobile device
    @media (max-width: 1000px) {
        padding-left: 30px;
    }
`

export const Item = styled.li`
    width: 100%;
    height: 100%;
    max-height: 60px;
    line-height: 60px;
    cursor: pointer;
    ${({ mobileMenu }) => !mobileMenu && `
        text-align: center;
        transition: all linear 0.28s;
    `}

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

    @media (max-width: 1000px) {
        text-align: left;
        ${({ dropDown }) => dropDown && `max-height: 190px;`}

        &:hover:not(:nth-child(2)) {
            background-color: ${({ theme }) => theme.color.whiteColor};
        }

        &:hover:not(:nth-child(2)) ${Link} {
            color: ${({ theme }) => theme.color.primaryColor};
        }

        ${Link}.active {
            color: ${({ theme }) => theme.color.primaryColor};
            background-color: ${({ theme }) => theme.color.whiteColor};
        }
    }

    @media (min-height: 280px) and (max-width: 1000px) {
        line-height: 40px;
        max-height: 40px;   
    }

    @media (min-height: 360px) and (max-width: 1000px) {
        ${({ dropDown }) => dropDown && `max-height: 190px;`}
    }
`

export const NavDropDown = styled.div`
    cursor: pointer;
    position: relative;

    //Mobile device
    @media (max-width: 1000px) {
        padding-left: 30px;
        position: unset;
    }
`

export const Icon = styled.div`
    width: 100%;
    height: 100%;
    max-width: 60px;
    max-height: 60px;
    text-align: center;
    line-height: 60px;
    background-color: ${({ theme, mobileMenu }) => !mobileMenu ? theme.color.whiteColor : theme.color.primaryColor};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.radius1};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.radius1};

    & {
        font-size: 2.6rem;
        padding-top: 5px;
        color: ${({ theme, mobileMenu }) => mobileMenu && theme.color.whiteColor};
        will-change: transition;
        transition: all 0.3s linear;
    }

    @media (min-width: 280px) and (max-width: 767px) {
        max-width: 50px;
        max-height: 50px;
        line-height: 50px;
    }

    //Show icon on mobile device
    @media (max-width: 1000px) {
        display: block;
        position: absolute;
        top: 0;
        ${({ mobileMenu }) => mobileMenu && 'right: 5%;'}
        z-index: 11;
    }
    //Hidden icon on PC and Tablet device
    @media (min-width: 1001px) {
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