import styled, { css } from 'styled-components'
import { NavLink as ReactNavLink } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    max-width: 1320px;
    display: ${({ hideNavbar }) => hideNavbar ? 'flex' : 'none'};
    justify-content: space-between;
    align-items: center;
    ${({ marginTop }) => marginTop
        ? css`margin: 0 auto;`
        : css`
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
        `
    }
    opacity: ${({ navBar }) => !navBar ? 0 : 1};
    z-index: ${({ navBar }) => !navBar ? 0 : 99};
    will-change: transition, visibility;
    transition: opacity linear 0.3s;
    -moz-transition: opacity linear 0.3s;
    -o-transition: opacity linear 0.3s;
    -webkit-transition: opacity linear 0.3s;

    //Responsive mobile
    @media (max-width: 320px) {
        max-width: 280px;
    }
    
    //Responsive mobile and tablet
    @media (max-width: 860px) {
        width: 90%;
        align-items: flex-start;
        ${({ mobileMenu }) => mobileMenu
            && css`
                    width: 100vw;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                `
        }
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

    @media (max-width: 860px) {
        border-bottom-left-radius: ${({ theme }) => theme.borderRadius.radius1};
        border-bottom-right-radius: ${({ theme }) => theme.borderRadius.radius1};
        position: relative;
        background-color: ${({ theme }) => theme.color.whiteColor};
    }

    //Responsive mobile and tablet
    @media (min-width: 641px) and (max-width: 860px) {
        ${({ mobileMenu }) => !mobileMenu
            && css`
                max-width: 60px;
                min-height: 60px;
            `
        }
    }
    
    //Mobile device
    @media (max-width: 640px) {
        ${({ mobileMenu }) => !mobileMenu
            && css`
                max-width: 50px;
                min-height: 50px;
            `
        }
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

    //Responsive mobile and tablet
    @media (max-width: 860px) {
        max-width: 100vw;
        max-height: 100vh;
        position: absolute;
        top: 0;
        display: ${({ mobileMenu }) => mobileMenu ? 'flex' : 'none'};
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: none;
        will-change: transform, transition;
        transform: translateY(-80%);
        opacity: 0;
        ${({ mobileMenu }) => mobileMenu && css`
            transform: translateY(0);
            opacity: 1;
        `}
        transition: transform linear 0.8s;
    }

    @media (max-width: 420px) {
        font-size: 2rem;
        margin-top: ${({ mobileMenu }) => mobileMenu && '55px'};
    }

    @media (min-width: 421px) and (max-width: 640px) {
        font-size: 2.2rem;
        margin-top: ${({ mobileMenu }) => mobileMenu && '55px'};
    }

    @media (min-width: 641px) and (max-width: 860px) {
        font-size: 2.4rem;
        margin-top: ${({ mobileMenu }) => mobileMenu && '65px'};
    }
`

export const Link = styled(ReactNavLink)`
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.color.textColor};
    will-change: transition;
    transition: all linear 0.28s;
    -moz-transition: all ease-in-out 0.28s;
    -o-transition: all ease-in-out 0.28s;
    -webkit-transition: all ease-in-out 0.28s;
    
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

    span {
        display: block;
        will-change: transition;
        transition: all linear 0.28s;
        -moz-transition: all ease-in-out 0.28s;
        -o-transition: all ease-in-out 0.28s;
        -webkit-transition: all ease-in-out 0.28s;

        &:last-child {
            @media (max-width: 860px) {
                padding-left: 30px;
                transition: none;
            }
        }
    }

    ${({ mobileMenu }) => !mobileMenu && css`
        text-align: center;
        will-change: transition;
        transition: all linear 0.28s;
        -moz-transition: all ease-in-out 0.28s;
        -o-transition: all ease-in-out 0.28s;
        -webkit-transition: all ease-in-out 0.28s;
    `}

    ${Link}.active {
        color: ${({ theme }) => theme.color.whiteColor};
        background-color: ${({ theme }) => theme.color.primaryColor};
    }

    ${({ active }) => active === false && css`
        &:first-child span {
            color: ${({ theme }) => theme.color.whiteColor};
            background-color: ${({ theme }) => theme.color.primaryColor};
        }
    `}

    ${({ active }) => active === true && css`
        &:last-child span {
            color: ${({ theme }) => theme.color.whiteColor};
            background-color: ${({ theme }) => theme.color.primaryColor};
        }
    `}

    &:hover:not(:nth-child(2)) {
        background-color: ${({ theme }) => theme.color.primaryColor};
    }
    
    &:hover:not(:nth-child(2)) ${Link} {
        color: ${({ theme }) => theme.color.whiteColor};
    }

    &:last-child:hover span, &:first-child:hover span {
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

        ${({ active }) => active === false && css`
            &:first-child span {
                color: ${({ theme }) => theme.color.primaryColor};
                background-color: ${({ theme }) => theme.color.whiteColor};
            }
        `}

        ${({ active }) => active === true && css`
            &:last-child span {
                color: ${({ theme }) => theme.color.primaryColor};
                background-color: ${({ theme }) => theme.color.whiteColor};
            }
        `}
    }

    @media (max-width: 640px) {
        line-height: 40px;
        max-height: 40px;
        max-height: ${({ dropDown }) => dropDown && '200px'};
    }

    @media (min-width: 641px) and (max-width: 860px) {
        line-height: 50px;
        max-height: 50px;
        max-height: ${({ dropDown }) => dropDown && '210px'};
    }
`

export const NavDropDown = styled.div`
    cursor: pointer;
    position: relative;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;

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
        -moz-transition: all ease-in-out 0.3s;
        -o-transition: all ease-in-out 0.3s;
        -webkit-transition: all ease-in-out 0.3s;
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
        
    }

    @media (max-width: 280px), 
    (min-width: 321px) and (max-width: 860px) {
        right: ${({ mobileMenu }) => mobileMenu && '5%'};
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