import { Outlet, useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { HeaderCareers, JobsPosition } from '../container'
import { PositionForm } from '../components'
import { careersData } from '../data/Careers_data'

const Careers = () => {
    const { pathname } = useLocation()
    const headerData = careersData.header
    const jobsPositionData = careersData.jobsPosition

    if (pathname !== ROUTES.CAREERS) {
        return <Outlet />
    }
    return (
        <>
            <HeaderCareers data={headerData} />
            <JobsPosition data={jobsPositionData} />
            <PositionForm />
        </>
    );
}

export default Careers
