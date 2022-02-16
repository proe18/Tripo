import { useEffect, useState, createContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const GamesPageContext = createContext()

const GamesPageProvider = ({ children }) => {
    const { pathname } = useLocation()
    const [heightElement, setHeightElement] = useState(618)
    const indexImage = useRef()
    const [image, setImage] = useState()
    const [isCloseGallery, setIsCloseGallery] = useState(true)
    const [isPre, setIsPre] = useState(false)
    const [isNext, setIsNext] = useState(false)

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
        setIsCloseGallery(!isCloseGallery)
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
        handleGallery,
        handleCloseGallery,
        handlePre,
        handleNext
    }

    return <GamesPageContext.Provider value={value}>{children}</GamesPageContext.Provider>
}

export { GamesPageProvider, GamesPageContext }