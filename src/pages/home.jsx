import { HeaderHome, About, OurGames, JoinTeam } from '../container'
import { HomePageProvider } from '../context'
import { homeData } from '../data/Home_data'

const Home = () => {
    const headerData = homeData.header
    const aboutData = homeData.about
    const ourGamesData = homeData.ourGames
    const joinTeamData = homeData.joinTeam

    return (
        <HomePageProvider>
            <HeaderHome data={headerData} />
            <About data={aboutData} />
            <OurGames data={ourGamesData} />
            <JoinTeam data={joinTeamData} />
        </HomePageProvider>
    );
}

export default Home;
