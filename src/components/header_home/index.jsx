import { Wrapper, PlatForms, Link, Image, } from '../../GlobalStyles'
import {
    Background,
    Heading,
    Title,
    Text,
    Games,
    Game,
    Overlay,
    More
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

Header.PlatForms = function HeaderPlatForms({ children, ...restProps }) {
    return (
        <PlatForms {...restProps}>{children}</PlatForms>
    )
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return (
        <Link {...restProps}>{children}</Link>
    )
}

Header.Image = function HeaderImage({ ...restProps }) {
    return (
        <Image {...restProps} />
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

Header.More = function HeaderMore({ children, ...restProps }) {
    return (
        <More {...restProps}>{children}</More>
    )
}

export default Header