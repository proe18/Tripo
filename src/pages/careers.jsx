import { PositionFormProvider } from '../context'
import { Footer, HeaderCareers, JobsPosition } from '../container'
import { PositionForm } from '../components'
import { careersData } from '../data/Careers_data'
import { footerData } from '../data/Footer_data'

const Careers = () => {
    const headerData = careersData.header
    const jobsPositionData = careersData.jobsPosition
    const data = footerData

    return (
        <PositionFormProvider>
            <HeaderCareers data={headerData} />
            <JobsPosition data={jobsPositionData} />
            <PositionForm />
            <Footer data={data} />
        </PositionFormProvider>
    );
}

export default Careers;
