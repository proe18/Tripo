import styled, { css } from 'styled-components'
import { Image, Wrapper } from '../../GlobalStyles'
import { ButtonLinkStyled as ButtonLink } from '../button/ButtonStyled'
import JoinTeam_1Bg from '../../images/background_home_2.jpg'
import JoinTeam_2Bg from '../../images/background_careers_3.jpg'

export const Inner = styled.section`
    width: 100%;
    height: 100%;
    margin-top: 275px;
    position: relative;

    ${Wrapper} {
        height: 100%;
        max-height: 747px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        @media (max-width: 940px) {
            max-height: 500px;
        }
    }

    @media (max-width: 640px) {
        margin-top: ${({ marginTop }) => `${marginTop / 3}px`};
    }

    @media (min-width: 641px) and (max-width: 699.5px) {
        margin-top: ${({ marginTop }) => `${marginTop / 2.5}px`};
    }
`

export const Background = styled.div``

export const WrapSection = styled.div`
    ${Background} {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed, scroll;

        @media (max-width: 640px) {
            background-position: center;
        }

        @media (max-width: 1000px) {
            background-attachment: unset;
        }
    }

    &:first-child ${Background} {
        min-height: 747px;
        background-image: url(${JoinTeam_1Bg});
    }

    &:last-child ${Background} {
        min-height: 600px;
        background-image: url(${JoinTeam_2Bg});
    }

    @media (max-width: 940px) {
        &:first-child ${Background} {
            min-height: 500px;
        }

        &:last-child ${Background} {
            min-height: 1165px;
        }
    }
`

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 488px;
    max-height: 414px;
    position: absolute;
    bottom: 0;
    right: 38px;
    overflow: hidden;

    @media (max-width: 390.5px) {
        max-width: 240px;
        max-height: 200px;
    }

    @media (min-width: 391px) and (max-width: 420px) {
        max-width: 270px;
        max-height: 230px;
    }

    @media (min-width: 421px) and (max-width: 1000px) {
        max-width: 300px;
        max-height: 260px;
    }

    @media (min-width: 1001px) and (max-width: 1180px) {
        max-width: 350px;
        max-height: 300px;
    }

    @media (max-width: 940px) {
        left: 50%;
        transform: translateX(-50%);
    }
`

export const Group = styled.div`
    width: 100%;
    height: 100%;
    max-height: 747px;

    ${Image} {
        transform: ${({ heightImage }) => `translateY(${heightImage}px)`};
        transition: transform linear 0.9s;

        ${({ active }) => active && css`
            will-change: opacity, transform;
            transform: translateY(0);
        `}
    }
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 600px;
    position: absolute;
    top: 747px;
    background-color: ${({ theme }) => theme.color.bgSecondColor};

    ${Group} {
        max-height: 600px;
        position: relative;
    }

    @media (max-width: 940px) {
        max-height: 1165px;
        top: 500px;
    }
`

export const Title = styled.h1`
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 420px) {
        font-size: 1.8rem;
    }
`

export const Text = styled.p`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    margin: 15px 0;

    @media (max-width: 570.5px) {
        margin: 15px 0 25px;
    }

    @media (max-width: 297.8px) {
        font-size: 2.4rem;
    }

    @media (min-width: 298px) and (max-width: 323.5px) {
        font-size: 2.6rem;
    }

    @media (min-width: 324px) and (max-width: 570.5px) {
        font-size: 2.9rem;
    }

    @media (min-width: 571px) and (max-width: 704px) {
        font-size: 4rem;
    }
`

export const Heading = styled.div`
    width: 100%;
    max-width: 770px;
    color: ${({ theme }) => theme.color.whiteColor};
    position: absolute;
    top: 115px;

    ${ButtonLink} {
        margin: 0;
        max-width: 150px;
        text-align: center;
        color: ${({ theme }) => theme.color.textColor};
        background-color: ${({ theme }) => theme.color.secondColor};

        &:hover {
            background-color: ${({ theme }) => theme.color.whiteColor};
        }

        @media (max-width: 940px) {
            max-width: 140px;
            max-height: 50px;
            line-height: 50px;
            font-size: 1.5rem;
        }
    }

    & {
        ${Title}, ${Text}, ${ButtonLink} {
            opacity: 0;
            transition: opacity linear 1.5s;
        }
    }

    ${({ active }) => active && css`
        ${Title} {
            will-change: opacity;
            opacity: 1;
            transition-delay: 0.2s;
        }

        ${Text} {
            will-change: opacity;
            opacity: 1;
            transition-delay: 0.4s;
        }

        ${ButtonLink} {
            will-change: opacity;
            opacity: 1;
            transition-delay: 0.6s;
        }
    `}

    @media (max-width: 940px) {
        top: 40px;
    }
`