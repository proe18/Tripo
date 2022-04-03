import styled, { css } from 'styled-components'
import { Image } from '../../GlobalStyles'

export const ButtonIcon = styled.div`
    font-size: 3rem;
    font-weight: 300;
    cursor: pointer;
`

export const Icons = styled.div`
    padding-top: 50px;
    width: 100%;
    height: 100%;
    max-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${ButtonIcon}:first-child, ${ButtonIcon}:last-child {
        width: 60px;
        height: 60px;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 640px) {
        padding-top: 50px;

        ${ButtonIcon}:first-child {
            display: none;
        }

        ${ButtonIcon}:last-child {
            margin-left: 80%;
        }
    }

    @media (max-height: 640px) {
        padding-top: 0;
        padding-right: 5%;
        position: absolute;

        ${ButtonIcon}:first-child {
            display: none;
        }

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

    @media (max-width: 320px) {
        padding-right: 5%;
        
        ${ButtonIcon}:last-child {
            margin-left: 80%;
            background-color: unset;
            border-radius: unset;
        }
    }
`

export const Control = styled(Icons)`
    max-width: 97%;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);

    ${({ hideButton }) => hideButton
        ? css`
            ${ButtonIcon}:first-of-type {
                margin-right: 100%;
            }`

        : css`
            ${ButtonIcon}:last-of-type {
                margin-left: 100%;
            }`
    }

    @media (max-width: 640px), (max-height: 640px) {
        display: none;
    }

    @media (min-width: 641px) and (max-width: 740px) {
        max-width: 94%;
    }

    @media (min-width: 741px) and (max-width: 860px) {
        max-width: 95%;
    }

    @media (min-width: 861px) and (max-width: 1024px) {
        max-width: 96%;
    }

    @media (min-width: 1025px) and (max-width: 1368px) {
        max-width: 96.5%;
    }
`

export const Slider = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1025px;
    max-height: 577px;
    margin: 30px auto 0;
    position: relative;
    
    ${({ scaleImage }) => scaleImage && css`
        max-width: 100%;
        max-height: 100%;

        ${Image} {
            transform: scale(1.1);  
        }
    `}

    @media (max-width: 640px) {
        margin: 50px auto 0;
    }

    @media (min-width: 641px) and (max-width: 912px) {
        max-width: 85%;
        max-height: 60%;
        top: 44%;
        transform: translateY(-55%);
    }

    @media (min-width: 913px) and (max-width: 1368px) {
        max-width: 85%;
        max-height: 70%;
        top: 44%;
        transform: translateY(-55%);
    }
    
    @media (max-height: 640px) {
        margin: 0 auto;
        top: 0;
        transform: none;
    }

    @media (max-height: 640px), (max-width: 640px) {
        height: 100%;
        max-height: 100vh;
        width: unset;
        max-width: unset;
        display: inline-flex;
    }

    @media (min-width: 300px) and (max-width: 320px) {
        margin: 100px auto 0;
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
        top: 0;
        left: 0;
        transform: ${({ slidePosition }) => `translateX(${slidePosition}px)`};
        user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        will-change: transform;
        transition: transform ease-out 0.5s;
        -moz-transition: transform ease-out 0.5s;
        -o-transition: transform ease-out 0.5s;
        -webkit-transition: transform ease-out 0.5s;

        ${Image} {
            max-width: 100%;
            max-height: 100%;
        }
    }

    @media (min-width: 641px) and (min-height: 641px) {
        transition: none;
    }

    @media (max-width: 1280px) {
        ${Image} {
            object-fit: fill;
        }
    }
`

export const Inner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.color.bgColor};
    display: ${({ hideGallery }) => hideGallery && 'none'};

    ${({ fullscreen }) => fullscreen && css`
        padding-top: 0;

        ${Icons} {
            max-width: 100%;
            position: absolute;
            display: flex;
                justify-content: space-between;
                align-items: center;
            top: 0;
            z-index: 10;

            ${ButtonIcon} {
                width: 100%;
                height: 100%;
                max-width: 60px;
                min-height: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
            }
        }

        ${Control} {
            max-width: 96%;
            top: 50%;
            transform: translateY(-50%);

            ${ButtonIcon} {
                width: 100%;
                height: 100%;
                min-width: 60px;
                min-height: 60px;
            }
        }

        ${Slider} {
            transition: none;
        }
    `}
`

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 95%;
    max-height: 100%;
    margin: 0 auto;
    position: relative;

    @media (max-width: 640px) {
        max-width: 100%;
        max-height: 50%;
        top: 40%;
        transform: translateY(-60%);
    }

    @media (min-width: 641px) and (max-width: 912px) {
        max-width: 95%;
        max-height: 65%;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (max-height: 640px) {
        max-width: 100%;
        max-height: 100%;
        top: 0;
        transform: none;
    }

    @media (max-width: 320px) {
        max-width: 100%;
        max-height: 50%;
        top: 40%;
        transform: translateY(-60%);
    }
`