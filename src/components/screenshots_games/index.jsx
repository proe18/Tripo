import { Wrapper, Image } from '../../GlobalStyles'
import { Inner, Title, Group, Wrap } from './ScreenshotsStyled'

const Screenshots = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Screenshots.Wrapper = function ScreenshotsWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Screenshots.Title = function ScreenshotsTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Screenshots.Group = function ScreenshotsGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Screenshots.Wrap = function ScreenshotsWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

Screenshots.Image = function ScreenshotsImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    )
}

export default Screenshots