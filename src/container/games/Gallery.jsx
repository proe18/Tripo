import { useContext } from 'react'
import { FullScreen } from 'react-full-screen'
import { GrClose } from "react-icons/gr"
import { BsArrowsAngleExpand, BsArrowsAngleContract, BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { Gallery } from '../../components'
import { GalleryContext } from '../../context'

const GalleryContainer = ({ data }) => {
    const {
        image,
        isPre,
        isNext,
        // isMobile,
        isCloseGallery,
        isFullscreen,
        slidePosition,
        handle,
        handlePre,
        handleNext,
        handleCloseGallery,
        handleFullscreen,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd
    } = useContext(GalleryContext)
    console.log(slidePosition);

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
                    <Gallery.Slider
                        scaleImage={isFullscreen}
                        onTouchStart={({ touches }) => handleTouchStart(touches)}
                        onTouchMove={({ touches }) => handleTouchMove(touches)}
                        onTouchEnd={handleTouchEnd}
                        onDragStart={e => {
                            e.preventDefault()
                            e.stopPropagation()
                            return false
                        }}
                    >
                        {(window.innerHeight > 640 && window.innerWidth > 640)
                            ? <Gallery.Slide>
                                <Gallery.Image src={image} alt='' />
                            </Gallery.Slide>
                            : data.listImage.map((image, index) =>
                                <Gallery.Slide key={index} slidePosition={slidePosition}>
                                    <Gallery.Image src={image.img} alt='' />
                                </Gallery.Slide>
                            )
                        }
                    </Gallery.Slider>
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