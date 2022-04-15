import { HeaderHome, About, OurGames, JoinTeam } from '../container'
import { homeData } from '../data/Home_data'

const Home = () => {
    const headerData = homeData.header
    const aboutData = homeData.about
    const ourGamesData = homeData.ourGames
    const joinTeamData = homeData.joinTeam

    return (
        <>
            <HeaderHome data={headerData} />
            <About data={aboutData} />
            <OurGames data={ourGamesData} />
            <JoinTeam data={joinTeamData} />
        </>
    );
}

export default Home;
