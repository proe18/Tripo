import { useEffect, useRef, useState, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const ScrollToPositionContext = createContext()

const ScrollToPositionProvider = ({ children }) => {
    const { pathname } = useLocation()
    const [isActive, setIsActive] = useState(pathname === ROUTES.HOME ? false : undefined)
    const position = useRef(0)
    const scrollPosition = position.current

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
        position.current = number
    }

    useEffect(() => {
        window.scrollTo(0, scrollPosition)
        
        const timerID = setInterval(() => {
            if (pathname === ROUTES.HOME) setIsActive(window.scrollY >= 4356)
        }, 800)

        const handleReload = () => {
            if (pathname === ROUTES.HOME) setIsActive(false)
            window.scrollTo(0, 0)
            position.current = 0
        }

        window.addEventListener('load', handleReload)

        return () => {
            window.removeEventListener('load', handleReload)
            clearInterval(timerID)
        }
    }, [pathname, scrollPosition])

    const value = {
        isActive,
        handlePosition
    }

    return <ScrollToPositionContext.Provider value={value}>{children}</ScrollToPositionContext.Provider>
}

export { ScrollToPositionContext, ScrollToPositionProvider }