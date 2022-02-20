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
    left: 85px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: calc(100% + 6px);
    color: red;
    font-size: 2rem;
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
        min-width: 210px;
    }
`

export const FormLabel = styled.label``

export const ErrorMes = styled.span`
    width: 100%;
    max-width: 100%;
    display: inline-block;
    font-size: 1.32rem;
    padding-left: 2px;
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

//SubscribeFormContainer
export const SubscribeFormContainer = styled(Container)`
    max-width: 388px;
    min-height: unset;
    max-height: 210px;
    background-color: ${({theme}) => theme.color.primaryColor};
    position: unset;
    float: right;
    margin-top: 192px;
    margin-right: 85px;

    ${FormHeading} {
        color: #ffff;
        margin-bottom: 20px;
        
        ${FormTitle} {
            font-size: 2.1rem;
        }
    }

    ${FormLabel} {
        color: #ffff;
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
    }

    ${FormWrap} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 336px;

        ${ErrorWrap} {
            color: #ffff;
        }

        ${FormInput} {
            max-width: 238px;
            min-height: 60px !important;
        }
    }
`

export const ButtonJoin = styled(ButtonSubmit)`
    max-width: 80px;
    margin-top: 15px;
    color: ${({theme}) => theme.color.textColor};
    background-color: ${({theme}) => theme.color.secondColor};

    &:hover {
        background-color: #ffff;
    }
`