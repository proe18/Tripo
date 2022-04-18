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
    const aboutContent = useRef('about-content')
    const aboutTitleInfo = useRef('about-titleInfo')
    const aboutInfo = useRef('about-info')
    const aboutTitleFounders = useRef('about-titleFounders')
    const aboutFounders = useRef('about-founders')
    const aboutOurOffices = useRef('about-ourOffices')

    const gamesContent = useRef('games-content')
    const postionContent = useRef('position-content')

    const elements = useRef()
    const dimensionsElement = useRef()
    const bgOurGames = useRef()
    const [activeElement, setActiveElement] = useState({})

    const [heightImage, setHeightImage] = useState(0)
    const [marginJoinTeam, setMarginJoinTeam] = useState(0)
    const [translate, setTranslate] = useState(0)
    const [opacity, setOpacity] = useState(0)

    //get element each page
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
    //=========================================================

    const setElements = useCallback(elements => {
        if (typeof elements === 'object') {
            const topElements = {}
            let topElement
            for (let key in elements) {
                topElement =
                    Math.floor(elements[key]?.getBoundingClientRect().top + window.pageYOffset - 200)
                if (window.pageYOffset + 350 >= topElement) {
                    Object.assign(topElements, { [key]: true })
                }
            }
            return topElements
        }
    }, [])

    //get dimensions of element
    const getDimensionsElement = useCallback(el => {
        const top = Math.floor(el?.getBoundingClientRect().top)
        const height = el?.getBoundingClientRect().height
        return { top, height }
    }, [])
    //=========================================================

    //calculate translate
    const translateElement = useCallback(topElement => {
        if (topElement === 0) {
            return Math.floor(window.pageYOffset / 10)
        } else if (topElement > 0) {
            return Math.floor((window.pageYOffset / 10) / 2)
        }
    }, [])
    //=========================================================

    //calculate opacity
    const opacityBg = useCallback(bgOurGamesObj => {
        if (typeof bgOurGamesObj === 'object') {
            const heightElement = bgOurGamesObj.height
            const topElement = Math.floor(bgOurGamesObj.element?.getBoundingClientRect().top)
            return Math.round(Math.abs(topElement / heightElement) * 100) / 100
        }
    }, [])
    //=========================================================

    //handle scroll page
    useEffect(() => {
        const timerID = setTimeout(() => {
            getElements(pathname)

            if (pathname === ROUTES.HOME) {
                dimensionsElement.current = getDimensionsElement(backGroundHome.current)
                bgOurGames.current =
                {
                    top: getDimensionsElement(homeOurGamesBg.current).top,
                    height: getDimensionsElement(homeOurGamesBg.current).height,
                    element: homeOurGamesBg.current
                }
            }

            if (pathname === ROUTES.ABOUT) {
                dimensionsElement.current = getDimensionsElement(imageAbout.current)
            }
        }, 1000)

        const handleScroll = () => {
            //active elements if user scroll page to each position
            setActiveElement(setElements(elements.current))
            //=========================================================

            //set translate element when user scroll page
            if (pathname === ROUTES.HOME || pathname === ROUTES.ABOUT) {
                const dimensions = dimensionsElement.current

                if (dimensions) {
                    const total = dimensions.top + dimensions.height

                    if (window.pageYOffset <= total) {
                        setTranslate(translateElement(dimensions.top))
                    }
                }
            }
            //=========================================================

            //set opacity for "Our Games" background when user scroll page
            if (pathname === ROUTES.HOME) {
                const bgOurGamesObj = bgOurGames.current

                if (bgOurGamesObj) {
                    const total = (bgOurGamesObj.top + bgOurGamesObj.height) - 400

                    if (window.pageYOffset >= bgOurGamesObj.top && window.pageYOffset <= total) {
                        setOpacity(opacityBg(bgOurGames.current))
                    }
                }
            }
            //=========================================================
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timerID)
        }

    }, [pathname, translateElement, setElements, getElements, getDimensionsElement, opacityBg])
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
        opacity,

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