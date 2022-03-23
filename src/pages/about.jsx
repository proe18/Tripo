import { Founder, HeaderAbout, Info, Offices } from '../container'
import { aboutData } from '../data/About_data'

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
        </>
    )
}

export default About;
