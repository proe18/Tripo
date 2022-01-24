import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonStyled = styled.button`
    height: 100%;
    max-height: 60px;
    line-height: 60px;
    font-size: 1.6rem;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    border: none;
    font-family: "Roboto", sans-serif;
    border-radius: ${({theme}) => theme.borderRadius.radius1};
`

export const ButtonLinkStyled = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    max-height: 60px;
    line-height: 60px;
    margin: 0 auto;
    font-size: 1.6rem;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    border: none;
    font-family: "Roboto", sans-serif;
    border-radius: ${({theme}) => theme.borderRadius.radius1};
    will-change: transition;
    transition: ease-in 0.3s;
    -moz-transition: ease-in 0.3s;
    -o-transition: ease-in 0.3s;
    -webkit-transition: ease-in 0.3s;
    
    max-width: ${({widthbutton}) => widthbutton};
    color: ${({theme, colorbutton}) => colorbutton ? colorbutton : theme.color.whiteColor};
    background-color: ${({theme, bgbutton}) => bgbutton ? bgbutton : theme.color.primaryColor};

    &:hover {
        outline: ${({outlinehover}) => outlinehover && '1px solid'};
        color: ${({theme, colorhover}) => colorhover ? colorhover : theme.color.textColor};
        background-color: ${({theme, bghover}) => bghover ? bghover : theme.color.whiteColor};
    }
`