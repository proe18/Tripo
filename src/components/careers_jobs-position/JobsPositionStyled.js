import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Image, Wrapper } from '../../GlobalStyles'
import CareersBG from '../../images/background_careers_3.jpg'
import { ButtonStyled as Button, ButtonLinkStyled as ButtonLink } from '../button/ButtonStyled'

export const Inner = styled.section`
    margin-top: 125px;

    ${Wrapper} {
        background-color: ${({ theme }) => theme.color.primaryColor};
    }

    @media (max-width: 1180px) {
        ${Wrapper} {
            width: 100%;
            max-width: 100%;
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
    color: ${({ theme }) => theme.color.whiteColor};
    &:first-child {
        opacity: 0;
        ${({ active }) => active && css`
                will-change: opacity;
                opacity: 1;
                transition: opacity linear 1.5s;
        `}
    }

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
    opacity: 0;
    transform: translateY(50px);

    ${({ active }) => active && css`
        will-change: opacity;
        transform: translateY(0);
        opacity: 1;
        transition: all linear 1s;
    `}

    ${Title} {
        opacity: 1;
    }

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

    ${ButtonLink} {
        width: 100%;
        height: 100%;
        max-width: 190px;
        max-height: 45px;
        line-height: 45px;
        margin: 40px 0 110px;
        text-align: center;
        overflow: hidden;
        background-color: ${({ theme }) => theme.color.textColor};

        &:hover {
            color: ${({ theme }) => theme.color.whiteColor};

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
    border-radius: ${({ theme }) => theme.borderRadius.radius2};

    ${Image} {
        transition: ease-in-out 0.9s;
        -moz-transition: ease-in-out 0.9s;
        -webkit-transition: ease-in-out 0.9s;
        border-radius: ${({ theme }) => theme.borderRadius.radius2};
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
    color: ${({ theme }) => theme.color.whiteColor};

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

export const Send = styled.div`
    width: 100%;
    height: 100%;
    min-height: 476px;
    background: url(${CareersBG}) no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed, scroll;

    ${Overlay} {
        width: 100%;
        height: 100%;
        max-width: 1320px;
        min-height: 476px;
        background-color: ${({ theme }) => theme.color.bgSecondColor};
    }
`

export const SubTitle = styled.h2`
    width: 100%;
    max-width: 770px;
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 320px) {
        font-size: 1.8rem;
    }
`

export const Group = styled.div`
    width: 100%;
    max-width: 1120px;
    padding-top: 125px;
    margin: 0 auto;
    color: ${({ theme }) => theme.color.whiteColor};
    text-align: left;

    ${Title} {
        padding: 15px 0 50px;
        text-align: unset;
    }

    ${Button} {
        max-width: 142px;
        max-height: 60px;
        margin: 0;
        text-align: center;
        color: ${({ theme }) => theme.color.textColor};
        background-color: ${({ theme }) => theme.color.secondColor};

        &:hover {
            background-color: ${({ theme }) => theme.color.whiteColor};
        }
    }

    ${SubTitle}, ${Title}, ${Button} {
        opacity: 0;
    }

    ${({ active }) => active && css`
        ${SubTitle} {
            will-change: opacity;
            opacity: 1;
            transition: opacity linear 1.5s 0.2s;
        }

        ${Title} {
            will-change: opacity;
            opacity: 1;
            transition: opacity linear 1.5s 0.4s;
        }

        ${Button} {
            will-change: opacity;
            opacity: 1;
            transition: opacity linear 1.5s 0.6s;
        }
    `}

    @media (max-width: 1150.5px) {
        text-align: center;

        ${SubTitle} {
            margin: 0 auto;
        }

        ${Button} {
            margin: 0 auto;
        }
    }

    @media (max-width: 640px) {
        ${Button} {
            max-height: 55px;
            line-height: 55px;
        }
    }

    @media (max-width: 404px) {
        width: 90%;
    }

    @media (min-width: 405px) and (max-width: 420px) {
        width: 80%;
    }

    @media (max-width: 499.5px) {
        ${Title} {
            padding: 20px 0;
        }
    }
`