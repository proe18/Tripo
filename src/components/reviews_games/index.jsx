import { Wrapper } from '../../GlobalStyles'
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
    SubTitle 
} from './ReviewsStyled'

const Reviews = ({children, ...restProps}) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Reviews.Wrapper = function ReviewsWrapper({children, ...restProps}) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Reviews.Heading = function ReviewsHeading({children, ...restProps}) {
    return (
        <Heading {...restProps}>{children}</Heading>
    )
}

Reviews.Rating = function ReviewsRating({children, ...restProps}) {
    return (
        <Rating {...restProps}>{children}</Rating>
    )
}

Reviews.Group = function ReviewsGroup({children, ...restProps}) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Reviews.Icon = function ReviewsIcon({children, ...restProps}) {
    return (
        <Icon {...restProps}>{children}</Icon>
    )
}

Reviews.Text = function ReviewsText({children, ...restProps}) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Reviews.Title = function ReviewsTitle({children, ...restProps}) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Reviews.Box = function ReviewsBox({children, ...restProps}) {
    return (
        <Box {...restProps}>{children}</Box>
    )
}

Reviews.Content = function ReviewsContent({children, ...restProps}) {
    return (
        <Content {...restProps}>{children}</Content>
    )
}

Reviews.Name = function ReviewsName({children, ...restProps}) {
    return (
        <Name {...restProps}>{children}</Name>
    )
}

Reviews.Background = function ReviewsBackground({children, ...restProps}) {
    return (
        <Background {...restProps}>{children}</Background>
    )
}

Reviews.Overlay = function ReviewsOverlay({children, ...restProps}) {
    return (
        <Overlay {...restProps}>{children}</Overlay>
    )
}

Reviews.SubTitle = function ReviewsSubTitle({children, ...restProps}) {
    return (
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}

export default Reviews