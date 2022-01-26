import { Image, Wrapper } from '../../GlobalStyles'
import { Inner, Background, Heading, Title, Text, Overlay } from './JoinTeamStyled'

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

JoinTeam.Heading = function JoinTeamHeading({ children, ...restProps }) {
    return (
        <Heading {...restProps}>{children}</Heading>
    )
}

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

JoinTeam.Image = function JoinTeamImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    )
}

JoinTeam.Overlay = function JoinTeamOverlay({children, ...restProps}) {
    return (
        <Overlay {...restProps}>{children}</Overlay>
    )
}

export default JoinTeam