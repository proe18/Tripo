import { HeaderContainer, AboutSection } from '../container'
import { homeData } from '../data/Home_data'

const Home = () => {
    const headerData = homeData.header
    const aboutData = homeData.about

    return (
        <>
            <HeaderContainer data={headerData}/>
            <AboutSection data={aboutData}/>
        </>
    );
}

export default Home;
