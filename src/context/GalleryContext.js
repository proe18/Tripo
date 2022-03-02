import { createContext, useState, useRef, useEffect, useCallback } from 'react'
import { useFullScreenHandle } from 'react-full-screen'
import { useLocation } from 'react-router-dom'

const GalleryContext = createContext()

const GalleryProvider = ({ children }) => {
    //variables to handle gallery
    const { pathname } = useLocation()
    const indexImage = useRef()
    // const [isMobile, setIsMobile] = useState(false)

    //variables to handle click event
    const groupImage = useRef('groupImage')
    const [image, setImage] = useState()
    const [isCloseGallery, setIsCloseGallery] = useState(true)
    const [isPre, setIsPre] = useState(false)
    const [isNext, setIsNext] = useState(false)
    //--------------------------------------------------------

    //variables to handle touch event
    const isDragging = useRef(false)
    const startPosition = useRef(0)
    const position = useRef(0)
    const translate = useRef(0)
    const [slidePosition, setSlidePosition] = useState(0)
    //--------------------------------------------------------

    //variables to handle fullscreen
    const [isFullscreen, setIsFullscreen] = useState(false)
    const handle = useFullScreenHandle()
    //--------------------------------------------------------

    //--------------------------------------------------------
    //handle gallery
    const getPoitionX = touches => touches[0].clientX

    const setPositionByIndex = useCallback(() => {
        translate.current = indexImage.current * -window.innerWidth
        setSlidePosition(translate.current)
    }, [])

    //reset states and variables
    useEffect(() => {
        indexImage.current = undefined
        startPosition.current = 0
        translate.current = 0
        position.current = 0
        setImage()
        setIsPre(false)
        setIsNext(false)
    }, [pathname])

    //handle open gallery and set states
    const handleGallery = (image, index) => {
        indexImage.current = index
        setImage(image)
        setPositionByIndex()
        setIsCloseGallery(!isCloseGallery)
        if (index === 0) {
            setIsPre(false)
            setIsNext(true)
        }
        if (index === groupImage.current.childNodes.length - 1) {
            setIsPre(true)
            setIsNext(false)
        }
    }

    //handle close gallery, reset states and variables
    const handleCloseGallery = () => {
        startPosition.current = 0
        translate.current = 0
        position.current = 0
        setIsCloseGallery(true)
        setIsFullscreen(false)
        handle.exit()
    }

    //handle click event
    const handlePre = () => {
        if (indexImage.current > 0) indexImage.current -= 1
        setImage(groupImage.current.childNodes[indexImage.current].childNodes[0].src)
        setIsPre(!isPre)
        setIsNext(!isNext)
    }

    const handleNext = () => {
        if (indexImage.current < groupImage.current.childNodes.length - 1) indexImage.current += 1
        setImage(groupImage.current.childNodes[indexImage.current].childNodes[0].src)
        setIsPre(!isPre)
        setIsNext(!isNext)
    }
    //--------------------------------------------------------------------

    //handle touch event
    const handleTouchStart = touches => {
        startPosition.current = getPoitionX(touches)
        isDragging.current = true
    }

    const handleTouchMove = touches => {
        if (isDragging.current) {
            const currentPosition = getPoitionX(touches)
            position.current = currentPosition - startPosition.current
        }
    }

    const handleTouchEnd = () => {
        isDragging.current = false
        const movedBy = position.current
        if (movedBy < -100 && indexImage.current < groupImage.current.childNodes.length - 1) indexImage.current += 1
        if (movedBy > 100 && indexImage.current > 0) indexImage.current -= 1
        setPositionByIndex()
        console.log(movedBy);
        console.log(indexImage.current);
    }
    //--------------------------------------------------------------------

    //set width for slide if window resize
    useEffect(() => {
        const handleResize = () => {
            setPositionByIndex()
            // setIsMobile(
            //     (window.innerHeight <= 640 && window.innerWidth <= 640)
            //     || window.innerHeight <= 640
            //     || window.innerWidth <= 640
            // )
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [setPositionByIndex])
    //--------------------------------------------------------------------

    //handle full screen 
    const handleFullscreen = () => {
        handle.active === false ? handle.enter() : handle.exit()
        setIsFullscreen(!isFullscreen)
    }
    //--------------------------------------------------------------------

    //--------------------------------------------------------------------

    const value = {
        image,
        groupImage,
        // isMobile,
        isPre,
        isNext,
        isCloseGallery,
        isFullscreen,
        handle,
        slidePosition,
        handleGallery,
        handleCloseGallery,
        handleFullscreen,
        handlePre,
        handleNext,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd
    }

    return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
}

export { GalleryContext, GalleryProvider }