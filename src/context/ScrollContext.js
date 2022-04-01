import { useEffect, useRef, useState, useCallback, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
    const { pathname } = useLocation()

    const headerElement = useRef('header')
    const gamesElement = useRef('games')
    const backGroundHome = useRef('bg')
    const homeAboutHeading = useRef('home-about-heading')
    const homeOurGamesHeading = useRef('home-ourgames-heading')
    const homeOurGamesContent = useRef('home-ourgames-content')
    const homeJoinTeamHeading = useRef('home-jointeam-heading')
    const imageHomeAbout = useRef('image-about')
    const imageJoinTeam = useRef('image-joinTeam')

    const careersJobTitle = useRef('careers-title')
    const careersSend = useRef('careers-sendCV')
    const careersListJob = useRef('careers-listJob')

    const imageAbout = useRef('image')
    const headerAbout = useRef('header')
    const aboutContent = useRef('about-content')
    const aboutTitleInfo = useRef('about-titleInfo')
    const aboutInfo = useRef('about-info')
    const aboutTitleFounders = useRef('about-titleFounders')
    const aboutFounders = useRef('about-founders')
    const aboutOurOffices = useRef('about-ourOffices')


    const elements = useRef({})
    const [activeElement, setActiveElement] = useState({})

    const [marginGames, setMarginGames] = useState(0)
    const [marginAbout, setMarginAbout] = useState(0)
    const [isScrollImage, setIsScrollImage] = useState(false)
    const [translate, setTranslate] = useState(0)

    const setElements = useCallback(elements => {
        if (typeof elements === 'object') {
            const topElements = {}
            let topElement
            for (let key in elements) {
                topElement = Math.floor(elements[key]?.getBoundingClientRect().top + window.scrollY - 200)
                if (window.pageYOffset + 500 >= topElement) {
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

            const careersElements = {
                title: careersJobTitle.current,
                send: careersSend.current,
                listJob: careersListJob.current
            }

            const aboutElements = {
                content: aboutContent.current,
                titleInfo: aboutTitleInfo.current,
                info: aboutInfo.current,
                titleFounders: aboutTitleFounders.current,
                founders: aboutFounders.current,
                offices: aboutOurOffices.current
            }

            switch (pathname) {
                case ROUTES.HOME:
                    elements.current = homeElements
                    break
                case ROUTES.CAREERS:
                    elements.current = careersElements
                    break
                case ROUTES.ABOUT:
                    elements.current = aboutElements
                    break
                default: break
            }
        }, 500)

        const handleScroll = () => {
            setActiveElement(setElements(elements.current))

            if (pathname === ROUTES.HOME) {
                setTranslate(setTranslateLeft(backGroundHome.current) || 0)
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

    }, [pathname, isScrollImage, setTranslateLeft, setElements])

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
        isScrollImage,
        translate,
        
        marginAbout,
        marginGames,
        headerElement,
        gamesElement,
        backGroundHome,
        homeAboutHeading,
        homeOurGamesHeading,
        homeOurGamesContent,
        homeJoinTeamHeading,
        imageHomeAbout,
        imageJoinTeam,

        careersJobTitle,
        careersSend,
        careersListJob,

        imageAbout,
        headerAbout,
        aboutContent,
        aboutTitleInfo,
        aboutInfo,
        aboutTitleFounders,
        aboutFounders,
        aboutOurOffices,

        activeElement
    }

    return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export { ScrollContext, ScrollProvider }