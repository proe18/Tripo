import styled from 'styled-components'
import { Link, PlatForms, Image } from '../../GlobalStyles'
import BackGround from '../../images/background_home_3.jpg'

export const Background = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1150px;
    max-height: 1100px;
    margin: 0 auto;
    background: url(${BackGround}) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 115px;

    & > ${Image} {
        width: 100%;
        height: 100%;
        max-width: 270px;
        max-height: 300px;
        object-fit: cover;
        margin-top: -415px;
    }
`

export const Heading = styled.div`
    margin-top: 205px;
    text-align: center;
    color: ${({ theme }) => theme.color.textColor};
`

export const Title = styled.h1`
    font-size: 5rem;
    font-weight: 500;
    font-family: 'Suez One', serif;
`

export const Text = styled.p`
    width: 100%;
    max-width: 720px;
    line-height: 3rem;
    margin: 0 auto;
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
`

export const Game = styled.div`
    width: 100%;
    height: 100%;
    max-width: 390px;
    max-height: 379px;
    padding: 45px 56px;
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    background-color: ${({ theme }) => theme.color.whiteColor};

    &:not(:last-child) {
        margin-bottom: 415px;
    }

    ${Heading} {
        width: 100%;
        max-width: 270px;
        margin: 0 auto 35px;
        display: flex;
        align-items: center;
        text-align: left;
    }

    ${PlatForms} {
        width: 100%;
        height: 100%;
        max-width: 280px;
        max-height: 40px;

        ${Link} {
            width: 100%;
            height: 100%;
            min-height: 40px;
            cursor: pointer;
        }

        ${Link}:first-of-type {
            max-width: 120px;
        }

        ${Link}:last-of-type {            
            max-width: 137px;
        }
    }
`

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 90px;
    min-height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
`

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    max-width: 78px;
    max-height: 78px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
`

export const Info = styled.div`
    margin-left: 20px;

    ${Title} {
        font-size: 2.1rem;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;
    }

    ${Text} {
        font-size: 1.6rem;
    }
`

export const Description = styled.p`
    width: 100%;
    min-width: 280px;
    margin-bottom: 35px;
    font-size: 1.6rem;
    line-height: 2.5rem;
`