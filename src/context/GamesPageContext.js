import { useEffect, useLayoutEffect, useState, createContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const GamesPageContext = createContext()

const GamesPageProvider = ({ children }) => {
    const { pathname } = useLocation()
    const groupRef = useRef('group')
    const [heightElement, setHeightElement] = useState(0)
    const getHeightElement = () => setHeightElement(groupRef.current.offsetHeight)

    //set heigth of box header section when the first render
    useLayoutEffect(getHeightElement, [pathname])

    //set height of box header section every time the site is resized on moblie and tablet
    useEffect(() => {
        window.addEventListener('resize', getHeightElement)

        return () => window.removeEventListener('resize', getHeightElement)
    }, [])

    const value = {
        groupRef,
        heightElement
    }

    return <GamesPageContext.Provider value={value}>{children}</GamesPageContext.Provider>
}

export { GamesPageProvider, GamesPageContext }