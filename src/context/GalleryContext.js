import { createContext, useState, useRef, useEffect, useCallback } from 'react'
import { useFullScreenHandle } from 'react-full-screen'
import { useLocation } from 'react-router-dom'

const GalleryContext = createContext()

const GalleryProvider = ({ children }) => {
    //variables to handle gallery
    const { pathname } = useLocation()
    const indexImage = useRef()
    
    //variables to handle click event
    const groupImage = useRef('groupImage')
    const [image, setImage] = useState()
    const [isCloseGallery, setIsCloseGallery] = useState(true)
    const [isPre, setIsPre] = useState(false)
    const [isNext, setIsNext] = useState(false)
    //--------------------------------------------------------

    //variables to handle touch event
    const sliderElement = useRef('slider')
    const isDragging = useRef(false)
    const startPosition = useRef(0)
    const preTranslate = useRef(0)
    const currentTranslate = useRef(0)
    // const [sliderWidth, setSliderWidth] = useState(0)
    const [slidePosition, setSlidePosition] = useState(0)
    //--------------------------------------------------------
    
    //variables to handle fullscreen
    const [isFullscreen, setIsFullscreen] = useState(false)
    const handle = useFullScreenHandle()
    //--------------------------------------------------------

    //--------------------------------------------------------

    //reset state
    useEffect(() => {
        indexImage.current = undefined
        startPosition.current = 0
        currentTranslate.current = 0
        preTranslate.current = 0
        setImage()
        setIsPre(false)
        setIsNext(false)
    }, [pathname])

    //handle open gallery and set state
    const handleGallery = (image, index) => {
        indexImage.current = index
        setImage(image)
        setIsCloseGallery(!isCloseGallery)
        if (index === 0) {
            setIsPre(false)
            setIsNext(true)
        }
        if (index === 1) {
            setIsPre(true)
            setIsNext(false)
        }
    }

    //handle close gallery and reset state
    const handleCloseGallery = () => {
        startPosition.current = 0
        currentTranslate.current = 0
        preTranslate.current = 0
        setIsCloseGallery(true)
        setIsFullscreen(false)
        handle.exit()
    }

    //handle click button previous
    const handlePre = () => {
        if (indexImage.current > 0) indexImage.current -= 1
        setImage(groupImage.current.childNodes[indexImage.current].childNodes[0].src)
        setIsPre(!isPre)
        setIsNext(!isNext)
    }

    //handle click button next
    const handleNext = () => {
        if (indexImage.current <= 0) indexImage.current += 1
        setImage(groupImage.current.childNodes[indexImage.current].childNodes[0].src)
        setIsPre(!isPre)
        setIsNext(!isNext)
    }
    //--------------------------------------------------------------------

    //handle full screen 
    const handleFullscreen = () => {
        handle.active === false ? handle.enter() : handle.exit()
        setIsFullscreen(!isFullscreen)
    }
    //--------------------------------------------------------------------

    //handle event touch on mobile device
    const getPoitionX = touches => touches[0].clientX
    // const getSliderWidth = (ref) => ref.current.clientWidth
    
    const setPositionByIndex = useCallback(() => {
        currentTranslate.current = indexImage.current * -window.innerWidth
        preTranslate.current = currentTranslate.current
        setSlidePosition(currentTranslate.current)
        console.log('pre translate: ', preTranslate.current);
        console.log('current translate: ', currentTranslate.current);
    }, [])

    const handleTouchStart = touches => {
        startPosition.current = getPoitionX(touches)
        isDragging.current = true
    }

    const handleTouchMove = touches => {
        if (isDragging.current) {
            const currentPosition = getPoitionX(touches)
            currentTranslate.current = preTranslate.current + currentPosition - startPosition.current
            setSlidePosition(currentTranslate.current)
        }
    }

    const handleTouchEnd = () => {
        isDragging.current = false
        const movedBy = currentTranslate.current - preTranslate.current
        if (movedBy < -100 && indexImage.current <= 0) indexImage.current += 1 
        if (movedBy > 100 && indexImage.current > 0) indexImage.current -= 1 
        setPositionByIndex()
    }
    //--------------------------------------------------------------------

    const value = {
        image,
        sliderElement,
        groupImage,
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