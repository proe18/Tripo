import { useLocation } from 'react-router-dom'
import { Footer, Gallery, HeaderGames, Reviews, Screenshots } from '../container'
import * as ROUTES from '../constants/routes'
import { GamesPageProvider } from '../context'
import { gamesData } from '../data/Games_data'
import { footerData } from '../data/Footer_data'

const Games = () => {
    const { pathname } = useLocation()

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

    const gameData = checkPath(pathname)

    return (
        <GamesPageProvider>
            <HeaderGames data={gameData.header} />
            <Screenshots data={gameData.screenshots} />
            <Reviews data={gameData.reviews} />
            <Gallery data={gameData.screenshots}/>
            <Footer data={footerData} />
        </GamesPageProvider>
    );
}

export default Games;
