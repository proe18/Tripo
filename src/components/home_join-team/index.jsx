import { forwardRef } from 'react'
import { Image, Wrapper } from '../../GlobalStyles'
import { 
    Inner, 
    Background, 
    Heading, 
    Title, 
    Text, 
    Overlay,
    Group 
} from './JoinTeamStyled'

const JoinTeam = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

JoinTeam.Background = function JoinTeamBackground({ children, ...restProps }) {
    return (
        <Background {...restProps} />
    )
}

JoinTeam.Wrapper = function JoinTeamWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

JoinTeam.Group = function JoinTeamGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

JoinTeam.Heading = forwardRef(function JoinTeamHeading({ children, ...restProps }, ref) {
    return (
        <Heading {...restProps} ref={ref}>{children}</Heading>
    )
})

JoinTeam.Title = function JoinTeamTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

JoinTeam.Text = function JoinTeamText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

JoinTeam.Image = forwardRef(function JoinTeamImage({ ...restProps }, ref) {
    return (
        <Image {...restProps} ref={ref}/>
    )
})

JoinTeam.Overlay = function JoinTeamOverlay({children, ...restProps}) {
    return (
        <Overlay {...restProps}>{children}</Overlay>
    )
}

export default JoinTeam