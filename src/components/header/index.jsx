import {
    Background,
    Wrapper,
    Heading,
    Title,
    Text,
    Platforms,
    Image,
    Games,
    Game,
    Overlay
} from './HeaderStyled'

const Header = ({ children, ...restProps }) => {
    return (
        <Background {...restProps}>{children}</Background>
    )
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Header.Heading = function HeaderHeading({ children, ...restProps }) {
    return (
        <Heading {...restProps}>{children}</Heading>
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

Header.Platforms = function HeaderPlatforms({ children, ...restProps }) {
    return (
        <Platforms {...restProps}>{children}</Platforms>
    )
}

Header.Image = function HeaderImage({ children, ...restProps }) {
    return (
        <Image {...restProps}>{children}</Image>
    )
}

Header.Games = function HeaderGames({ children, ...restProps }) {
    return (
        <Games {...restProps}>{children}</Games>
    )
}

Header.Game = function HeaderGame({ children, ...restProps }) {
    return (
        <Game {...restProps}>{children}</Game>
    )
}

Header.Overlay = function HeaderOverlay({ children, ...restProps }) {
    return (
        <Overlay {...restProps}>{children}</Overlay>
    )
}

export default Header