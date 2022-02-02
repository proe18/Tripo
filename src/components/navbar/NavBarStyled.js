import styled, { keyframes } from 'styled-components'
import { NavLink as ReactRouerNavLink } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    max-width: 1320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    
    //Responsive mobile and tablet
    @media (max-width: 860px) {
        width: 90%;
        align-items: flex-start;
        ${({ mobileMenu }) => mobileMenu && `width: 100vw;`}
    }

    @media (min-width: 861px) and (max-width: 1319px) {
        width: 90%;
    }
`

export const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;

    //Responsive mobile and tablet
    @media (min-width: 641px) and (max-width: 860px) {
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
    @media (max-width: 640px) {
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
//======= ANIMATION KEYFRAMES OF NAV ========
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
//============================================

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

    //Responsive mobile and tablet
    @media (max-width: 860px) {
        max-width: 100vw;
        max-height: 100vh;
        position: absolute;
        top: 0;
        display: ${({ mobileMenu }) => !mobileMenu && 'none'};
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: none;
    }

    @media (max-width: 420px) {
        font-size: 2rem;
        margin-top: ${({ mobileMenu }) => mobileMenu && '55px'};
        will-change: animation;
        animation: 1s linear ${({ mobileMenu }) => mobileMenu && slipDown};
    }

    @media (min-width: 421px) and (max-width: 640px) {
        font-size: 2.2rem;
        margin-top: ${({ mobileMenu }) => mobileMenu && '55px'};
        will-change: animation;
        animation: 0.85s linear ${({ mobileMenu }) => mobileMenu && slipDown};
    }

    @media (min-width: 641px) and (max-width: 860px) {
        font-size: 2.4rem;
        margin-top: ${({ mobileMenu }) => mobileMenu && '65px'};
        will-change: animation;
        animation: 0.8s linear ${({ mobileMenu }) => mobileMenu && slipDown};
    }
`

export const Link = styled(ReactRouerNavLink)`
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.color.textColor};
    will-change: transition;
    transition: all linear 0.28s;

    @media (max-width: 860px) {
        padding-left: 30px;
        transition: none;
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

    //Responsive mobile and tablet
    @media (max-width: 860px) {
        text-align: left;

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

    @media (max-width: 640px) {
        line-height: 40px;
        max-height: 40px;
        ${({ dropDown }) => dropDown && `max-height: 200px;`}
    }

    @media (min-width: 641px) and (max-width: 860px) {
        line-height: 50px;
        max-height: 50px;
        ${({ dropDown }) => dropDown && `max-height: 210px;`}
    }
`

export const NavDropDown = styled.div`
    cursor: pointer;
    position: relative;

    //Responsive mobile and tablet
    @media (max-width: 860px) {
        padding-left: 30px;
        position: unset;
    }
`

export const Icon = styled.div`
    width: 100%;
    height: 100%;
    max-width: 60px;
    max-height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: ${({ theme, mobileMenu }) => !mobileMenu ? theme.color.whiteColor : theme.color.primaryColor};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.radius1};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.radius1};

    & {
        font-size: 2.8rem;
        padding-top: 5px;
        color: ${({ theme, mobileMenu }) => mobileMenu && theme.color.whiteColor};
        will-change: transition;
        transition: all 0.3s linear;
    }

    //Mobile device
    @media (max-width: 640px) {
        max-width: 50px;
        max-height: 50px;
        line-height: 50px;

        & {
            font-size: 2.6rem;
        }
    }

    //Show icon navbar
    @media (max-width: 860px) {
        display: block;
        position: absolute;
        top: 0;
        z-index: 11;
        ${({ mobileMenu }) => mobileMenu && 'right: 5%;'}
    }
    //Hidden icon navbar
    @media (min-width: 861px) {
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