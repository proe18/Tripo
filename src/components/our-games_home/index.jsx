import { forwardRef } from 'react'
import { Wrapper, Image, Link, PlatForms } from '../../GlobalStyles'
import {
    Inner,
    Background,
    Heading,
    Title, 
    Text, 
    Game, 
    Wrap,
    Avatar,
    Info, 
    Description
} from './OurGamesStyled'

const OurGames = forwardRef(({ children, ...restProps }, ref) => {
    return (
        <Inner {...restProps} ref={ref}>{children}</Inner>
    )
})

OurGames.Background = function OurGamesBackground({children, ...restProps}) {
    return (
        <Background {...restProps}>{children}</Background>
    )
}

OurGames.Wrapper = function OurGamesWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

OurGames.Heading = function OurGamesHeading({ children, ...restProps }) {
    return (
        <Heading {...restProps}>{children}</Heading>
    )
}

OurGames.Title = function OurGamesTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

OurGames.Text = function OurGamesText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

OurGames.Game = function OurGamesGame({ children, ...restProps }) {
    return (
        <Game {...restProps}>{children}</Game>
    )
}

OurGames.Wrap = function OurGamesWrap({children, ...restProps}) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

OurGames.Avatar = function OurGamesAvatar({ ...restProps }) {
    return (
        <Avatar {...restProps} />
    )
}

OurGames.Info = function OurGamesInfo({children, ...restProps}) {
    return (
        <Info {...restProps}>{children}</Info>
    )
}

OurGames.Description = function OurGamesDescription({ children, ...restProps }) {
    return (
        <Description {...restProps}>{children}</Description>
    )
}

OurGames.PlatForms = function OurGamesPlatforms({ children, ...restProps }) {
    return (
        <PlatForms {...restProps}>{children}</PlatForms>
    )
}

OurGames.Link = function OurGamesLink({ children, ...restProps }) {
    return (
        <Link {...restProps}>{children}</Link>
    )
}

OurGames.Image = function OurGamesImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    )
}

export default OurGames