import { Image } from '../../GlobalStyles'
import { Inner, Wrap, Icons, Control, ButtonIcon, Slider } from './GalleryStyled'

const Gallery = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Gallery.Wrap = function GalleryWrap({ children, ...restProps }) {
    return (
        <Wrap {...restProps}>{children}</Wrap>
    )
}

Gallery.Icons = function GalleryIcons({ children, ...restProps }) {
    return (
        <Icons {...restProps}>{children}</Icons>
    )
}

Gallery.Control = function GalleryControl({ children, ...restProps }) {
    return (
        <Control {...restProps}>{children}</Control>
    )
}

Gallery.ButtonIcon = function GalleryButtonIcon({ children, ...restProps }) {
    return (
        <ButtonIcon {...restProps}>{children}</ButtonIcon>
    )
}

Gallery.Slider = function GallerySlider({ children, ...restProps }) {
    return (
        <Slider {...restProps}>{children}</Slider>
    )
}

Gallery.Image = function GalleryImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    )
}

export default Gallery