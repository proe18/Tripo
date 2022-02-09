import { Footer, Founder, HeaderAbout, Info, Offices } from '../container';
import { aboutData } from '../data/About_data';
import { footerData } from '../data/Footer_data'

const About = () => {
    const headerData = aboutData.header
    const infoData = aboutData.info
    const founderData = aboutData.founder
    const officesData = aboutData.offices

    return (
        <>
            <HeaderAbout data={headerData} />
            <Info data={infoData} />
            <Founder data={founderData} />
            <Offices data={officesData}/>
            <Footer data={footerData} />
        </>
    )
}

export default About;
