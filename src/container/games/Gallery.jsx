import { GrClose } from "react-icons/gr"
import { BsArrowsAngleExpand, BsArrowsAngleContract, BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { Gallery } from '../../components'
import { useContext } from 'react'
import { GamesPageContext } from '../../context/GamesPageContext'
import { FullScreen } from 'react-full-screen'

const GalleryContainer = () => {
    const {
        image,
        isPre,
        isNext,
        isCloseGallery,
        isFullscreen,
        handle,
        handlePre,
        handleNext,
        handleCloseGallery,
        handleFullscreen
    } = useContext(GamesPageContext)

    return (
        <FullScreen handle={handle}>
            <Gallery
                hideGallery={isCloseGallery}
                fullscreen={isFullscreen}
                tabIndex='0'
                onKeyDown={({ key }) => key === 'Escape' && handleCloseGallery()}
            >
                <Gallery.Wrap>
                    <Gallery.Icons>
                        <Gallery.ButtonIcon onClick={handleFullscreen}>
                            {!isFullscreen ? <BsArrowsAngleExpand /> : <BsArrowsAngleContract />}
                        </Gallery.ButtonIcon>
                        <Gallery.ButtonIcon onClick={handleCloseGallery}>
                            <GrClose />
                        </Gallery.ButtonIcon>
                    </Gallery.Icons>
                    <Gallery.Box scaleImage={isFullscreen}>
                        <Gallery.Image src={image} alt='' />
                    </Gallery.Box>
                    <Gallery.Control>
                        <Gallery.ButtonIcon onClick={handlePre} hideButton={isPre}>
                            {isPre && <BsChevronLeft />}
                        </Gallery.ButtonIcon>
                        <Gallery.ButtonIcon onClick={handleNext} hideButton={isNext}>
                            {isNext && <BsChevronRight />}
                        </Gallery.ButtonIcon>
                    </Gallery.Control>
                </Gallery.Wrap>
            </Gallery>
        </FullScreen>
    )
}

export default GalleryContainer