import styled from 'styled-components'
import { Image } from '../../GlobalStyles'

export const Icons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ButtonIcon = styled.div`
    font-size: 3rem;
    font-weight: 300;
    cursor: pointer;
`

export const Control = styled(Icons)`
    max-width: 98.5%;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);

    ${ButtonIcon} {
        &:last-of-type {
            margin-left: 100%;
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
    background-color: ${({theme}) => theme.color.bgColor};
    display: ${({ hideGallery }) => hideGallery && 'none'};

    ${({ fullscreen }) => fullscreen === true && `
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
                background-color: rgba(255, 255, 255, 0.4);
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
        
    `}
`

export const Wrap = styled.div`
    width: 95%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    position: relative;
`

export const Box = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 1025px;
    max-height: 577px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    ${({ scaleImage }) => scaleImage === true && `
        max-width: 100%;
        max-height: 100%;

        ${Image} {
            transform: scale(1.1, 1.1);  
        }
    `}
`