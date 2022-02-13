import styled from 'styled-components'

export const Inner = styled.section`
    margin-top: 95px;
`

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 55px;
`

export const Text = styled.p`
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
`

export const Heading = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({ theme }) => theme.color.textColor};

    ${Group} {
        width: 100%;
        height: 100%;
        max-width: 178px;
        min-height: 41px;
        margin: 0 auto;
        border-radius: 50px;
        background-color: ${({ theme }) => theme.color.primaryColor};
    }

    ${Text} {
        width: 100%;
        height: 100%;
        max-width: 135px;
        min-height: 35px;
        line-height: 35px;
        text-align: center;
        border-radius: 50px;
        margin-right: 4px;
        background-color: ${({ theme }) => theme.color.whiteColor};
    }
`

export const Rating = styled.div`
    width: 100%;
    height: 100%;
    max-width: 250px;
    min-height: 100px;
    display: flex;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    background-color: ${({ theme }) => theme.color.whiteColor};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
`

export const Icon = styled.div`
    font-size: 1.8rem;
    padding-top: 5px;
    margin-left: 12px;
    color: ${({ theme }) => theme.color.whiteColor};
`

export const Title = styled.h1`
    font-size: 5rem;
    font-family: 'Suez One', serif;
    font-weight: 500;
    margin-left: 50px;
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    max-width: 440px;
    min-height: 357px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
`

export const Content = styled.div`
    width: 100%;
    max-width: 241px;
    margin: 0 auto;
`

export const Name = styled.p`
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    margin-top: 25px;
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    max-height: 735px;
    margin-top: 100px;
    background: ${({bg}) => `url(${bg})`} no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed, scroll;
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    max-height: 735px;
    background-color: ${({theme}) => theme.color.bgPrimaryColor};

    ${Content} {
        width: 100%;
        max-width: 763px;
        text-align: center;
        padding: 185px 0;
        color: ${({theme}) => theme.color.whiteColor};
    }

    ${Title} {
        max-width: 602.1px;
        margin: 0 auto 20px;
    }

    ${Text} {
        max-width: 587px;
        font-size: 1.8rem;
        line-height: 3rem;
        margin: 0 auto;
    }
`

export const SubTitle = styled.h2`
    font-size: 2.1rem;
    font-family: 'Roboto', sans-serif;

`