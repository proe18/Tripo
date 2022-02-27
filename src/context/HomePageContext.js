import { useEffect, useLayoutEffect, useState, createContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const HomePageContext = createContext()

const HomePageProvider = ({ children }) => {
    const { pathname } = useLocation()
    const headerElement = useRef('header')
    const gamesElement = useRef('games')
    const [marginGames, setMarginGames] = useState(0)
    const [marginAbout, setMarginAbout] = useState(0)

    //set heigth of games element
    const getHeightElement = () => {
        setMarginGames(headerElement.current.offsetHeight)
        setMarginAbout(gamesElement.current.offsetHeight)
    }
    
    useLayoutEffect(getHeightElement, [pathname, marginGames])
    useEffect(() => {
        window.addEventListener('resize', getHeightElement)

        return () => window.removeEventListener('resize', getHeightElement)
    }, [])

    const value = {
        headerElement,
        gamesElement,
        marginGames,
        marginAbout
    }

    return <HomePageContext.Provider value={value}>{children}</HomePageContext.Provider>
}

export { HomePageContext, HomePageProvider }