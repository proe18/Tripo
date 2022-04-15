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

    const elements = useRef({})
    const dimensionsElement = useRef({})
    const dimensionsOurGameBg = useRef({})
    const [activeElement, setActiveElement] = useState({})

    const [heightImage, setHeightImage] = useState(0)
    const [marginJoinTeam, setMarginJoinTeam] = useState(0)
    const [translate, setTranslate] = useState(0)

    //get the element of each page
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
                topElement = Math.floor(elements[key]?.getBoundingClientRect().top + window.pageYOffset - 100)
                if (window.pageYOffset + 350 >= topElement) {
                    Object.assign(topElements, { [key]: true })
                }
            }
            return topElements
        }
    }, [])

    //get dimensions of element
    const getDimensionsElement = useCallback(el => {
        const top = el?.getBoundingClientRect().top
        const height = el?.getBoundingClientRect().height
        return { top, height }
    }, [])
    //=========================================================

    //calculate translate for element
    const translateElement = useCallback(topElement => {
        if (topElement === 0) {
            return Math.floor(window.pageYOffset / 10)
        } else if (topElement > 0) {
            return Math.floor((window.pageYOffset / 10) / 2)
        }
    }, [])
    //=========================================================

    const getOpacity = useCallback(dimensions => {
        if (typeof dimensions === 'object') {
            const totalElement = Math.floor(dimensions.top + dimensions.height)
            let opacity
            if (window.pageYOffset >= dimensions.top && window.pageYOffset <= totalElement) {
                opacity = Math.floor(totalElement / (window.pageYOffset * 10))
                console.log(opacity);
            }
        }
    }, [])

    //handle scroll page
    useEffect(() => {
        const timerIDTimeOut = setTimeout(() => {
            getElements(pathname)

            if (pathname === ROUTES.HOME) {
                dimensionsElement.current = getDimensionsElement(backGroundHome.current)
                dimensionsOurGameBg.current = getDimensionsElement(homeOurGamesBg.current)
            }

            if (pathname === ROUTES.ABOUT) {
                dimensionsElement.current = getDimensionsElement(imageAbout.current)
            }
        }, 800)

        const handleScroll = () => {
            setActiveElement(setElements(elements.current))

            if (pathname === ROUTES.HOME || pathname === ROUTES.ABOUT) {
                const dimensions = dimensionsElement.current
                const total = dimensions.top + dimensions.height

                if (window.pageYOffset <= total) {
                    setTranslate(translateElement(dimensions.top) || 0)
                }
            }
            
            // if (pathname === ROUTES.HOME) {
            //     getOpacity(dimensionsOurGameBg.current)
            // }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timerIDTimeOut)
        }

    }, [pathname, translateElement, setElements, getElements, getDimensionsElement, getOpacity])
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