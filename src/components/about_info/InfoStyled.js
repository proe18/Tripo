import styled, { css } from 'styled-components'
import { Wrapper } from '../../GlobalStyles'
import InfoBg from '../../images/background_about_1.jpg'

const maxHeight = '860px'

export const Background = styled.section`
    width: 100%;
    height: 100%;
    max-height: ${maxHeight};
    background: url(${InfoBg}) no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed, scroll;

    @media (max-width: 866.5px) {
        max-height: calc(${maxHeight} * 2);
    }
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    max-height: ${maxHeight};
    background-color: ${({ theme }) => theme.color.overlayAbout};

    ${Wrapper} {
        padding: 136px 0 132px;
    }

    @media (max-width: 866.5px) {
        ${Wrapper} {
            padding: 40px 0;
        }
        max-height: calc(${maxHeight} * 2);
    }
`

export const Title = styled.h1`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    font-weight: 500;
    text-align: center;
    margin-bottom: 54px;
    color: ${({ theme }) => theme.color.textColor};
    opacity: 0;
    transition: opacity linear 1.5s;

    ${({ active }) => active && css`
        will-change: opacity;
        opacity: 1;
    `}

    @media (max-width: 639.5px) {
        font-size: 2.6rem;
    }

    @media (min-width: 640px) and (max-width: 700px) {
        font-size: 3.8rem;
    }

    @media (min-width: 701px) and (max-width: 800px) {
        font-size: 4.3rem;
    }

    @media (max-width: 866.5px) {
        margin: 0;
    }
`

export const Box = styled.div`
    width: 100%;
    max-width: 390px;
    padding: 40px;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    background-color: ${({ theme }) => theme.color.whiteColor};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};

    ${Title} {
        opacity: 1;
    }

    &:last-of-type {
        width: 100%;
        max-width: 820px;
        margin-top: 42px;

        @media (min-width: 434px) and (max-width: 866.5px) {
            max-width: 390px;
        }
    }

    @media (min-width: 434px) and (max-width: 866.5px) {
        margin: 0 auto;
    }

    @media (max-width: 866.5px) {
        padding: 40px 30px;
        margin-top: 40px;

        &:first-of-type {
            margin-top: 20px;
        }
    }
`

export const Group = styled.div`
    width: 100%;
    max-width: 820px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    ${Box} {
        opacity: 0;
        transform: translateX(-50px);
        transition: all linear 0.8s;

        ${({ active }) => active && css`
            will-change: opacity, transform;
            &:first-of-type, :nth-child(2) {
                opacity: 1;
                transform: translateX(0);
            }

            &:last-of-type {
                opacity: 1;
                transform: translateX(0);
                transition-delay: 0.4s;
            }
        `}
    }

    @media (max-width: 866.5px) {
        display: block;

        ${Box} {
            transform: translateY(50px);

            ${({ active }) => active && css`
                &:first-of-type, :nth-child(2) {
                    transform: translateY(0);
                }

                &:last-of-type {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}
        }
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 310px;
    
    ${Title} {
        font-size: 3.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        padding: 0;
        margin: 0;
        text-align: left;
        color: ${({ theme }) => theme.color.primaryColor};

        @media (max-width: 639.5px) {
            font-size: 2.2rem;
            text-align: center;
        }
    }

    &:last-of-type {
        width: 100%;
        max-width: 820px;
    }

    @media (max-width: 639.5px) {
        text-align: center;
    }
`

export const Text = styled.p`
    font-size: 1.6rem;
    line-height: 2.48rem;
    font-family: 'Roboto', sans-serif;
    margin-top: 20px;
`