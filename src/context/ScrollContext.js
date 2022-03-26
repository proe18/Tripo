import { useEffect, useRef, useState, useCallback, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
    const { pathname } = useLocation()
    const [isActive, setIsActive] = useState(pathname === ROUTES.HOME ? false : undefined)
    const [isEqual, setIsEqual] = useState(false)
    const [isParam, setIsParam] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const listGameElement = useRef('listGame')
    const contactElement = useRef('contact')
    const paramRef = useRef('')
    const pathRoute = useRef(pathname)
    const timerID1 = useRef(0)
    const timerID2 = useRef(0)

    const scrollToSmoothly = (pos, time) => {
        let currentPos = window.pageYOffset
        let start = null
        if (time === null) time = 500
        pos = +pos
        time = +time
        window.requestAnimationFrame(function step(currentTime) {
            start = !start ? currentTime : start
            let progress = currentTime - start
            if (currentPos < pos) {
                window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos)
            } else {
                window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time))
            }
            if (progress < time) {
                window.requestAnimationFrame(step)
            } else {
                window.scrollTo(0, pos)
            }
        })
    }

    const getElement = useCallback(el => {
        if (el === 'Games') return listGameElement.current
        if (el === 'Contact') return contactElement.current
    }, [])

    const handleScroll = param => {
        if (param) {
            setIsParam(true)
            paramRef.current = param
        }
        if (!param && pathname === pathRoute.current) {
            setIsEqual(true)
            setIsShow(true)
            paramRef.current = undefined
        }
        if (!param && pathname !== pathRoute.current) paramRef.current = undefined
        if (!param) setIsShow(false)
        setIsActive(undefined)
        pathRoute.current = pathname
    }
    
    const scrollToPosition = useCallback(() => {
        timerID2.current = setTimeout(() => {
            const element = getElement(paramRef.current)
            let position = Math.floor(element?.getBoundingClientRect().top + window.pageYOffset)
            position = paramRef.current === 'Games' ? position - 90 : position - 60
            scrollToSmoothly(position, 1500)
            setIsParam(false)
        }, 500)
    }, [getElement])

    useEffect(() => {
        //scroll to top page if user click the same button without parameter
        if (window.pageYOffset > 0 && isEqual) {
            window.scrollTo(0, 0)
            setIsEqual(false)
        }

        //scroll to position with parameter
        if (pathname === ROUTES.HOME && isParam) {
            scrollToPosition()
        }
        if (pathRoute.current !== pathname) {
            window.scrollTo(0, 0)
            scrollToPosition()
        }

        if (pathname === ROUTES.HOME) {
            timerID1.current = setInterval(() => setIsActive(window.pageYOffset >= 4296), 300)
        }

        const handleReload = () => {
            if (window.pageYOffset > 0) scrollToSmoothly(0, 1200)
        }

        window.addEventListener('load', handleReload)

        return () => {
            window.removeEventListener('load', handleReload)
            clearInterval(timerID1.current)
            clearTimeout(timerID2.current)
        }
    }, [pathname, isEqual, isParam, scrollToPosition])

    // const homeAboutHeading = useRef('home-about-heading')
    // const homeOurGamesHeading = useRef('home-ourgames-heading')
    // const homeOurGamesContent = useRef('home-ourgames-content')
    // const homeJoinTeamHeading = useRef('home-jointeam-heading')
    // const imageAbout = useRef('image-about')
    // const imageJoinTeam = useRef('image-joinTeam')
    // const topHomeElements = useRef({})
    // const [activeElement, setActiveElement] = useState({})

    const getTopElements = useCallback(elements => {
        if (typeof elements === 'object') {
            const topElements = {}
            for (let key in elements) {
                const newObject =
                    { [key]: Math.floor(elements[key]?.getBoundingClientRect().top + window.scrollY - 200) }
                Object.assign(topElements, newObject)
            }
            return topElements
        }
    }, [])

    useEffect(() => {
        const timerID = setTimeout(() => {
            setIsShow(true)
            // const homeElements = {
            //     about: homeAboutHeading.current,
            //     imageAbout: imageAbout.current,
            //     ourGamesHeading: homeOurGamesHeading.current,
            //     ourGamesContent: homeOurGamesContent.current,
            //     joinTeam: homeJoinTeamHeading.current,
            //     imageJoinTeam: imageJoinTeam.current
            // }
            // topHomeElements.current = getTopElements(homeElements)
        }, 500)

        const handleScroll = () => {
            // const topElements = topHomeElements.current
            // for (let key in topElements) {
            //     if (window.scrollY >= topElements[key]) {
            //         Object.assign(topElements, { [key]: true })
            //     }
            // }
            // setActiveElement(topElements)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timerID)
        }

    }, [pathname, getTopElements])

    const value = {
        isActive,
        listGameElement,
        contactElement,
        // homeAboutHeading,
        // homeOurGamesHeading,
        // homeOurGamesContent,
        // homeJoinTeamHeading,
        // imageAbout,
        // imageJoinTeam,
        isShow,
        // activeElement,
        handleScroll
    }

    return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export { ScrollContext, ScrollProvider }