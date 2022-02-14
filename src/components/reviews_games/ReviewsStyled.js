import styled from 'styled-components'
import { Wrapper } from '../../GlobalStyles'

export const Inner = styled.section`
    margin-top: 95px;

    @media (max-width: 640px) {
        margin-top: 50px;
    }

    @media (max-width: 440px) {
        ${Wrapper} {
            width: 100%;
            max-width: 100%;
        }
    }
`

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 55px;

    @media (max-width: 840px) {
        display: block;
    }
`

export const Text = styled.p`
    font-size: 1.6rem;
    line-height: 2.5rem;
    font-family: 'Roboto', sans-serif;
`

export const Heading = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({ theme }) => theme.color.textColor};

    ${Group} {
        width: 100%;
        height: 100%;
        max-width: 178px;
        min-height: 41px;
        margin: 0 auto;
        border-radius: 50px;
        background-color: ${({ theme }) => theme.color.primaryColor};
    }

    ${Text} {
        width: 100%;
        height: 100%;
        max-width: 135px;
        min-height: 35px;
        line-height: 35px;
        text-align: center;
        border-radius: 50px;
        margin: 0 3.2px 0.5px 0;
        background-color: ${({ theme }) => theme.color.whiteColor};
    }

    @media (max-width: 840px) {
        justify-content: center;
        ${Group} {
            display: flex;
        }
    }
 
    @media (max-width: 600px) {
        flex-wrap: wrap;
        flex-direction: column-reverse;
    }
`

export const Rating = styled.div`
    width: 100%;
    height: 100%;
    max-width: 250px;
    min-height: 100px;
    display: flex;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    background-color: ${({ theme }) => theme.color.whiteColor};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
`

export const Icon = styled.div`
    font-size: 1.8rem;
    padding-top: 5px;
    margin-left: 12px;
    color: ${({ theme }) => theme.color.whiteColor};
`

export const Title = styled.h1`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    font-weight: 500;
    margin-left: 50px;

    @media (max-width: 540px) {
        font-size: 3rem;
    }

    @media (min-width: 541px) and (max-width: 580px) {
        font-size: 3.5rem;
    }

    @media (min-width: 581px) and (max-width: 600px) {
        font-size: 4rem;
    }

    @media (max-width: 600px) {
        margin: 0 0 30px;
    }
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    max-width: 440px;
    min-height: 357px;
    padding-top: 95px;
    border: 1px solid #000;

    @media (max-width: 840px) {
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 1px solid #000;
        min-height: 200px;
        padding-top: 40px;
        margin: 0 auto;

        &:nth-of-type(2) {
            min-height: 250px;
        }

        &:last-of-type {
            border: none;
        }
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 241px;
    margin: 0 auto;

    @media (max-width: 640px) {
        width: 85%;
    }

    @media (max-width: 840px) {
        max-width: 100%;
    }
`

export const Name = styled.p`
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    margin-top: 25px;

    @media (max-width: 640px) {
        font-size: 1.9rem;
    }
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    max-height: 735px;
    margin-top: 100px;
    background: ${({ bg }) => `url(${bg})`} no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed, scroll;

    @media (max-width: 840px) {
        margin: 0;
    }
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    max-height: 735px;
    background-color: ${({ theme }) => theme.color.bgPrimaryColor};

    ${Content} {
        width: 100%;
        max-width: 763px;
        text-align: center;
        padding: 185px 0;
        color: ${({ theme }) => theme.color.whiteColor};

        @media (max-width: 640px) {
            width: 85%;
            margin: 0 auto;
            padding: 50px 0;
        }
    }

    ${Title} {
        max-width: 602.1px;
        margin: 0 auto 20px;

        @media (max-width: 640px) {
            font-size: 2.6rem;
        }
    }

    ${Text} {
        max-width: 587px;
        font-size: 1.8rem;
        line-height: 3rem;
        margin: 0 auto;

        @media (max-width: 640px) {
            font-size: 1.6rem;
        }
    }
`

export const SubTitle = styled.h2`
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 640px) {
        font-size: 1.8rem;
        margin-bottom: 8px;
    }
`

export const BoxPlatForms = styled.div`
    width: 100%;
    height: 100%;
    max-width: 568px;
    max-height: 222px;
    margin: 80px auto 0;
    padding: 45px 0;
    text-align: center;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    background-color: ${({ theme }) => theme.color.whiteColor};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};

    ${Title} {
        color: ${({ theme }) => theme.color.textColor};
        margin: 0 0 30px;

        @media (max-width: 400px) {
            margin: 0 0 5px;
        }

        @media (min-width: 401px) and (max-width: 540px) {
            font-size: 3.5rem;
        }
    }

    @media (max-width: 400px) {
        max-height: 144px;
        padding: 35px 0;
    }

    @media (max-width: 320px) {
        max-width: 280px;
    }

    @media (min-width: 321px) and (max-width: 640px) {
        width: 90%;
        margin: 40px auto 0;
    }
`

export const Wrap = styled.a`
    width: 100%;
    height: 100%;
    max-height: 45px;

    @media (max-width: 400px) {
        max-height: 35px;
    }
`

export const Platforms = styled.div`
    width: 100%;
    max-width: 307px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Wrap}:first-of-type {
        max-width: 135px;

        @media (max-width: 400px) {
            max-width: 105px;
        }
    }

    ${Wrap}:last-of-type {
        max-width: 152px;

        @media (max-width: 400px) {
            max-width: 117px;
        }
    }

    @media (max-width: 400px) {
        max-width: 232px;
    }
`