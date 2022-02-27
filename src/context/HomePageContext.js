import { useEffect, useLayoutEffect, useState, createContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const HomePageContext = createContext()

const HomePageProvider = ({ children }) => {
    const { pathname } = useLocation()
    const headerElement = useRef('header')
    const gamesElement = useRef('games')
    const [marginGamesElement, setMarginGamesElement] = useState(0)
    const [marginAbout, setMarginAbout] = useState(0)
    const getHeightElement = () => {
        setMarginGamesElement(headerElement.current.offsetHeight)
        setMarginAbout(gamesElement.current.offsetHeight)
    }

    //set heigth of games element when the first render
    useLayoutEffect(getHeightElement, [pathname])

    //set height of games element every time the site is resized on moblie and tablet
    useEffect(() => {
        window.addEventListener('resize', getHeightElement)

        return () => window.removeEventListener('resize', getHeightElement)
    }, [])

    const value = {
        headerElement,
        gamesElement,
        marginGamesElement,
        marginAbout
    }

    return <HomePageContext.Provider value={value}>{children}</HomePageContext.Provider>
}

export { HomePageContext, HomePageProvider }