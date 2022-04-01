import styled, { css } from 'styled-components'
import { Image } from '../../GlobalStyles'
import { ButtonLinkStyled as ButtonLink } from '../button/ButtonStyled'

export const Inner = styled.section`
    margin-top: 410px;
    
    @media (max-width: 320px) {
        margin-top: ${({ marginTop }) => `${marginTop - 30}px`}
    }

    @media (min-width: 321px) and (max-width: 420px) {
        margin-top: ${({ marginTop }) => `${marginTop}px`}
    }

    @media (min-width: 421px) and (max-width: 450.5px) {
        margin-top: ${({ marginTop }) => `${marginTop - 150}px`}
    }

    @media (min-width: 451px) and (max-width: 528px),
    (min-width: 641px) and (max-width: 768px) {
        margin-top: ${({ marginTop }) => `${marginTop - 130}px`}
    }

    @media (min-width: 529px) and (max-width: 640px) {
        margin-top: ${({ marginTop }) => `${marginTop - 175}px`}
    }

    @media (min-width: 769px) and (max-width: 1319px) {
        margin-top: ${({ marginTop }) => `${marginTop - 230}px`}
    }

    @media (min-width: 1001px) and (max-width: 1319px) {
        margin-top: ${({ marginTop }) => `${marginTop - 115}px`}
    }
`

export const Title = styled.h1`
    width: 100%;
    max-width: 808px;
    margin: 0 auto;
    font-size: 5rem;
    font-weight: 500;
    font-family: 'Suez One', serif;

    @media (max-width: 394px) {
        font-size: 2.6rem;
    }

    @media (min-width: 395px) and (max-width: 719px) {
        font-size: 3rem;
    }

    @media (min-width: 541px) and (max-width: 719px) {
        max-width: 500px;
    }
`

export const SubTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 2.1rem;
    font-family: "Roboto", sans-serif;

    @media (max-width: 394px) {
        font-size: 1.8rem;
    }

    @media (min-width: 395px) and (max-width: 719px) {
        font-size: 2rem;
    }
`

export const Text = styled.p`
    width: 100%;
    max-width: 720px;
    line-height: 2.8rem;
    margin: 20px auto 40px;
    font-size: 1.8rem;
    font-family: "Roboto", sans-serif;

    @media (max-width: 394px) {
        font-size: 1.6rem;
    }
`

export const Heading = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.color.textColor};

    ${ButtonLink} {
        max-width: 142px;
        
        &:hover {
            outline: 1px solid;
        }

        @media (max-width: 394px) {
            max-width: 140px;
            max-height: 55px;
            line-height: 55px;
        }
    }

    & {
        ${Title}, ${SubTitle}, ${Text}, ${ButtonLink} {
            opacity: 0;
        }
    }
    
    ${({ active }) => active && css`
        ${SubTitle} {
            will-change: opacity, transition;
            opacity: 1;
            transition: opacity linear 1.5s;
        }

        ${Title} {
            will-change: opacity, transition;
            opacity: 1;
            transition: opacity linear 1.5s 0.2s;
        }

        ${Text} {
            will-change: opacity, transition;
            opacity: 1;
            transition: opacity linear 1.5s 0.4s;
        }

        ${ButtonLink} {
            will-change: opacity, transition;
            opacity: 1;
            transition: opacity linear 1.5s 0.6s;
        }
    `}
`

export const Wrap = styled.div`
    max-width: 698px;
    max-height: 398px;
    margin: 65px auto 0;
    position: relative;

    ${Image} {
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    opacity: 0;
    &:first-of-type {
        transform: translateY(50px);
    }

    ${({active}) => active && css`
        will-change: opacity, transition;
        &:first-of-type {
            opacity: 1;
            transform: translateY(0);
            transition: all linear 0.8s;
        }

        &:last-of-type {
            opacity: 1;
            transition: opacity linear 1.5s;
        }
    `}

    &:last-of-type {
            max-width: 229px;
            max-height: 247px;
            border-radius: unset;
            position: absolute;
            bottom: -50px;
            left: -90px;

            @media (max-width: 1000px) {
                bottom: -85px;
                left: 50%;
                transform: translateX(-50%); 
            }

            @media (max-width: 389px) {
                max-width: 120px;
                max-height: 130px;
            }

            @media (min-width: 390px) and (max-width: 415px) {
                max-width: 150px;
                max-height: 165px;
            }

            @media (min-width: 416px) and (max-width: 540px) {
                max-width: 180px;
                max-height: 195px;
            }
        }
    }

    @media (max-width: 394px) {
        max-height: 233px;
    }
`