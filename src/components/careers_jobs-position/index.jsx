import { forwardRef } from 'react'
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

JobsPosition.Title = forwardRef(function JobsPositionTitle({children, ...restProps}, ref) {
    return (
        <Title {...restProps} ref={ref}>{children}</Title>
    )
})

JobsPosition.ListJob = forwardRef(function JobsPositionListJob({children, ...restProps}, ref) {
    return (
        <ListJob {...restProps} ref={ref}>{children}</ListJob>
    )
})

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

JobsPosition.Group = forwardRef(function JobsPositionGroup({children, ...restProps}, ref) {
    return (
        <Group {...restProps} ref={ref}>{children}</Group>
    )
})

JobsPosition.SubTitle = function JobsPositionSubTitle({children, ...restProps}) {
    return (
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}

export default JobsPosition