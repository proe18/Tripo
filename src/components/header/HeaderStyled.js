import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';
import BackGround from '../../images/background_home_1.jpg'

export const Background = styled.header`
    width: 100%;
    height: 100%;
    max-height: 800px;
    background: url(${BackGround}) no-repeat;
    background-size: cover;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1320px;
    margin: 0 auto;
`

export const Heading = styled.div`
    padding: ${({ padding }) => padding};
    color: ${({ textColor }) => textColor};
    position: ${({ position }) => position};
    left: ${({left}) => left};
    bottom: ${({bottom}) => bottom};
`

export const Title = styled.h1`
    font-size: ${({ fontSizeTitle }) => fontSizeTitle};
    font-family: ${({ fontFamilyTitle }) => fontFamilyTitle};
`

export const Text = styled.p`
    font-size: ${({ fontSizeText }) => fontSizeText};
    font-family: ${({ fontFamilyText }) => fontFamilyText};
    margin: ${({ margin }) => margin};
`

export const Platforms = styled.div`
    width: 100%;
    height: 100%;
    max-width: 305px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: ${({ maxWidth }) => maxWidth};
    min-height: ${({ minHeight }) => minHeight};
    object-fit: cover;
`

export const Games = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 256px;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(180deg, transparent ,rgb(188, 52, 41));
    will-change: transition;
    transition: background-image ease-out 0.9s;
    -moz-transition: background-image ease-out 0.9s;
    -webkit-transition: background-image ease-out 0.9s;
`

export const Game = styled(ReactRouterLink)`
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 398px;
    text-decoration: none;
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    overflow: hidden;

    &:hover ${Overlay} {
        background: transparent;
    }

    &:hover ${Heading} {
        display: none;
    }
`

export const Link = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
`

export const More = styled.div`
    width: 100%;
    height: 100%;
    max-width: 300px;
    min-height: 398px;
    overflow: hidden;
    position: relative;
    background-color: yellow;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};

    &:hover ${Overlay} {
        background: transparent;
    }

    &:hover ${Heading} {
        display: none;
    }
`