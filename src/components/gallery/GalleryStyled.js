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
    padding-top: 100px;
    padding-bottom: 65px;
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

                ${({hideButton}) => hideButton === false && `
                    min-width: unset;
                `};
            }
        }
    `}
`

export const Wrap = styled.div`
    width: 95%;
    height: 100%;
    max-width: 100vw;
    max-height: 100%;
    margin: 0 auto;
    position: relative;
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1025px;
    max-height: 577px;
    margin: 0 auto;

    ${({ scaleImage }) => scaleImage === true && `
        max-width: 100%;
        max-height: 100%;

        ${Image} {
            transform: scale(1.1, 1.1);  
        }
    `}
`