import { PositionFormProvider } from '../context'
import { Outlet, useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { Footer, HeaderCareers, JobsPosition } from '../container'
import { PositionForm } from '../components'
import { careersData } from '../data/Careers_data'
import { footerData } from '../data/Footer_data'

const Careers = () => {
    const { pathname } = useLocation()
    const headerData = careersData.header
    const jobsPositionData = careersData.jobsPosition
    const data = footerData

    if (pathname !== ROUTES.CAREERS) {
        return <Outlet />
    }
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
