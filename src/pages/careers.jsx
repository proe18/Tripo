import { Footer, HeaderCareers, JobsPosition } from '../container'
import { careersData } from '../data/Careers_data'
import { footerData } from '../data/Footer_data'

function Careers() {
    const headerData = careersData.header
    const jobsPositionData = careersData.jobsPosition
    const data = footerData

    return (
        <>
            <HeaderCareers data={headerData} />
            <JobsPosition data={jobsPositionData}/>
            <Footer data={data} />
        </>
    );
}

export default Careers;
