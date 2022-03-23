import { Image, Wrapper } from '../../GlobalStyles'
import { 
    Inner, 
    Title, 
    ListJob, 
    Position, 
    Content,
    Wrap, 
    Place, 
    Text,
    Overlay,
    SubTitle,
    Send,
    Group
} from './JobsPositionStyled'

const JobsPosition = ({children, ...restProps}) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

JobsPosition.Wrapper = function JobsPositionWrapper({children, ...restProps}) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

JobsPosition.Title = function JobsPositionTitle({children, ...restProps}) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

JobsPosition.ListJob = function JobsPositionListJob({children, ...restProps}) {
    return (
        <ListJob {...restProps}>{children}</ListJob>
    )
}

JobsPosition.Position = function JobsPosition({children, ...restProps}) {
    return (
        <Position {...restProps}>{children}</Position>
    )
}

JobsPosition.Wrap = function JobsPositionWrap({children, ...restProps}) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

JobsPosition.Image = function JobsPositionImage({...restProps}) {
    return (
        <Image {...restProps}/>
    )
}

JobsPosition.Content = function JobsPositionContent({children, ...restProps}) {
    return (
        <Content {...restProps}>{children}</Content>
    )
}

JobsPosition.Place = function JobsPositionPlace({children, ...restProps}) {
    return (
        <Place {...restProps}>{children}</Place>
    )
}

JobsPosition.Text = function JobsPositionText({children, ...restProps}) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

JobsPosition.Overlay = function JobsPositionOverlay({children, ...restProps}) {
    return (
        <Overlay {...restProps}>{children}</Overlay>
    )
}

JobsPosition.Send = function JobsPositionSend({children, ...restProps}) {
    return (
        <Send {...restProps}>{children}</Send>
    )
}

JobsPosition.Group = function JobsPositionGroup({children, ...restProps}) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

JobsPosition.SubTitle = function JobsPositionSubTitle({children, ...restProps}) {
    return (
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}

export default JobsPosition