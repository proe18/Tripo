import { useEffect, useRef, createContext } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToPositionContext = createContext()

const ScrollToPositionProvider = ({ children }) => {
    const { pathname } = useLocation()
    const position = useRef(0)

    const handlePosition = number => position.current = number

    useEffect(() => {
        window.scrollTo(0, position.current)
        position.current = 0
    }, [pathname, position.current])

    return <ScrollToPositionContext.Provider value={handlePosition}>{children}</ScrollToPositionContext.Provider>
}

export { ScrollToPositionContext, ScrollToPositionProvider }