import { Wrapper } from '../../GlobalStyles'
import { 
    Inner, 
    Background, 
    Overlay, 
    Content, 
    SubTitle, 
    Title, 
    Text, 
    Location, 
    Employment 
} from './HeaderStyled'

const Header = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Header.Background = function HeaderBackground({ children, ...restProps }) {
    return (
        <Background {...restProps}>{children}</Background>
    )
}

Header.Overlay = function HeaderOverlay({ children, ...restProps }) {
    return (
        <Overlay {...restProps}>{children}</Overlay>
    )
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Header.Content = function HeaderContent({ children, ...restProps }) {
    return (
        <Content {...restProps}>{children}</Content>
    )
}

Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Header.Location = function HeaderLocation({ children, ...restProps }) {
    return (
        <Location {...restProps}>{children}</Location>
    )
}

Header.Employment = function HeaderEmployment({ children, ...restProps }) {
    return (
        <Employment {...restProps}>{children}</Employment>
    )
}

export default Header