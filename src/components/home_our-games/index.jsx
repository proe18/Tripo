import { forwardRef } from 'react'
import { Wrapper, Image, Link, PlatForms } from '../../GlobalStyles'
import {
    Inner,
    Group,
    Background,
    Content,
    Heading,
    Title, 
    Text, 
    Game,
    WrapImage, 
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

OurGames.Group = function OurGamesGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

OurGames.Background = forwardRef(function OurGamesBackground({children, ...restProps}, ref) {
    return (
        <Background {...restProps} ref={ref}>{children}</Background>
    )
})

OurGames.Content = forwardRef(function OurGamesContent({children, ...restProps}, ref) {
    return (
        <Content {...restProps} ref={ref}>{children}</Content>
    )
})

OurGames.Wrapper = function OurGamesWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

OurGames.Heading = forwardRef(function OurGamesHeading({ children, ...restProps }, ref) {
    return (
        <Heading {...restProps} ref={ref}>{children}</Heading>
    )
})

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

OurGames.WrapImage = function OurGamesWrapImage({children, ...restProps}) {
    return (
        <WrapImage {...restProps}>{children}</WrapImage>
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