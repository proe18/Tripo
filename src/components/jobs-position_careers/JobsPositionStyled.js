import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Image, Wrapper } from '../../GlobalStyles'
import { ButtonLinkStyled as Button } from '../button/ButtonStyled'

export const Inner = styled.section`
    margin-top: 125px;

    ${Wrapper} {
        background-color: ${({theme}) => theme.color.primaryColor};
    }

    @media (max-width: 1180px) {
        ${Wrapper} {
            width: 100%;
        }
    }

    @media (max-width: 640px) {
        margin-top: 40px;
    }
`

export const Title = styled.h1`
    text-align: center;
    font-size: 5rem;
    font-family: 'Suez One', serif;
    font-weight: 500;
    padding: 100px 0 75px;
    color: ${({theme}) => theme.color.whiteColor};

    @media (max-width: 640px) {
        font-size: 2.6rem;
        padding: 50px 0;
    }
`

export const ListJob = styled.ul`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1150.5px) {
        flex-wrap: wrap;
    }

    @media (max-width: 540px) {
        justify-content: center;
    }

    @media (min-width: 541px) and (max-width: 1150.5px) {
        justify-content: space-around;
    }
`

export const Overlay = styled.span`
    display: block;
    width: 100%;
    height: 100%;
    max-width: 190px;
    max-height: 45px;
`

export const Position = styled.li`
    width: 100%;
    max-width: 250px;

    ${Button} {
        width: 100%;
        height: 100%;
        max-width: 190px;
        max-height: 45px;
        line-height: 45px;
        margin: 40px 0 110px;
        text-align: center;
        overflow: hidden;
        background-color: ${({theme}) => theme.color.textColor};

        &:hover {
            color: ${({theme}) => theme.color.whiteColor};

            ${Overlay} {
                background-color: rgba(255,255,255,0.1);
            }
        }

        @media (max-width: 959.5px) {
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media (min-width: 320px) and (max-width: 540px) {
        max-width: 280px;
    }

    @media (min-width: 750px) and (max-width: 899.5px) {
        max-width: 300px;
    }

    @media (min-width: 900px) and (max-width: 959.5px) {
        max-width: 320px;
    }
`

export const Wrap = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;
    border-radius: ${({theme}) => theme.borderRadius.radius2};

    ${Image} {
        will-change: transition;
        transition: ease-in-out 0.9s;
        -moz-transition: ease-in-out 0.9s;
        -webkit-transition: ease-in-out 0.9s;
        border-radius: ${({theme}) => theme.borderRadius.radius2};
    }

    &:hover ${Image} {
        will-change: transform;
        transform: scale(1.1);
        -ms-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
    }

    @media (min-width: 320px) and (max-width: 540px) {
        max-width: 280px;
        max-height: 280px;
    }

    @media (min-width: 750px) and (max-width: 899.5px) {
        max-width: 300px;
        max-height: 300px;
    }

    @media (min-width: 900px) and (max-width: 959.5px) {
        max-width: 320px;
        max-height: 320px;
    }
`

export const Content = styled.div`
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    margin-top: 20px;
    color: ${({theme}) => theme.color.whiteColor};

    ${Title} {
        font-size: 2.1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        text-align: left;
        padding: 0;
    }

    @media (max-width: 959.5px) {
        text-align: center;

        ${Title} {
            text-align: unset;
        }
    }
`

export const Place = styled.p`
    margin: 5px 0 20px;
`

export const Text = styled.p`
    line-height: 2.3rem;
`