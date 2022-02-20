import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 438px;
    min-height: 668px;
    background-color: #ffff;
    border-radius: 20px;
    position: absolute;
    top: -265px;
`

export const FormWrapper = styled.div`
    width: 100%;
    max-width: 350px;
    margin: 32px auto 0;
`

export const FormHeading = styled.div`
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.color.textColor};
`

export const FormTitle = styled.h1`
    font-size: 3.4rem;
`

export const FormText = styled.p`
    width: 100%;
    max-width: 273px;
    margin: 18px 0 30px;
    font-size: 1.8rem;
    line-height: 2.7rem;
`

export const FormInput = styled.input`
    width: 100%;
    height: 100%;
    min-height: 60px;
    border-radius: 10px;
    outline: none;
    border: 1px solid #2a2929;
    margin-top: 15px;

    &:hover, &:focus {
        border: 2px solid #000000;
    }
`

export const FormWrap = styled.div`
    width: 100%;
    max-width: 100%;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.color.textColor};
    margin-bottom: 30px;
    position: relative;
`

export const Form = styled.form`
    ${FormWrap}:last-of-type {
        margin-bottom: 20px;

        ${FormInput} {
            min-height: 100px;
        }
    }
`

export const ErrorWrap = styled.div`
    width: 100%;
    max-width: 350px;
    position: absolute;
    top: calc(100% + 5px);
    border: 1px solid #000000;
    border-radius: 5px;
    overflow: hidden;
    background-color: #ffff;
    z-index: 10;
    box-shadow: ${({theme}) => theme.shadow.errorsBoxShadow};
`

export const FormGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${FormWrap} {
        max-width: 165px;
    }

    ${FormWrap}:last-of-type {
        margin-bottom: 30px;
        
        ${FormInput} {
            min-height: 60px;
        }
    }

    ${ErrorWrap} {
        min-width: 180px;
    }
`

export const FormLabel = styled.label``

export const ErrorMes = styled.span`
    width: 100%;
    padding: 10px 5px;
    display: block;
    font-size: 1.32rem;
`

export const ButtonSubmit = styled.button`
    width: 100%;
    height: 100%;
    min-height: 60px;
    font-size: 1.6rem;
    color: #ffff;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    background-color: ${({theme}) => theme.color.thirdColor};
    will-change: transition;
    transition: ease-in 0.3s;
    -moz-transition: ease-in 0.3s;
    -o-transition: ease-in 0.3s;
    -webkit-transition: ease-in 0.3s;

    &:hover {
        background-color: ${({theme}) => theme.color.primaryColor};
    }
`