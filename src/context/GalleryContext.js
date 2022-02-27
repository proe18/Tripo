import { createContext, useState, useRef, useEffect } from 'react'
import { useFullScreenHandle } from 'react-full-screen'
import { useLocation } from 'react-router-dom'

const GalleryContext = createContext()

const GalleryProvider = ({ children }) => {
    const { pathname } = useLocation()
    const indexImage = useRef()
    const [image, setImage] = useState()
    const [isCloseGallery, setIsCloseGallery] = useState(true)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isPre, setIsPre] = useState(false)
    const [isNext, setIsNext] = useState(false)
    const handle = useFullScreenHandle()

    const imageElements = document.querySelectorAll('#imageElement')

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

    const handleFullscreen = () => {
        handle.active === false ? handle.enter() : handle.exit()
        setIsFullscreen(!isFullscreen)
    }

    //handle click button previous
    const handlePre = () => {
        if (indexImage.current > 0) indexImage.current = indexImage.current - 1
        setImage(imageElements[indexImage.current].src)
        setIsPre(!isPre)
        setIsNext(!isNext)
    }

    //handle click button next
    const handleNext = () => {
        if (indexImage.current <= 0) indexImage.current = indexImage.current + 1
        setImage(imageElements[indexImage.current].src)
        setIsPre(!isPre)
        setIsNext(!isNext)
    }

    const value = {
        image,
        isPre,
        isNext,
        isCloseGallery,
        isFullscreen,
        handle,
        handleGallery,
        handleCloseGallery,
        handleFullscreen,
        handlePre,
        handleNext
    }

    return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
}

export { GalleryContext, GalleryProvider }