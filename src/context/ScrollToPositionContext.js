import { useEffect, useRef, useState, useCallback, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const ScrollToPositionContext = createContext()

const ScrollToPositionProvider = ({ children }) => {
    const { pathname } = useLocation()
    const [isActive, setIsActive] = useState(pathname === ROUTES.HOME ? false : undefined)
    const [isEqual, setIsEqual] = useState(false)
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

    const handleScroll = param => {
        if (param) {
            if (param === 'Games') setIsActive(false)
            if (param === 'Contact') setIsActive(true)
            paramRef.current = param
            setIsEqual(param === paramRef.current)
        }
        if (!param) setIsActive(undefined)
    }

    useEffect(() => {
        if (pathname !== ROUTES.HOME) setIsActive(undefined)

        if (paramRef.current) {
            const element = getElement(paramRef.current)
            if (pathname === ROUTES.HOME && isEqual) {
                timerID2.current = setTimeout(() => {
                    const position = element?.getBoundingClientRect().top + window.scrollY
                    window.scrollTo(0, Math.floor(position))
                    setIsEqual(false)
                }, 50)
            }
        }

        return () => clearTimeout(timerID2.current)
    }, [pathname, isEqual, getElement])

    useEffect(() => {
        const timerID = setInterval(() => {
            if (pathname === ROUTES.HOME) setIsActive(window.scrollY >= 4356)
        }, 800)

        if (window.scrollY !== 0) window.scrollTo(0, 0)

        return () => clearInterval(timerID)
    }, [pathname])

    const value = {
        isActive,
        listGameElement,
        contactElement,
        handleScroll
    }

    return <ScrollToPositionContext.Provider value={value}>{children}</ScrollToPositionContext.Provider>
}

export { ScrollToPositionContext, ScrollToPositionProvider }