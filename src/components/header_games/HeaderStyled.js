import styled from 'styled-components'
import { Image } from '../../GlobalStyles'

export const Inner = styled.header`
    padding-top: 272px;
    position: relative;
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    min-height: 687px;
    background: ${({bg}) => `url(${bg})`} no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed, scroll;
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    max-width: 672px;
    max-height: 618px;
    position: absolute;
    top: 112px;
    border-radius: ${({theme}) => theme.borderRadius.radius2};
    background-color: ${({theme}) => theme.color.whiteColor};
    box-shadow: ${({theme}) => theme.shadow.boxShadow};
`

export const Group = styled.div`
    width: 100%;
    max-width: 568px;
    margin: 50px auto 0;
    color: ${({theme}) => theme.color.textColor};
`

export const Info = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 90px;
    min-height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({theme}) => theme.borderRadius.radius2};
    box-shadow: ${({theme}) => theme.shadow.boxShadow};

    ${Image} {
        max-width: 78px;
        max-height: 78px;
        border-radius: ${({theme}) => theme.borderRadius.radius2};
    }
`

export const Heading = styled.div`
    margin-left: 22px;
    font-family: 'Roboto', sans-serif;
`

export const Title = styled.h1`
    font-size: 2.1rem;
    margin-bottom: 2px;
`

export const SubTitle = styled.p`
    font-size: 1.6rem;
`

export const Content = styled.div``

export const Text = styled.h1`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    font-weight: 500;
    margin-top: 26px;
`

export const Description = styled.p`
    font-size: 1.8rem;
    line-height: 3rem;
    margin-top: 17px;
`