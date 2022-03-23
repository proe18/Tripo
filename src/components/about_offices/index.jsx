import { Wrapper, Image } from '../../GlobalStyles'
import { 
    Background, 
    Overlay, 
    Group, 
    Heading, 
    SubTitle, 
    Title, 
    Text, 
    Box, 
    Wrap, 
    Content 
} from './OfficesStyled'

const Offices = ({ children, ...restProps }) => {
    return (
        <Background {...restProps}>{children}</Background>
    )
}

Offices.Overlay = function OfficesOverlay({ children, ...restProps }) {
    return (
        <Overlay {...restProps}>{children}</Overlay>
    )
}

Offices.Wrapper = function OfficesWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Offices.Group = function OfficesGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Offices.Heading = function OfficesHeading({ children, ...restProps }) {
    return (
        <Heading {...restProps}>{children}</Heading>
    )
}

Offices.SubTitle = function OfficesSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}

Offices.Title = function OfficesTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Offices.Text = function OfficesText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Offices.Box = function OfficesBox({ children, ...restProps }) {
    return (
        <Box {...restProps}>{children}</Box>
    )
}

Offices.Wrap = function OfficesWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

Offices.Image = function OfficesImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    )
}

Offices.Content = function OfficesContent({ children, ...restProps }) {
    return (
        <Content {...restProps}>{children}</Content>
    )
}

export default Offices