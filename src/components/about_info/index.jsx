import { forwardRef } from 'react'
import { Wrapper } from '../../GlobalStyles'
import { 
    Background, 
    Overlay, 
    Title, 
    Group, 
    Box, 
    Content, 
    Text 
} from './InfoStyled'

const Info = ({ children, ...restProps }) => {
    return (
        <Background {...restProps}>{children}</Background>
    )
}

Info.Overlay = function InfoOverlay({ children, ...restProps }) {
    return (
        <Overlay {...restProps}>{children}</Overlay>
    )
}

Info.Wrapper = function InfoWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Info.Title = forwardRef(function InfoTitle({ children, ...restProps }, ref) {
    return (
        <Title {...restProps} ref={ref}>{children}</Title>
    )
})

Info.Group = forwardRef(function InfoGroup({ children, ...restProps }, ref) {
    return (
        <Group {...restProps} ref={ref}>{children}</Group>
    )
})

Info.Box = function InfoBox({ children, ...restProps }) {
    return (
        <Box {...restProps}>{children}</Box>
    )
}

Info.Content = function InfoContent({ children, ...restProps }) {
    return (
        <Content {...restProps}>{children}</Content>
    )
}

Info.Text = function InfoText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

export default Info