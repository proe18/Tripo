import { useEffect, useRef, useLayoutEffect, useState, useCallback, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
    const { pathname } = useLocation()

    const backGroundHome = useRef('bg')
    const homeAboutHeading = useRef('home-about-heading')
    const homeOurGamesHeading = useRef('home-ourgames-heading')
    const homeOurGamesContent = useRef('home-ourgames-content')
    const homeOurGamesBg = useRef('home-ourgames-bg')
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

    const gamesContent = useRef('games-content')
    const postionContent = useRef('position-content')

    const elements = useRef({})
    const heightElement = useRef(0)
    const [activeElement, setActiveElement] = useState({})

    const [heightImage, setHeightImage] = useState(0)
    const [marginJoinTeam, setMarginJoinTeam] = useState(0)
    const [translate, setTranslate] = useState(0)

    const getElements = useCallback(path => {
        const homeElements = {
            about: homeAboutHeading.current,
            image: imageHomeAbout.current,
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

        const gamesElements = { content: gamesContent.current }
        const positionElements = { content: postionContent.current }

        switch (path) {
            case ROUTES.HOME:
                elements.current = homeElements
                break
            case ROUTES.CAREERS:
                elements.current = careersElements
                break
            case ROUTES.ABOUT:
                elements.current = aboutElements
                break
            case ROUTES.KIPON:
            case ROUTES.ROBOTRIX:
            case ROUTES.TREASURE:
                elements.current = gamesElements
                break
            case `${ROUTES.CAREERS}/${ROUTES.MANAGER}`:
            case `${ROUTES.CAREERS}/${ROUTES.TESTER}`:
            case `${ROUTES.CAREERS}/${ROUTES.DESIGNER}`:
            case `${ROUTES.CAREERS}/${ROUTES.DEVELOPER}`:
                elements.current = positionElements
                break
            default: break
        }
    }, [])

    const setElements = useCallback(elements => {
        if (typeof elements === 'object') {
            const topElements = {}
            let topElement
            for (let key in elements) {
                topElement = Math.floor(elements[key]?.getBoundingClientRect().top + window.pageYOffset - 200)
                if (window.pageYOffset + 350 >= topElement) {
                    Object.assign(topElements, { [key]: true })
                }
            }
            return topElements
        }
    }, [])

    //caculate translate left for element
    const getHeightElement = useCallback(el => el?.offsetHeight, [])
    const translateLeft = useCallback(heightElement => {
        if (window.pageYOffset <= heightElement) {
            return Math.floor(window.pageYOffset / 10)
        }
    }, [])
    //=========================================================

    const getOpacity = useCallback(el => {
        const heightElement = el?.offsetHeight
        let opacity
        // if (window.pageYOffset <= heightElement + window.pageYOffset) {
            opacity = Math.floor(window.pageYOffset % heightElement)
        // }
        console.log(opacity);
    }, [])

    //handle scroll page
    useEffect(() => {
        const timerIDTimeOut = setTimeout(() => {
            getElements(pathname)

            if (pathname === ROUTES.HOME) {
                heightElement.current = getHeightElement(backGroundHome.current)
            }

            if (pathname === ROUTES.ABOUT) {
                heightElement.current = getHeightElement(headerAbout.current)
            }
        }, 500)

        const handleScroll = () => {
            setActiveElement(setElements(elements.current))
            setTranslate(translateLeft(heightElement.current) || 0)
            // getOpacity(homeOurGamesBg.current)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timerIDTimeOut)
        }

    }, [pathname, translateLeft, setElements, getElements, getHeightElement, getOpacity])
    //=========================================================

    //set margin element and get height element
    const setElement = () => {
        setHeightImage(imageJoinTeam.current?.offsetHeight)
        setMarginJoinTeam(homeOurGamesContent.current?.offsetHeight)
    }
    //=========================================================

    useLayoutEffect(setElement, [])
    useEffect(() => {
        setTranslate(0)

        window.addEventListener('resize', setElement)

        return () => window.removeEventListener('resize', setElement)
    }, [pathname])

    const value = {
        translate,

        marginJoinTeam,
        heightImage,
        backGroundHome,
        homeAboutHeading,
        homeOurGamesHeading,
        homeOurGamesContent,
        homeOurGamesBg,
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

        gamesContent,
        postionContent,

        activeElement
    }

    return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export { ScrollContext, ScrollProvider }