import { useLocation } from 'react-router-dom'
import { Footer, HeaderGames } from '../container'
import * as ROUTES from '../constants/routes'
import { gamesData } from '../data/Games_data'
import { footerData } from '../data/Footer_data'

const Games = () => {
    const location = useLocation()

    const checkPath = (path) => {
        switch (path) {
            case ROUTES.KIPON:
                return gamesData.kipon
            case ROUTES.ROBOTRIX:
                return gamesData.robotrix
            case ROUTES.TREASURE:
                return gamesData.treasure
            default: break
        }
    }
    
    const gameData = checkPath(location.pathname)

    return (
        <>
            <HeaderGames data={gameData.header} />
            <Footer data={footerData} />
        </>
    );
}

export default Games;
