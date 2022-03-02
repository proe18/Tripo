import { useContext } from 'react'
import { Screenshots } from '../../components'
import { GalleryContext, GamesPageContext } from '../../context'

const ScreenshotsContainer = ({ data }) => {
    const { heightElement } = useContext(GamesPageContext)
    const { groupImage, isCloseGallery, handleGallery } = useContext(GalleryContext)

    return (
        <Screenshots paddingTop={heightElement} hideScreenshots={isCloseGallery}>
            <Screenshots.Wrapper>
                <Screenshots.Title>{data.title}</Screenshots.Title>
                <Screenshots.Group ref={groupImage}>
                    {data.listImage.map((image, index) =>
                        <Screenshots.Wrap key={index} onClick={() => handleGallery(image.img, index)}>
                            <Screenshots.Image src={image.img} alt={image.alt} />
                        </Screenshots.Wrap>
                    )}
                </Screenshots.Group>
            </Screenshots.Wrapper>
        </Screenshots>
    )
}

export default ScreenshotsContainer