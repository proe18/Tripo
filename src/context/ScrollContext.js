import { useEffect, useRef, useState, useCallback, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
    const { pathname } = useLocation()
    const homeAboutHeading = useRef('home-about-heading')
    const homeOurGamesHeading = useRef('home-ourgames-heading')
    const homeOurGamesContent = useRef('home-ourgames-content')
    const homeJoinTeamHeading = useRef('home-jointeam-heading')
    const imageHomeAbout = useRef('image-about')
    const imageJoinTeam = useRef('image-joinTeam')
    const topHomeElements = useRef({})
    const [activeElement, setActiveElement] = useState({})
    const headerElement = useRef('header')
    const gamesElement = useRef('games')
    const backGroundHome = useRef('bg')
    const imageAbout = useRef('image')
    const headerAbout = useRef('header')
    const [marginGames, setMarginGames] = useState(0)
    const [marginAbout, setMarginAbout] = useState(0)
    const [isScrollImage, setIsScrollImage] = useState(false)
    const [translate, setTranslate] = useState(0)

    const getTopElements = useCallback(elements => {
        if (typeof elements === 'object') {
            const topElements = {}
            let topElement
            for (let key in elements) {
                topElement = Math.floor(elements[key]?.getBoundingClientRect().top + window.scrollY - 200)
                if (window.pageYOffset + 400 >= topElement) {
                    Object.assign(topElements, { [key]: true })
                }
            }
            return topElements
        }
    }, [])

    const setTranslateLeft = useCallback((el) => {
        const heightElement = el?.offsetHeight
        if (window.pageYOffset <= heightElement) {
           let translateLeft = Math.floor(window.pageYOffset / 10)
           return translateLeft
        }
    }, [])

    useEffect(() => {
        setTranslate(0)
        const timerIDTimeOut = setTimeout(() => {
            const homeElements = {
                about: homeAboutHeading.current,
                imageAbout: imageHomeAbout.current,
                ourGamesHeading: homeOurGamesHeading.current,
                ourGamesContent: homeOurGamesContent.current,
                joinTeam: homeJoinTeamHeading.current,
                imageJoinTeam: imageJoinTeam.current
            }
            topHomeElements.current = homeElements
        }, 500)

        const handleScroll = () => {
            if (pathname === ROUTES.HOME) {
                setTranslate(setTranslateLeft(backGroundHome.current) || 0)
                setActiveElement(getTopElements(topHomeElements.current))
            }

            if (pathname === ROUTES.ABOUT) {
                setTranslate(setTranslateLeft(headerAbout.current) || 0)
            }
            setIsScrollImage(true)
        }
        const timerIDInterval = setInterval(() => {
            const prePosition = window.pageYOffset
            if (isScrollImage && window.pageYOffset === prePosition) setIsScrollImage(false)
        }, 3000)

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timerIDTimeOut)
            clearInterval(timerIDInterval)
        }

    }, [pathname, isScrollImage, setTranslateLeft, getTopElements])

    useEffect(() => {

        //set margin for games element and about element
        const setHeightElement = () => {
            setMarginGames(headerElement.current?.offsetHeight)
            setMarginAbout(gamesElement.current?.offsetHeight)
        }

        window.addEventListener('resize', setHeightElement)

        return () => window.removeEventListener('resize', setHeightElement)
    }, [pathname])

    const value = {
        headerElement,
        gamesElement,
        marginGames,
        backGroundHome,
        marginAbout,
        translate,
        imageAbout,
        headerAbout,
        isScrollImage,
        homeAboutHeading,
        homeOurGamesHeading,
        homeOurGamesContent,
        homeJoinTeamHeading,
        imageHomeAbout,
        imageJoinTeam,
        activeElement
    }

    return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export { ScrollContext, ScrollProvider }