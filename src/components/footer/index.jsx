import { Wrapper } from '../../GlobalStyles'
import {
    Inner,
    Heading,
    Text,
    Wrap,
    NavList,
    ListTitle,
    Item,
    CoppyRight
} from './FooterStyled'

const Footer = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Footer.Heading = function FooterHeading({ children, ...restProps }) {
    return (
        <Heading {...restProps}>{children}</Heading>
    )
}

Footer.Text = function FooterText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Footer.Wrap = function FooterWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

Footer.NavList = function FooterNavList({ children, ...restProps }) {
    return (
        <NavList {...restProps}>{children}</NavList>
    )
}

Footer.ListTitle = function FooterListTitle({ children, ...restProps }) {
    return (
        <ListTitle {...restProps}>{children}</ListTitle>
    )
}

Footer.Item = function FooterItem({ children, ...restProps }) {
    return (
        <Item {...restProps}>{children}</Item>
    )
}

Footer.CoppyRight = function FooterCoppyRight({children, ...restProps}) {
    return (
        <CoppyRight {...restProps}>{children}</CoppyRight>
    )
}

export default Footer