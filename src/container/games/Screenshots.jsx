import { useContext } from 'react'
import { Screenshots } from '../../components'
import { GamesPageContext } from '../../context/GamesPageContext'

const ScreenshotsContainer = ({ data }) => {
    const { 
        heightElement,
        isCloseGallery,
        handleGallery 
    } = useContext(GamesPageContext)

    return (
        <Screenshots paddingTop={heightElement} hideScreenshots={isCloseGallery}>
            <Screenshots.Wrapper>
                <Screenshots.Title>{data.title}</Screenshots.Title>
                <Screenshots.Group>
                    {data.listImage.map((image, index) =>
                        <Screenshots.Wrap key={index} onClick={() => handleGallery(image.img, index)}>
                            <Screenshots.Image src={image.img} alt={image.alt} id={'imageElement'}/>
                        </Screenshots.Wrap>
                    )}
                </Screenshots.Group>
            </Screenshots.Wrapper>
        </Screenshots>
    )
}

export default ScreenshotsContainer