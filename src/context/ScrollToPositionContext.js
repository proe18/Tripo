import { useEffect, useRef, useState, useCallback, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const ScrollToPositionContext = createContext()

const ScrollToPositionProvider = ({ children }) => {
    const { pathname } = useLocation()
    const [isActive, setIsActive] = useState(pathname === ROUTES.HOME ? false : undefined)
    const [isEqualParam, setIsEqualParam] = useState(false)
    const [isEqual, setIsEqual] = useState(false)
    const listGameElement = useRef('listGame')
    const contactElement = useRef('contact')
    const paramRef = useRef('')
    const timerID1 = useRef(0)
    const timerID2 = useRef(0)

    const getElement = useCallback(el => {
        if (el === 'Games') return listGameElement.current
        if (el === 'Contact') return contactElement.current
    }, [])

    const handleScroll = param => {
        if (param) {
            if (param === 'Games') setIsActive(false)
            if (param === 'Contact') setIsActive(true)
            paramRef.current = param
            setIsEqualParam(param === paramRef.current)
        } else {
            setIsActive(undefined)
            setIsEqual(true)
        }
    }

    //scroll the page without parameters
    useEffect(() => {
        if (window.scrollY > 0 && isEqual) {
            window.scrollTo(0, 0)
            setIsEqual(false)
        }

        if (pathname === ROUTES.HOME) {
            timerID1.current = setInterval(() => setIsActive(window.scrollY >= 4296), 800)
        }

        const handleReload = () => {
            if (window.scrollY > 0) window.scrollTo(0, 0)
        }

        window.addEventListener('load', handleReload)

        return () => {
            window.removeEventListener('load', handleReload)
            clearInterval(timerID1.current)
        }
    }, [pathname, isEqual])
    //=========================================================================

    //scroll the page with parameter
    useEffect(() => {
        if (paramRef.current) {
            const element = getElement(paramRef.current)
            if (pathname === ROUTES.HOME && isEqualParam) {
                timerID2.current = setTimeout(() => {
                    const position = element?.getBoundingClientRect().top + window.scrollY
                    if (paramRef.current === 'Games') {
                        window.scrollTo(0, Math.floor(position - 90))
                        setIsEqualParam(false)
                    }
                    if (paramRef.current === 'Contact') {
                        window.scrollTo(0, Math.floor(position - 60))
                        setIsEqualParam(false)
                    }
                }, 50)
            }
        }

        return () => clearTimeout(timerID2.current)
    }, [pathname, isEqualParam, getElement])
    //=========================================================================

    const value = {
        isActive,
        listGameElement,
        contactElement,
        handleScroll
    }

    return <ScrollToPositionContext.Provider value={value}>{children}</ScrollToPositionContext.Provider>
}

export { ScrollToPositionContext, ScrollToPositionProvider }