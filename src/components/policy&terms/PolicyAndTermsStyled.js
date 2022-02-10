import styled from 'styled-components'
import { Wrapper } from '../../GlobalStyles'

export const Inner = styled.div``

export const Header = styled.header`
    width: 100%;
    height: 100%;
    max-height: 340px;
    background-color: ${({ theme }) => theme.color.thirdColor};

    @media (max-width: 420px) {
        max-height: 162px;
    }
`

export const Group = styled.div`
    width: 100%;
    max-width: 680px;
    margin: 115px auto 0;
    color: ${({ theme }) => theme.color.textColor};

    @media (max-width: 700px) {
        margin: 45px auto 0;
    }

    @media (max-width: 319.5px) {
        width: 85%;
    }

    @media (min-width: 320px) and (max-width: 420px) {
        max-width: 280px;
    }
`

export const Section = styled.section`
    &:first-of-type {
        margin-bottom: 93px;

        @media (max-width: 700px) {
            margin-bottom: 40px;
        }
    }

    &:last-of-type ${Group} {
        margin: 0 auto;

        @media (min-width: 421px) and (max-width: 570.5px) {
            width: 75%;
        }
    }

    &:last-of-type ${Wrapper} {
        max-height: 400px;
        background-color: ${({ theme }) => theme.color.primaryColor};

        @media (max-width: 1320px) {
            width: 100%;
            max-width: 100%;
        }
    }
`

export const Title = styled.h1`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    font-weight: 420;
    padding: 160px 0 115px;
    color: ${({ theme }) => theme.color.whiteColor};

    @media (max-width: 700px) {
        padding: 90px 0 40px;
    }

    @media (max-width: 420px) {
        font-size: 2.5rem;
    }

    @media (min-width: 421px) and (max-width: 500px) {
        font-size: 3.2rem;
    }

    @media (min-width: 501px) and (max-width: 640px) {
        font-size: 3.8rem;
    }

    @media (min-width: 641px) and (max-width: 700px) {
        font-size: 4.2rem;
    }
`

export const Text = styled.p`
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
    line-height: 3rem;

    @media (max-width: 420px) {
        font-size: 1.6rem;
        line-height: 2.5rem;
    }
`

export const Questions = styled.div`
    width: 100%;
    margin-top: 30px;

    ${Text}:first-of-type {
        margin: 0 0 28px;
    }

    ${Text}:last-of-type {
        margin-top: 20px;

        a {
            color: ${({ theme }) => theme.color.textColor}
        }

        @media (max-width: 700px) {
            margin-top: 30px;
        }
    }
`

export const ListQuestion = styled.ol`
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
    padding-left: 30px;

    @media (max-width: 420px) {
        font-size: 1.6rem;
    }
`

export const Question = styled.li`
    line-height: 3rem;

    @media (max-width: 420px) {
        line-height: 2.5rem;
    }
`

export const Description = styled.p`
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
    line-height: 3rem;
    text-align: center;
    padding: 125px 0;
    color: ${({ theme }) => theme.color.whiteColor};

    @media (max-width: 570.5px) {
        text-align: left;
        padding: 40px 0;
    }

    @media (max-width: 420px) {
        font-size: 1.6rem;
        line-height: 2.5rem;
    }
`