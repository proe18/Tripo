import { useEffect, useState, createContext } from 'react'

const GamesPageContext = createContext()

const GamesPageProvider = ({ children }) => {
    const [heightElement, setHeightElement] = useState(618)
    
    //reset height of box header section every time the site is resized on moblie and tablet
    useEffect(() => {
        const getHeightElement = () => {
            setHeightElement(document.getElementById('group')?.offsetHeight)
        }

        window.addEventListener('resize', getHeightElement)

        return () => window.removeEventListener('resize', getHeightElement)
    }, [])

    return <GamesPageContext.Provider value={heightElement}>{children}</GamesPageContext.Provider>
}

export { GamesPageProvider, GamesPageContext }