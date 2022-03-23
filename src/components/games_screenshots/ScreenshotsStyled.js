import styled from 'styled-components'
import { Image } from '../../GlobalStyles'

export const Inner = styled.section`
    opacity: ${({hideScreenshots}) => hideScreenshots === false ? 0 : 1};

    @media (max-width: 748px) {
        padding-top: ${({paddingTop}) => paddingTop && `${paddingTop - 35}px`};
    }
`

export const Title = styled.h1`
    font-size: 3.4rem;
    font-family: 'Roboto', sans-serif;
    margin: 93px 0 71px;
    color: ${({ theme }) => theme.color.textColor};

    @media (max-width: 748px) {
        margin: 0 0 48px;
    }

    @media (max-width: 1318.5px) {
        text-align: center;
    }
`

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1318.5px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const Wrap = styled.div`
    width: 100%;
    max-width: 635px;
    max-height: 356px;
    overflow: hidden;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};

    ${Image} {
        will-change: transition;
        transition: ease-in-out 0.9s;
        -moz-transition: ease-in-out 0.9s;
        -webkit-transition: ease-in-out 0.9s;
    }

    &:hover ${Image} {
        will-change: transform;
        transform: scale(1.1);
        -ms-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
    }

    @media (max-width: 1318.5px) {
        &:first-of-type {
            margin-bottom: 5px;
        }
    }
`