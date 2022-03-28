// import { forwardRef } from 'react'
import { forwardRef } from 'react'
import { Wrapper, Image } from '../../GlobalStyles'
import {
    Inner,
    Heading,
    SubTitle,
    Title,
    Group,
    Wrap,
    Content,
    Text
} from './HeaderStyled'

const Header = forwardRef(({ children, ...restProps }, ref) => {
    return (
        <Inner {...restProps} ref={ref}>{children}</Inner>
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

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Header.Wrap = function HeaderWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

Header.Image = forwardRef(function HeaderImage({ ...restProps }, ref) {
    return (
        <Image {...restProps} ref={ref}/>
    )
})

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

export default Header