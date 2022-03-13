import { useEffect, useRef, useState, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const ScrollToPositionContext = createContext()

const ScrollToPositionProvider = ({ children }) => {
    const { pathname } = useLocation()
    const [isActive, setIsActive] = useState(pathname === ROUTES.HOME ? false : undefined)
    const [isEqual, setIsEqual] = useState(false)
    const scrollToPosition = useRef(0)
    const positionScroll = scrollToPosition.current

    const handlePosition = number => {
        switch (number) {
            case 4356:
                setIsActive(true)
                break
            case 2247:
                setIsActive(false)
                break
            default:
                setIsActive(undefined)
                break
        }
        setIsEqual(number === scrollToPosition.current)
        scrollToPosition.current = number
    }

    useEffect(() => {
        //scroll page when 'positionScroll' don't change
        if (isEqual && window.scrollY !== positionScroll) {
            window.scrollTo(0, positionScroll)
            setIsEqual(false)
        }

        //scroll page when 'positionScroll' change
        window.scrollTo(0, positionScroll)
        
        const handleReload = () => {
            if (window.scrollY !== 0) window.scrollTo(0, 0)
        }

        const timerID = setInterval(() => {
            if (pathname === ROUTES.HOME) setIsActive(window.scrollY >= 4356)
        }, 800)

        window.addEventListener('load', handleReload)

        return () => {
            window.removeEventListener('load', handleReload)
            clearInterval(timerID)
        }
    }, [pathname, isEqual, positionScroll])

    const value = {
        isActive,
        handlePosition
    }

    return <ScrollToPositionContext.Provider value={value}>{children}</ScrollToPositionContext.Provider>
}

export { ScrollToPositionContext, ScrollToPositionProvider }