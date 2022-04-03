import { forwardRef } from 'react'
import { Wrapper } from '../../GlobalStyles'
import { 
    Inner, 
    Group, 
    RedContent, 
    WhiteContent,
    Wrap, 
    Title, 
    Text 
} from './ContentStyled'

const Content = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Content.Wrapper = function ContentWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Content.Group = forwardRef(function ContentGroup({ children, ...restProps }, ref) {
    return (
        <Group {...restProps} ref={ref}>{children}</Group>
    )
})

Content.RedContent = function ContentRedContent({ children, ...restProps }) {
    return (
        <RedContent {...restProps}>{children}</RedContent>
    )
}

Content.WhiteContent = function ContentWhiteContent({ children, ...restProps }) {
    return (
        <WhiteContent {...restProps}>{children}</WhiteContent>
    )
}

Content.Wrap = function ContentWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

Content.Title = function ContentTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Content.Text = function ContentText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

export default Content