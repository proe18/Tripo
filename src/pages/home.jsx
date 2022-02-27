import { HeaderHome, About, OurGames, JoinTeam, Footer } from '../container'
import { HomePageProvider } from '../context'
import { footerData } from '../data/Footer_data'
import { homeData } from '../data/Home_data'

const Home = () => {
    const headerData = homeData.header
    const aboutData = homeData.about
    const ourGamesData = homeData.ourGames
    const joinTeamData = homeData.joinTeam
    const data = footerData

    return (
        <HomePageProvider>
            <HeaderHome data={headerData} />
            <About data={aboutData} />
            <OurGames data={ourGamesData} />
            <JoinTeam data={joinTeamData} />
            <Footer data={data}/>
        </HomePageProvider>
    );
}

export default Home;
