import { useContext, memo } from 'react'
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
        isMobileGallery,
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
                        {isMobileGallery === false
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
                    <Gallery.Control hideButton={isPre}>
                        {isPre &&
                            <Gallery.ButtonIcon onClick={handlePre}>
                                <BsChevronLeft />
                            </Gallery.ButtonIcon>
                        }
                        {isNext &&
                            <Gallery.ButtonIcon onClick={handleNext}>
                                <BsChevronRight />
                            </Gallery.ButtonIcon>
                        }
                    </Gallery.Control>
                </Gallery.Wrap>
            </Gallery>
        </FullScreen>
    )
}

export default memo(GalleryContainer)