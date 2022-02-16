import { GrClose } from "react-icons/gr"
import { BsArrowsAngleExpand, BsArrowsAngleContract, BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { Gallery } from '../../components'
import { useContext } from 'react'
import { GamesPageContext } from '../../context/GamesPageContext'

const GalleryContainer = () => {
    const { 
        image, 
        isPre, 
        isNext,
        isCloseGallery,
        handlePre,
        handleNext,
        handleCloseGallery
     } = useContext(GamesPageContext)

    return (
        <Gallery hideGallery={isCloseGallery}>
            <Gallery.Wrap>
                <Gallery.Icons>
                    <Gallery.ButtonIcon>
                        <BsArrowsAngleExpand />
                    </Gallery.ButtonIcon>
                    <Gallery.ButtonIcon onClick={handleCloseGallery}>
                        <GrClose />
                    </Gallery.ButtonIcon>
                </Gallery.Icons>
                <Gallery.Box>
                    <Gallery.Image src={image} alt='' />
                </Gallery.Box>
                <Gallery.Control>
                    <Gallery.ButtonIcon onClick={handlePre}>
                        {isPre && <BsChevronLeft />}
                    </Gallery.ButtonIcon>
                    <Gallery.ButtonIcon onClick={handleNext}>
                        {isNext && <BsChevronRight />}
                    </Gallery.ButtonIcon>
                </Gallery.Control>
            </Gallery.Wrap>
        </Gallery>
    )
}

export default GalleryContainer