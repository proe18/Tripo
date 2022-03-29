import { useEffect, useRef, useState, createContext } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
    const { pathname } = useLocation()
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
    // const [translate, setTranslate] = useState(0)

    // const getTopElements = useCallback(elements => {
    //     if (typeof elements === 'object') {
    //         const topElements = {}
    //         for (let key in elements) {
    //             const newObject =
    //                 { [key]: Math.floor(elements[key]?.getBoundingClientRect().top + window.scrollY - 200) }
    //             Object.assign(topElements, newObject)
    //         }
    //         return topElements
    //     }
    // }, [])

    // const setTranslateLeft = useCallback((el) => {
    //     const heightElement = el?.offsetHeight
    //     let translateLeft
    //     if (window.pageYOffset <= heightElement) {
    //         translateLeft = Math.floor(window.pageYOffset / 10)
    //     }
    //     setTranslate(translateLeft)
    // }, [])

    // useEffect(() => {
    //     const timerID = setTimeout(() => {
    //         // const homeElements = {
    //         //     about: homeAboutHeading.current,
    //         //     imageAbout: imageAbout.current,
    //         //     ourGamesHeading: homeOurGamesHeading.current,
    //         //     ourGamesContent: homeOurGamesContent.current,
    //         //     joinTeam: homeJoinTeamHeading.current,
    //         //     imageJoinTeam: imageJoinTeam.current
    //         // }
    //         // topHomeElements.current = getTopElements(homeElements)
    //     }, 500)

    //     const handleScroll = () => {
    //         // const topElements = topHomeElements.current
    //         // for (let key in topElements) {
    //         //     if (window.scrollY >= topElements[key]) {
    //         //         Object.assign(topElements, { [key]: true })
    //         //     }
    //         // }
    //         // setActiveElement(topElements)
    //         // if (pathname === ROUTES.HOME) {
    //         //     setTranslateLeft(backGroundHome.current)
    //         // }
    //         // if (pathname === ROUTES.ABOUT) {
    //         //     setTranslateLeft(headerAbout.current)
    //         // }
    //     }

    //     window.addEventListener('scroll', handleScroll)

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //         clearTimeout(timerID)
    //     }

    // }, [pathname, setTranslateLeft])

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
        // translate,
        imageAbout,
        headerAbout,
        // homeAboutHeading,
        // homeOurGamesHeading,
        // homeOurGamesContent,
        // homeJoinTeamHeading,
        // imageAbout,
        // imageJoinTeam,
    }

    return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export { ScrollContext, ScrollProvider }