import styled from 'styled-components';
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
    padding-top: 185px;
    color: ${({theme}) => theme.color.textColor};
`

export const Title = styled.h1`
    font-size: 8rem;
    font-family: 'Suez One', serif;
`

export const Text = styled.p`
    font-size: 2.4rem;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 45px;
`

export const Platforms = styled.div`
    width: 100%;
    height: 100%;
    max-width: 290px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 135px;
    max-height: 45px;
    object-fit: cover;
`

export const Games = styled.div``

export const Game = styled.div``

export const Overlay = styled.div``