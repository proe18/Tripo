import { useEffect, useRef, useState, useCallback, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const ScrollToPositionContext = createContext()

const ScrollToPositionProvider = ({ children }) => {
    const { pathname } = useLocation()
    const [isActive, setIsActive] = useState(pathname === ROUTES.HOME ? false : undefined)
    const [isEqual, setIsEqual] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    const listGameElement = useRef('listGame')
    const contactElement = useRef('contact')
    const paramRef = useRef()
    const timerID2 = useRef(0)

    const getElement = useCallback(el => {
        if (el === 'Games') {
            return listGameElement.current
        }
        if (el === 'Contact') {
            return contactElement.current
        }
    }, [])

    const handlePosition = param => {
        if (param) {
            setIsScroll(true)
            if (param === 'Games') setIsActive(false)
            if (param === 'Contact') setIsActive(true)
            paramRef.current = param
            setIsEqual(param === paramRef.current)
        }
        setIsScroll(false)
        setIsActive(undefined)
    }

    useEffect(() => {
        if (paramRef.current) {
            const element = getElement(paramRef.current)
            if (pathname === ROUTES.HOME && isEqual === true) {
                timerID2.current = setTimeout(() => {
                    const position = element?.getBoundingClientRect().top + window.scrollY
                    window.scrollTo(0, Math.floor(position))
                    setIsEqual(false)
                }, 100)
            }
        }
        
        if (pathname !== ROUTES.HOME) setIsActive(undefined)

        return () => clearTimeout(timerID2.current)
    }, [pathname, isEqual, getElement])

    useEffect(() => {
        //scroll page when 'position' change
        if (window.scrollY !== 0 && !isScroll) window.scrollTo(0, 0)

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
    }, [pathname, isScroll])

    const value = {
        isActive,
        listGameElement,
        contactElement,
        handlePosition
    }

    return <ScrollToPositionContext.Provider value={value}>{children}</ScrollToPositionContext.Provider>
}

export { ScrollToPositionContext, ScrollToPositionProvider }