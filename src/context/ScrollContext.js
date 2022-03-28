import { useEffect, useRef, useState, useCallback, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
    const { pathname } = useLocation()
    const [isActive, setIsActive] = useState(pathname === ROUTES.HOME ? false : undefined)
    const [isParam, setIsParam] = useState(false)
    const [isEqualParam, setIsEqualParam] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const listGameElement = useRef('listGame')
    const contactElement = useRef('contact')
    const paramRef = useRef()
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

    const handleScroll = param => {
        if (param) {
            setIsParam(true)
            setIsEqualParam(paramRef.current === param)
            paramRef.current = param
        }
        if (!param) {
            if (pathname === pathRoute.current) {
                setIsShow(true)
            }
            setIsShow(false)
            setIsParam(false)
            setIsEqualParam(false)
            paramRef.current = undefined
        }
        setIsActive(undefined)
        pathRoute.current = pathname
    }
    // console.log(isShow);

    const scrollToPosition = useCallback(el => {
        const element = el === 'Games' ? listGameElement.current : contactElement.current
        timerID2.current = setTimeout(() => {
            let position = Math.floor(element?.getBoundingClientRect().top + window.pageYOffset)
            position = paramRef.current === 'Games' ? position - 90 : position - 60
            scrollToSmoothly(position, 1500)
            setIsParam(false)
        }, 500)
    }, [])

    useEffect(() => {
        if (pathname === ROUTES.HOME) {
            timerID1.current = setInterval(() => setIsActive(window.pageYOffset >= 4296), 300)
        }

        if (!isParam && pathname !== pathRoute.current) window.scrollTo(0, 0)

        //scroll to position with parameter
        if (isParam && pathname !== pathRoute.current) {
            window.scrollTo(0, 0)
            scrollToPosition(paramRef.current)
        }
        if (isParam && pathname === pathRoute.current) {
            if (isEqualParam) {
                scrollToPosition(paramRef.current)
            } else {
                scrollToPosition(paramRef.current)
            }
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
    }, [pathname, isParam, isEqualParam, scrollToPosition])

    // const homeAboutHeading = useRef('home-about-heading')
    // const homeOurGamesHeading = useRef('home-ourgames-heading')
    // const homeOurGamesContent = useRef('home-ourgames-content')
    // const homeJoinTeamHeading = useRef('home-jointeam-heading')
    // const imageAbout = useRef('image-about')
    // const imageJoinTeam = useRef('image-joinTeam')
    // const topHomeElements = useRef({})
    // const [activeElement, setActiveElement] = useState({})
    const headerElement = useRef('header')
    const gamesElement = useRef('games')
    const backGroundHome = useRef('bg')
    const imageAbout = useRef('image')
    const headerAbout = useRef('header')
    const [marginGames, setMarginGames] = useState(0)
    const [marginAbout, setMarginAbout] = useState(0)
    const [translate, setTranslate] = useState(0)

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

    const setTranslateLeft = useCallback((el) => {
        const heightElement = el?.offsetHeight
        if (window.pageYOffset <= heightElement) {
            setTranslate(Math.floor(window.pageYOffset / 10))
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
            if (pathname === ROUTES.HOME) {
                setTranslateLeft(backGroundHome.current)
            }
            if (pathname === ROUTES.ABOUT) {
                setTranslateLeft(headerAbout.current)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timerID)
        }

    }, [pathname, getTopElements, setTranslateLeft])

    useEffect(() => {

        //set margin for games element and about element
        const setHeightElement = () => {
            setMarginGames(headerElement.current?.offsetHeight)
            setMarginAbout(gamesElement.current?.offsetHeight)
        }

        window.addEventListener('resize', setHeightElement)

        return () => window.removeEventListener('resize', setHeightElement)
    }, [pathname, marginGames])

    const value = {
        isActive,
        listGameElement,
        contactElement,
        headerElement,
        gamesElement,
        marginGames,
        backGroundHome,
        marginAbout,
        translate,
        imageAbout,
        headerAbout,
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