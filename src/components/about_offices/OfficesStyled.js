import styled, { css } from 'styled-components'
import { ButtonLinkStyled as Button } from '../button/ButtonStyled'
import OfficesBg from '../../images/background_about_2.jpg'

const maxHeight = '800px'

export const Background = styled.section`
    width: 100%;
    height: 100%;
    max-height: ${maxHeight};
    margin-top: 100px;
    background: url(${OfficesBg}) no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed, scroll;

    @media (max-width: 880px) {
        margin-top: 0;
        max-height: calc(${maxHeight} * 2);
    }
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    max-height: ${maxHeight};
    background-color: ${({ theme }) => theme.color.bgPrimaryColor};

    @media (max-width: 880px) {
        max-height: calc(${maxHeight} * 2);
    }
`

export const Heading = styled.div`
    width: 100%;
    max-width: 390px;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.whiteColor};

    @media (min-width: 432px) and (max-width: 880px) {
        max-width: 100%;
    }
`

export const SubTitle = styled.h2`
    font-size: 2.1rem;
    
    @media (max-width: 420px) {
        font-size: 1.8rem;
    }
`

export const Title = styled.h1`
    font-size: 5rem;
    font-weight: 500;
    font-family: 'Suez One', serif;
    margin: 14px 0 18px;

    @media (max-width: 420px) {
        font-size: 2.6rem;
    }

    @media (min-width: 421px) and (max-width: 540px) {
        font-size: 3.4rem;
    }

    @media (min-width: 541px) and (max-width: 640px) {
        font-size: 4.2rem;
    }
`

export const Text = styled.p`
    font-size: 1.8rem;
    line-height: 3rem;

    @media (max-width: 420px) {
        font-size: 1.6rem;
    }
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    max-width: 390px;
    max-height: 395px;
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    background-color: ${({ theme }) => theme.color.whiteColor};

    @media (max-width: 880px) {
        max-height: max-content;
        margin: 53px auto 0;
    }
`

export const Group = styled.div`
    width: 100%;
    max-width: 1155px;
    margin: 0 auto;
    padding: 205px 0 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Heading}, ${Box} {
        opacity: 0;
        transform: translateX(-50px);
        transition: all linear 1.5s;

        ${({ active }) => active && css`
            will-change: opacity, transform;
            opacity: 1;
            transform: translateX(0);
        `}
    }

    @media (max-width: 880px) {
        display: block;
        padding: 50px 0 40px;

        ${Heading}, ${Box} {
            transform: translateY(100px);
            transition: all linear 0.8s;
        }
        
        ${({ active }) => active && css`
            ${Heading} {
                transform: translateY(0);
            }

            ${Box} {
                transform: translateY(0);
                transition-delay: 0.3s;
            }
        `}
    }
`

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 252px;
    max-height: 159px;
    position: absolute;
    top: -55px;
    left: 35%;
    transform: translateX(-35%);

    @media (max-width: 880px) {
        position: unset;
        margin: 0 auto;
        padding-top: 35px;
        transform: none;
    }

    @media (max-width: 350.5px) {
        max-width: 180px;
        max-height: 117px;
    }

    @media (min-width: 351px) and (max-width: 400px) {
        max-width: 200px;
        max-height: 127px;
    }

    @media (min-width: 401px) and (max-width: 420px) {
        max-width: 230px;
        max-height: 146px;
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 298px;
    margin: 141px auto 44px;
    color: ${({ theme }) => theme.color.textColor};

    ${Title} {
        font-size: 2.1rem;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;
        margin: 0 0 21px;
    }

    ${Text} {
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        line-height: 2.5rem;
        margin-bottom: 29px;
    }

    ${Button} {
        max-width: 203px;
        text-align: center;
        margin: 0;
        background-color: ${({ theme }) => theme.color.textColor};

        &:hover {
            color: ${({ theme }) => theme.color.whiteColor};
            background-color: ${({ theme }) => theme.color.primaryColor};
        }
    }

    @media (max-width: 880px) {
        text-align: center;
        margin: 25px auto 0;
        padding-bottom: 38px;

        ${Title} {
            margin: 0 auto 30px;
            padding-top: 25px;
        }

        ${Button} {
            margin: 0 auto;
        }
    }

    @media (max-width: 350.5px) {
        max-width: 213px;

        ${Title} {
            max-width: 171px;
            font-size: 1.8rem;
        }

        ${Button} {
            max-width: 195px;
            max-height: 55px;
        }
    }
`