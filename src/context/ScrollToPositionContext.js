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
        setIsActive(number === 4356)
        position.current = number
        console.log(position.current);
    }
    // console.log(isActive);
    useEffect(() => {
        window.scrollTo(0, scrollPosition)
        if (scrollPosition > 0) {
            position.current = 0
        }

        const handleReload = () => {
            if (pathname === ROUTES.HOME) setIsActive(false)
            position.current = 0
        }
        
        const timerID = setInterval(() => {
            if (pathname === ROUTES.HOME) {
                window.scrollY < 4356 ? setIsActive(false) : setIsActive(true)
            }
        }, 800)
        console.log(position.current);

        window.addEventListener('load', handleReload)

        return () => {
            window.removeEventListener('load', handleReload)
            clearInterval(timerID)
        }
    }, [pathname, scrollPosition])

    const value = {
        isActive,
        setIsActive,
        handlePosition
    }

    return <ScrollToPositionContext.Provider value={value}>{children}</ScrollToPositionContext.Provider>
}

export { ScrollToPositionContext, ScrollToPositionProvider }