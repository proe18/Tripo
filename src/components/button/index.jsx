import { ButtonStyled, ButtonLinkStyled } from './ButtonStyled'

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

export { Button, ButtonLink }