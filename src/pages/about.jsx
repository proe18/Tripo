import { Footer, Founder, HeaderAbout, Info } from '../container';
import { aboutData } from '../data/About_data';
import { footerData } from '../data/Footer_data'

const About = () => {
    const headerData = aboutData.header
    const infoData = aboutData.info
    const founderData = aboutData.founder

    return (
        <>
            <HeaderAbout data={headerData} />
            <Info data={infoData} />
            <Founder data={founderData} />
            <Footer data={footerData} />
        </>
    )
}

export default About;
