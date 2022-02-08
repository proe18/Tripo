import { Footer, HeaderAbout, Info } from '../container';
import { aboutData } from '../data/About_data';
import { footerData } from '../data/Footer_data'

const About = () => {
    const headerData = aboutData.header
    const infoData = aboutData.info

    return (
        <>
            <HeaderAbout data={headerData} />
            <Info data={infoData} />
            <Footer data={footerData}/>
        </>
    )
}

export default About;
