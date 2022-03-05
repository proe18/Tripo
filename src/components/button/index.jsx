import { BsFillTriangleFill } from 'react-icons/bs'
import { ButtonStyled, ButtonLinkStyled, ButtonScrollStyled } from './ButtonStyled'

const Button = ({ children, ...restProps }) => {
    return (
        <ButtonStyled {...restProps}>{children}</ButtonStyled>
    )
}

const ButtonLink = ({ children, to, ...restProps }) => {
    return (
        <ButtonLinkStyled to={to} {...restProps}>{children}</ButtonLinkStyled>
    )
}

const ButtonScrollToTop = ({ ...restProps }) => {    
    return (
        <ButtonScrollStyled {...restProps}>
            <BsFillTriangleFill />
        </ButtonScrollStyled>
    )
}

export { Button, ButtonLink, ButtonScrollToTop }