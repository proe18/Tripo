import styled from 'styled-components'
import { Image } from '../../GlobalStyles'

export const Inner = styled.header`
    padding-top: 272px;
    opacity: ${({hideHeader}) => hideHeader === false ? 0 : 1};

    @media (max-width: 748px) {
        padding-top: 0;
    }
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    min-height: 687px;
    position: relative;
    background: ${({bg}) => `url(${bg})`} no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed, scroll;

    @media (max-width: 748px) {
        min-height: 320px;
        background-repeat: repeat-x;
        background-attachment: unset;
        background-position-x: -7%;
    }
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    max-width: 672px;
    max-height: ${({heightBox}) => heightBox && `${heightBox}px`};
    position: absolute;
    top: -160px;
    border-radius: ${({theme}) => theme.borderRadius.radius2};
    background-color: ${({theme}) => theme.color.whiteColor};
    box-shadow: ${({theme}) => theme.shadow.boxShadow};

    @media (max-width: 748px) {
        width: 87.5%;
        top: 230px;
        min-height: ${({heightBox}) => heightBox && `${heightBox}px`};
    }
`

export const Group = styled.div`
    width: 100%;
    max-width: 568px;
    margin: 0 auto;
    padding: 51.5px 0;
    color: ${({theme}) => theme.color.textColor};

    @media (max-width: 748px) {
        width: 85%;
        padding: 30px 0;
    }
`

export const Info = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 90px;
    min-height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({theme}) => theme.borderRadius.radius2};
    box-shadow: ${({theme}) => theme.shadow.boxShadow};

    ${Image} {
        max-width: 78px;
        max-height: 78px;
        border-radius: ${({theme}) => theme.borderRadius.radius2};
    }

    @media (max-width: 640px) {
        max-width: 85px;
        min-height: 85px;

        ${Image} {
            max-width: 74px;
            max-height: 74px;
        }
    }
`

export const Heading = styled.div`
    margin-left: 22px;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 640px) {
        margin-left: 15px;
    }
`

export const Title = styled.h1`
    font-size: 2.1rem;
    margin-bottom: 2px;

    @media (max-width: 420px) {
        font-size: 1.9rem;
    }
`

export const SubTitle = styled.p`
    font-size: 1.6rem;

    @media (max-width: 420px) {
        font-size: 1.4rem;
    }
`

export const Content = styled.div``

export const Text = styled.h1`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    font-weight: 500;
    margin-top: 26px;

    @media (max-width: 720px) {
        margin-top: 15px;
    }

    @media (max-width: 420px) {
        font-size: 2rem;
    }

    @media (min-width: 421px) and (max-width: 560px) {
        font-size: 3rem;
    }

    @media (min-width: 561px) and (max-width: 640px) {
        font-size: 3.8rem;
    }

    @media (min-width: 641px) and (max-width: 720px) {
        font-size: 4.4rem;
    }
`

export const Description = styled.p`
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
    line-height: 3rem;
    margin-top: 17px;

    @media (max-width: 420px) {
        font-size: 1.6rem;
        line-height: 2.5rem;
        margin-top: 14px;
    }
`