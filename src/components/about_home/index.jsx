import { Wrapper } from '../../GlobalStyles'
import {
    Inner,
    Heading,
    Title,
    Text,
    SubTitle,
    Wrap,
    Image
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

About.Heading = function AboutHeading({ children, ...restProps }) {
    return (
        <Heading {...restProps}>{children}</Heading>
    )
}

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

About.Wrap = function AboutWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

About.Image = function AboutImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    )
}

export default About