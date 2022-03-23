import { forwardRef } from 'react'
import { Wrapper, Image } from '../../GlobalStyles'
import {
    Inner,
    Heading,
    Title,
    Text,
    SubTitle,
    Wrap
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

About.Wrap = forwardRef(function AboutWrap({ children, ...restProps }, ref) {
    return (
        <Wrap {...restProps} ref={ref}>{children}</Wrap>
    )
})

About.Image = function AboutImage({ ...restProps }) {
    return (
        <Image {...restProps}/>
    )
}

export default About