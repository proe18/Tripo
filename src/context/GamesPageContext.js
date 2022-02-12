import { useEffect, useState, createContext } from 'react';

const GamesPageContext = createContext()

const GamesPageProvider = ({ children }) => {
    const [heightElement, setHeightElement] = useState(618)

    useEffect(() => {
        const getHeightElement = () => {
            setHeightElement(document.getElementById('groupElement').offsetHeight)
        }

        window.addEventListener('resize', getHeightElement)

        return () => window.removeEventListener('resize', getHeightElement)
    }, [])

    return (
        <GamesPageContext.Provider value={heightElement}>
            {children}
        </GamesPageContext.Provider>
    )
}

export { GamesPageProvider, GamesPageContext }