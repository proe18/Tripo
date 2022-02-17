import { useEffect, useState, createContext, useRef } from 'react'
import { useFullScreenHandle } from 'react-full-screen'
import { useLocation } from 'react-router-dom'

const GamesPageContext = createContext()

const GamesPageProvider = ({ children }) => {
    const { pathname } = useLocation()
    const [heightElement, setHeightElement] = useState(618)
    const indexImage = useRef()
    const [image, setImage] = useState()
    const [isCloseGallery, setIsCloseGallery] = useState(true)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isPre, setIsPre] = useState(false)
    const [isNext, setIsNext] = useState(false)
    const handle = useFullScreenHandle()

    const imageElements = document.querySelectorAll('#imageElement')

    useEffect(() => {
        const getHeightElement = () => {
            setHeightElement(document.getElementById('groupElement').offsetHeight)
        }

        window.addEventListener('resize', getHeightElement)

        return () => window.removeEventListener('resize', getHeightElement)

    }, [])

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

    const handleKeyDown = (key) => {
        if (key === 'Escape') {
            setIsCloseGallery(true)
            setIsFullscreen(false)
        }
    }

    const handleFullscreen = () => {
        handle.active === false ? handle.enter() : handle.exit()
        setIsFullscreen(!isFullscreen)
    }

    const handlePre = () => {
        if (indexImage.current > 0) indexImage.current = indexImage.current - 1
        setImage(imageElements[indexImage.current].src)
        setIsPre(!isPre)
        setIsNext(!isNext)
    }

    const handleNext = () => {
        if (indexImage.current <= 0) indexImage.current = indexImage.current + 1
        setImage(imageElements[indexImage.current].src)
        setIsPre(!isPre)
        setIsNext(!isNext)
    }

    const value = {
        heightElement,
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
        handleNext,
        handleKeyDown
    }

    return <GamesPageContext.Provider value={value}>{children}</GamesPageContext.Provider>
}

export { GamesPageProvider, GamesPageContext }