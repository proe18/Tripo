import { Wrapper } from '../header/HeaderStyled'
import {
    Inner,
    Heading,
    Title,
    Text,
    SubTitle,
    Wrap,
    Image
} from './SectionStyled'

const Section = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Section.Wrapper = function SectionWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Section.Heading = function SectionHeading({ children, ...restProps }) {
    return (
        <Heading {...restProps}>{children}</Heading>
    )
}

Section.Title = function SectionTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Section.SubTitle = function SectionSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}

Section.Text = function SectionText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Section.Wrap = function SectionWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

Section.Image = function SectionImage({ children, ...restProps }) {
    return (
        <Image {...restProps}>{children}</Image>
    )
}

export default Section