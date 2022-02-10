import { Wrapper, Image } from '../../GlobalStyles'
import {
    Inner,
    Background,
    Box,
    Group,
    Info,
    Wrap,
    Heading,
    Title,
    SubTitle,
    Content,
    Text,
    Description
} from './HeaderStyled'

const Header = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Header.Background = function HeaderBackground({ ...restProps }) {
    return (
        <Background {...restProps} />
    )
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Header.Box = function HeaderBox({ children, ...restProps }) {
    return (
        <Box {...restProps}>{children}</Box>
    )
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Header.Info = function HeaderInfo({ children, ...restProps }) {
    return (
        <Info {...restProps}>{children}</Info>
    )
}

Header.Wrap = function HeaderWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

Header.Image = function HeaderImage({ ...restProps }) {
    return (
        <Image {...restProps} />
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

Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}

Header.Content = function HeaderContent({ children, ...restProps }) {
    return (
        <Content {...restProps}>{children}</Content>
    )
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Header.Description = function HeaderDescription({ children, ...restProps }) {
    return (
        <Description {...restProps}>{children}</Description>
    )
}

export default Header