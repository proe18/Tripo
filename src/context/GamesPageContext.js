import { useEffect, useLayoutEffect, useState, createContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const GamesPageContext = createContext()

const GamesPageProvider = ({ children }) => {
    const { pathname } = useLocation()
    const groupElement = useRef('group')
    const [heightElement, setHeightElement] = useState(0)

    //set heigth for box header section
    const getHeightElement = () => setHeightElement(groupElement.current?.offsetHeight)

    useLayoutEffect(getHeightElement, [])
    useEffect(() => {
        window.addEventListener('resize', getHeightElement)

        return () => window.removeEventListener('resize', getHeightElement)
    }, [pathname])

    const value = {
        groupElement,
        heightElement
    }

    return <GamesPageContext.Provider value={value}>{children}</GamesPageContext.Provider>
}

export { GamesPageProvider, GamesPageContext }