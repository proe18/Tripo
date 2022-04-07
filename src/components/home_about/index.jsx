import { forwardRef } from 'react'
import { Wrapper, Image } from '../../GlobalStyles'
import {
    Inner,
    Heading,
    Title,
    Text,
    SubTitle,
    Group,
    WrapImage,
    Games,
    Game,
    Overlay,
    More,
    GameMore
} from './AboutStyled'

const About = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

About.Wrapper = function AboutWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

About.Heading = forwardRef(function AboutHeading({ children, ...restProps }, ref) {
    return (
        <Heading {...restProps} ref={ref}>{children}</Heading>
    )
})

About.Title = function AboutTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

About.SubTitle = function AboutSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}

About.Text = function AboutText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

About.Group = function AboutGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

About.WrapImage = forwardRef(function AboutWrapImage({ children, ...restProps }, ref) {
    return (
        <WrapImage {...restProps} ref={ref}>{children}</WrapImage>
    )
})

About.Image = function AboutImage({ ...restProps }) {
    return (
        <Image {...restProps}/>
    )
}

About.Games = forwardRef(function AboutGames({ children, ...restProps }, ref) {
    return (
        <Games {...restProps} ref={ref}>{children}</Games>
    )
})

About.Game = function AboutGame({ children, ...restProps }) {
    return (
        <Game {...restProps}>{children}</Game>
    )
}

About.Overlay = function AboutOverlay({ children, ...restProps }) {
    return (
        <Overlay {...restProps}>{children}</Overlay>
    )
}

About.More = function AboutMore({ children, ...restProps }) {
    return (
        <More {...restProps}>{children}</More>
    )
}

About.GameMore = function AboutGameMore({ children, ...restProps }) {
    return (
        <GameMore {...restProps}>{children}</GameMore>
    )
}

export default About