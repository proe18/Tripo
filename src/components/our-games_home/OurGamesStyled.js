import styled from 'styled-components'
import { Link, PlatForms, Image } from '../../GlobalStyles'
import BackGround from '../../images/background_home_3.jpg'

export const Background = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1150px;
    max-height: 1100px;
    margin: 115px auto 0;
    background: url(${BackGround}) no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    & > ${Image} {
        width: 100%;
        height: 100%;
        max-width: 270px;
        max-height: 300px;
        object-fit: cover;
        margin-top: -415px;
    }

    @media (max-width: 280px) {
        max-width: 252px;
        margin-top: 70px;
        /* background-size: contain; */
        background: none;

        & > ${Image} {
            max-width: 185px;
            max-height: 200px;
            margin: 20px auto 0;
        }
    }
`

export const Heading = styled.div`
    margin-top: 205px;
    text-align: center;
    color: ${({ theme }) => theme.color.textColor};
    
    @media (max-width: 280px) {
        margin-top: 140px;
    }
`

export const Title = styled.h1`
    font-size: 5rem;
    font-weight: 500;
    font-family: 'Suez One', serif;

    @media (max-width: 280px) {
        font-size: 2.6rem;
        margin-bottom: 35px;
    }
`

export const Text = styled.p`
    width: 100%;
    max-width: 720px;
    line-height: 3rem;
    margin: 0 auto;
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 280px) {
        font-size: 1.6rem;
    }
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

        @media (max-width: 280px) {
            margin-bottom: 20px;
        }
    }

    ${Heading} {
        width: 100%;
        max-width: 270px;
        margin: 0 auto 35px;
        display: flex;
        align-items: center;
        text-align: left;

        @media (max-width: 280px) {
            min-width: 180px;
            margin-bottom: 10px;
        }
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

            @media (max-width: 280px) {
                ${Image} {
                    min-height: 32px;
                    object-fit: contain;
                }
            }
        }

        ${Link}:first-of-type {
            max-width: 120px;

            @media (max-width: 280px) {
                max-width: 80px;
            }
        }

        ${Link}:last-of-type {            
            max-width: 137px;
            
            @media (max-width: 280px) {
                max-width: 90px;
            }
        }

        @media (max-width: 280px) {
            max-width: 180px;
            max-height: 32px;
        }
    }

    @media (max-width: 280px) {
        max-height: 356px;
        padding: 25px 36px;
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

    @media (max-width: 280px) {
        max-width: 80px;
        min-height: 80px;
    }
`

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    max-width: 78px;
    max-height: 78px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};

    @media (max-width: 280px) {
        max-width: 70px;
        max-height: 70px;
    }
`

export const Info = styled.div`
    margin-left: 20px;

    ${Title} {
        font-size: 2.1rem;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;

        @media (max-width: 280px) {
            font-size: 1.9rem;
            margin-bottom: 0;

            &:last-of-type {
                font-size: 1.5rem;
            }
        }
    }

    ${Text} {
        font-size: 1.6rem;

        @media (max-width: 280px) {
            font-size: 1.4rem;

            &:last-of-type {
                font-size: 1.1rem;
            }
        }
    }

    @media (max-width: 280px) {
        margin-left: 10px;
    }
`

export const Description = styled.p`
    width: 100%;
    min-width: 280px;
    margin-bottom: 35px;
    font-size: 1.6rem;
    line-height: 2.5rem;

    @media (max-width: 280px) {
        min-width: 180px;
        margin-bottom: 20px;
        text-align: center;
    }
`