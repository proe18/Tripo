import { Header, About, OurGames, JoinTeam, Footer } from '../container'
import { footerData } from '../data/Footer_data'
import { homeData } from '../data/Home_data'

const Home = () => {
    const headerData = homeData.header
    const aboutData = homeData.about
    const ourGamesData = homeData.ourGames
    const joinTeamData = homeData.joinTeam
    const data = footerData

    return (
        <>
            <Header data={headerData} />
            <About data={aboutData} />
            <OurGames data={ourGamesData} />
            <JoinTeam data={joinTeamData} />
            <Footer data={data}/>
        </>
    );
}

export default Home;
