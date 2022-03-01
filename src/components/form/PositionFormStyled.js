import styled, { css } from 'styled-components'

export const PositionFormContainer = styled.section``

export const Modal = styled.div`
    ${({ hideModal }) => !hideModal && css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
    `};
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 600px;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    scrollbar-width: none;
    -ms-overflow-style: none;
    background-color: ${({ theme }) => theme.color.thirdColor};
    will-change: transform, transition, opacity;
    transition: ease-out 0.36s;
    transform: translateX(600px);
    opacity: 0;
    
    ${({ hideForm }) => !hideForm && css`
        transform: translateX(0);
        opacity: 1;
    `}

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 600px) {
        max-width: 100%;
    }
`

export const FormGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

export const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 500px;
    margin: 0 auto;

    @media (max-width: 320px) {
        max-width: 280px;
    }

    @media (min-width: 321px) {
        width: 90%;
    }
`

export const FormHeading = styled.div`
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.whiteColor};
`

export const FormTitle = styled.h1`
    font-size: 3.4rem;
    margin-top: 42px;

    @media (max-width: 519.5px) {
        margin-top: 40px;
    }

    @media (max-width: 320px) {
        font-size: 2.3rem;
    }

    @media (min-width: 321px) and (max-width: 420px) {
        font-size: 2.8rem;
    }
`

export const FormText = styled.p`
    font-size: 1.8rem;
    margin: 10px 0 40px;

    @media (max-width: 519.5px) {
        font-size: 1.7rem;
        margin: 5px 0 30px;
    }
`

export const FormIcon = styled.div`
    font-size: 3.5rem;
    cursor: pointer;
    padding-top: 2px;
    color: ${({ theme }) => theme.color.whiteColor};

    path {
        stroke: ${({ theme }) => theme.color.whiteColor};
    }

    @media (max-width: 320px) {
        font-size: 2.5rem;
    }

    @media (min-width: 321px) and (max-width: 420px) {
        font-size: 3rem;
    }
`

export const FormWrap = styled.div`
    width: 100%;
    max-width: 210px;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.textColor};
    margin-bottom: 30px;

    @media (max-width: 519.5px) {
        margin: 0 auto 20px;
        max-width: 100%;
    }
`

export const FormInput = styled.input`
    width: 100%;
    height: 100%;
    min-height: 60px;
    margin-top: 15px;
    border-radius: 10px;
    border: 1px solid #2a2929;

    &:hover, &:focus {
        border: 2px solid #000000;
    }

    @media (max-width: 519.5px) {
        max-width: 100%;
    }
`

export const Form = styled.form`
    width: 100%;
    max-width: 500px;
    background-color: #ffff;
    border-radius: 20px;

    ${FormGroup} {
        width: 100%;
        margin: 0 auto;
    }

    ${FormWrap}:nth-child(3), ${FormWrap}:nth-child(5) {
        width: 100%;
        max-width: 100%;
        margin: 0 auto 30px;

        ${FormInput} {
            max-width: 100%;
        }
        
        @media (max-width: 519.5px) {
            margin: 0 auto 20px;
        }
    }

    ${FormWrap}:nth-child(5) {
        margin-bottom: 20px;

        ${FormInput} {
            min-height: 150px;
        }
    }
`

export const FormContainer = styled.div`
    width: 100%;
    max-width: 440px;
    margin: 0 auto;
    padding-top: 30px;

    @media (max-width: 519.5px) {
        padding-top: 20px;

        ${FormGroup} {
            display: block;
        }
    }

    @media (max-width: 320px) {
        max-width: 240px;
    }

    @media (min-width: 321px) {
        width: 90%;
    }
`

export const FormSelect = styled.select`
    width: 100%;
    height: 100%;
    min-height: 60px;
    margin-top: 15px;
    border-radius: 10px;
    border: 1px solid #2a2929;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.color.textColor};

    @media (max-width: 519.5px) {
        max-width: 100%;
    }
`

export const FormOption = styled.option`
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.color.textColor};
`

export const FormLabel = styled.label``

export const ErrorWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    color: red;
    font-size: 2rem;
`

export const ErrorMes = styled.span`
    width: 100%;
    max-width: 100%;
    font-size: 1.32rem;
    padding-left: 2px;
`

export const FormButton = styled.div`
    width: 100%;
    height: 100%;
`

export const ButtonSubmit = styled.button`
    width: 100%;
    height: 100%;
    min-height: 60px;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 60px;
    color: #ffff;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.primaryColor};
    will-change: transition;
    transition: ease-in 0.3s;
    -moz-transition: ease-in 0.3s;
    -o-transition: ease-in 0.3s;
    -webkit-transition: ease-in 0.3s;

    &:hover {
        border: 1px solid #2a2929;
        color: ${({ theme }) => theme.color.textColor};
        background-color: rgb(246, 244, 240);
    }

    @media (max-width: 600px) {
        margin-bottom: 40px;

        &:hover {
            border: none;
            color: ${({ theme }) => theme.color.whiteColor};
            background-color: ${({ theme }) => theme.color.primaryColor};
        }
    }
`