import { useEffect, useLayoutEffect, useState, createContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const GamesPageContext = createContext()

const GamesPageProvider = ({ children }) => {
    const { pathname } = useLocation()
    const groupElement = useRef('group')
    const [heightElement, setHeightElement] = useState(0)

    //set heigth of box header section
    const getHeightElement = () => setHeightElement(groupElement.current.offsetHeight)

    useLayoutEffect(getHeightElement, [pathname])
    useEffect(() => {
        window.addEventListener('resize', getHeightElement)

        return () => window.removeEventListener('resize', getHeightElement)
    }, [])

    const value = {
        groupElement,
        heightElement
    }

    return <GamesPageContext.Provider value={value}>{children}</GamesPageContext.Provider>
}

export { GamesPageProvider, GamesPageContext }