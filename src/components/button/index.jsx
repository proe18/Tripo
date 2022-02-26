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
    const handleClick = () => window.scrollTo(0, 0)
    
    return (
        <ButtonScrollStyled {...restProps} onClick={handleClick}>
            <BsFillTriangleFill />
        </ButtonScrollStyled>
    )
}

export { Button, ButtonLink, ButtonScrollToTop }