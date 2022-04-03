import { forwardRef } from 'react'
import { Wrapper, Image } from '../../GlobalStyles'
import {
    Inner,
    Heading,
    Rating,
    Group,
    Icon,
    Text,
    Title,
    Box,
    Content,
    Name,
    Background,
    Overlay,
    SubTitle,
    BoxPlatForms,
    Platforms,
    Wrap
} from './ReviewsStyled'

const Reviews = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Reviews.Wrapper = function ReviewsWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Reviews.Heading = function ReviewsHeading({ children, ...restProps }) {
    return (
        <Heading {...restProps}>{children}</Heading>
    )
}

Reviews.Rating = function ReviewsRating({ children, ...restProps }) {
    return (
        <Rating {...restProps}>{children}</Rating>
    )
}

Reviews.Group = function ReviewsGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Reviews.Icon = function ReviewsIcon({ children, ...restProps }) {
    return (
        <Icon {...restProps}>{children}</Icon>
    )
}

Reviews.Text = function ReviewsText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Reviews.Title = function ReviewsTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Reviews.Box = function ReviewsBox({ children, ...restProps }) {
    return (
        <Box {...restProps}>{children}</Box>
    )
}

Reviews.Content = forwardRef(function ReviewsContent({ children, ...restProps }, ref) {
    return (
        <Content {...restProps} ref={ref}>{children}</Content>
    )
})

Reviews.Name = function ReviewsName({ children, ...restProps }) {
    return (
        <Name {...restProps}>{children}</Name>
    )
}

Reviews.Background = function ReviewsBackground({ children, ...restProps }) {
    return (
        <Background {...restProps}>{children}</Background>
    )
}

Reviews.Overlay = function ReviewsOverlay({ children, ...restProps }) {
    return (
        <Overlay {...restProps}>{children}</Overlay>
    )
}

Reviews.SubTitle = function ReviewsSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}

Reviews.BoxPlatForms = function ReviewsBoxPlatForms({ children, ...restProps }) {
    return (
        <BoxPlatForms {...restProps}>{children}</BoxPlatForms>
    )
}

Reviews.Platforms = function ReviewsPlatforms({ children, ...restProps }) {
    return (
        <Platforms {...restProps}>{children}</Platforms>
    )
}

Reviews.Wrap = function ReviewsWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

Reviews.Image = function ReviewsImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    )
}

export default Reviews