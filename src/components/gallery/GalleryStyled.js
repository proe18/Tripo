import styled, { css } from 'styled-components'
import { Image } from '../../GlobalStyles'

export const ButtonIcon = styled.div`
    font-size: 3rem;
    font-weight: 300;
    cursor: pointer;
`

export const Icons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 640px) {
        padding-top: 50px;

        ${ButtonIcon}:first-child {
            display: none;
        }
    }

    @media (max-height: 640px) {
        padding-top: 0;
    }

    @media (max-height: 640px) {
        ${ButtonIcon}:first-child {
            display: none;
        }
    }

    @media (max-width: 500px) {
        ${ButtonIcon}:last-child {
            display: flex;
            margin-left: 85%;
        }
    }

    @media (max-height: 640px) {
        padding-right: 5%;
        position: absolute;

        ${ButtonIcon}:last-child {
            width: 100%;
            height: 100%;
            min-width: 60px;
            min-height: 60px;
            margin-left: 93%;
            margin-top: 2.5%;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
        }
    }

    @media (min-width: 501px) and (max-width: 640px) {
        ${ButtonIcon}:last-child {
            display: flex;
            margin-left: 89%;
        }
    }
`

export const Control = styled(Icons)`
    max-width: 97.5%;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);

    ${ButtonIcon} {
        &:last-of-type {
            margin-left: 100%;
        }
    }

    @media (max-width: 640px) {
        display: none;
    }

    @media (max-height: 640px) {
        display: none;
    }

    @media (min-width: 641px) and (max-width: 740px) {
        max-width: 95%;
    }

    @media (min-width: 741px) and (max-width: 860px) {
        max-width: 96%;
    }

    @media (min-width: 861px) and (max-width: 1024px) {
        max-width: 97%;
    }
`

export const Slider = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1025px;
    max-height: 577px;
    margin: 0 auto;
    
    ${({ scaleImage }) => scaleImage && css`
        max-width: 100%;
        max-height: 100%;

        ${Image} {
            transform: scale(1.1);  
        }
    `}

    @media (max-height: 640px), (max-width: 640px) {
        max-height: 100vh;
        width: unset;
        max-width: unset;
        overflow: hidden;
        display: inline-flex;
        user-select: none;
        will-change: transition, transform;
        transition: transform ease-out 0.5s;
        -moz-transition: transform ease-out 0.5s;
        -o-transition: transform ease-out 0.5s;
        -webkit-transition: transform ease-out 0.5s;
        transform: ${({slidePosition}) => `translateX(${slidePosition}px)`};
    }

    @media (min-width: 641px) and (min-height: 641px) {
        transition: none;
    }

    @media (max-width: 1280px) {
        margin-top: 20px;
    }
    
    @media (max-height: 640px) {
        margin-top: 0;
    }

    /* @media (min-width: 641px) and (max-width: 740px) {
        max-width: 80%;
        max-height: 65%;
    } */

    @media (min-width: 741px) and (max-width: 860px) {
        max-width: 85%;
        max-height: 72%;
    }

    @media (min-width: 861px) and (max-width: 1024px) {
        max-width: 90%;
        max-height: 80%;
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
        max-width: 90%;
        max-height: 88%;
    }
`

export const Slide = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 640px), (max-height: 640px) {
        max-height: 100vh;
        width: 100vw;
        display: flex;
        transform: none;
        top: 0;
        left: 0;

        ${Image} {
            max-width: 100%;
            max-height: 100%;
        }
    }

    @media (max-width: 1280px) {
        ${Image} {
            object-fit: fill;
        }
    }
`

export const Inner = styled.div`
    padding-top: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.color.bgColor};
    display: ${({ hideGallery }) => hideGallery && 'none'};

    ${({ fullscreen }) => fullscreen && css`
        padding-top: 40px;

        ${Icons} {
            max-width: 92%;
            position: absolute;
            top: 0;
            z-index: 10;

            ${ButtonIcon} {
                width: 100%;
                height: 100%;
                min-width: 60px;
                min-height: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                &:last-of-type {
                    margin-left: 100%;
                }
            }
        }

        ${Control} {
            ${ButtonIcon} {
                max-width: 60px;
                max-height: 60px;
                min-width: ${({ hideButton }) => hideButton === false && 'unset'};
            }
        }

        ${Slider} {
            transition: none;
        }
    `}

    @media (max-width: 640px) {
        padding-top: 30px;
    }

    @media (max-height: 640px) {
        padding-top: 0;
    }
`

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 95%;
    max-height: 100%;
    margin: auto;
    position: relative;

    @media (max-height: 640px) {
        max-width: 100%;
        max-height: 100%;
    }

    @media (max-width: 640px) {
        max-width: 100%;
        max-height: 50%;
    }
`