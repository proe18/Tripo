import { Wrapper, Image } from '../../GlobalStyles'
import {
    Inner,
    Title,
    Group,
    Box,
    Wrap,
    Info,
    Name,
    Position
} from './FounderStyled'

const Founder = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Founder.Wrapper = function FounderWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Founder.Title = function FounderTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Founder.Group = function FounderGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Founder.Box = function FounderBox({ children, ...restProps }) {
    return (
        <Box {...restProps}>{children}</Box>
    )
}

Founder.Wrap = function FounderWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

Founder.Image = function FounderImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    )
}

Founder.Info = function FounderInfo({ children, ...restProps }) {
    return (
        <Info {...restProps}>{children}</Info>
    )
}

Founder.Name = function FounderName({ children, ...restProps }) {
    return (
        <Name {...restProps}>{children}</Name>
    )
}

Founder.Position = function FounderPosition({ children, ...restProps }) {
    return (
        <Position {...restProps}>{children}</Position>
    )
}

export default Founder