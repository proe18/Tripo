import { forwardRef } from 'react'
import { Wrapper, PlatForms, Link, Image, } from '../../GlobalStyles'
import {
    Inner,
    Wrap,
    Background,
    Heading,
    Title,
    Text,
    Games,
    Game,
    Overlay,
    More
} from './HeaderStyled'

const Header = forwardRef(({ children, ...restProps }, ref) => {
    return (
        <Inner {...restProps} ref={ref}>{children}</Inner>
    )
})

Header.Wrap = function HeaderWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

Header.Background = forwardRef(function HeaderBackground({ ...restProps }, ref) {
    return (
        <Background {...restProps} ref={ref}/>
    )
})

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

Header.Games = forwardRef(function HeaderGames({ children, ...restProps }, ref) {
    return (
        <Games {...restProps} ref={ref}>{children}</Games>
    )
})

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