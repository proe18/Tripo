import { useEffect, useState, createContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const GamesPageContext = createContext()

const GamesPageProvider = ({ children }) => {
    const { pathname } = useLocation()
    const groupElement = useRef('group')
    const [heightElement, setHeightElement] = useState(0)

    useEffect(() => {
        //set heigth for box
        const getHeightElement = () => setHeightElement(groupElement.current?.offsetHeight)
        //===============================================================

        switch (pathname) {
            case ROUTES.KIPON:
            case ROUTES.ROBOTRIX:
            case ROUTES.TREASURE:
                getHeightElement()
                window.addEventListener('resize', getHeightElement)
                break
            default: break
        }

        return () => window.removeEventListener('resize', getHeightElement)
    }, [pathname])

    const value = {
        groupElement,
        heightElement
    }

    return <GamesPageContext.Provider value={value}>{children}</GamesPageContext.Provider>
}

export { GamesPageProvider, GamesPageContext }