import { createContext, useState, useRef, useEffect } from 'react'
import { useFullScreenHandle } from 'react-full-screen'
import { useLocation } from 'react-router-dom'

const GalleryContext = createContext()

const GalleryProvider = ({ children }) => {
    const { pathname } = useLocation()
    const indexImage = useRef()
    const groupImage = useRef('groupImage')
    const sliderElement = useRef('slider')
    const isDragging = useRef(false)
    const startPosition = useRef(0)
    const preTranslate = useRef(0)
    const currentTranslate = useRef(0)
    const [image, setImage] = useState()
    const [slidePosition, setSlidePosition] = useState(0)
    const [isCloseGallery, setIsCloseGallery] = useState(true)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isPre, setIsPre] = useState(false)
    const [isNext, setIsNext] = useState(false)
    const handle = useFullScreenHandle()

    //reset state
    useEffect(() => {
        indexImage.current = undefined
        setImage()
        setIsPre(false)
        setIsNext(false)
    }, [pathname])

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

    const handleCloseGallery = () => {
        setIsCloseGallery(true)
        setIsFullscreen(false)
        handle.exit()
    }

    //handle click button previous
    const handlePre = () => {
        if (indexImage.current > 0) indexImage.current = indexImage.current - 1
        setImage(groupImage.current.childNodes[indexImage.current].childNodes[0].src)
        setIsPre(!isPre)
        setIsNext(!isNext)
    }

    //handle click button next
    const handleNext = () => {
        if (indexImage.current <= 0) indexImage.current = indexImage.current + 1
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
    const getPoitionX = touches => {
        return touches[0].clientX
    }

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