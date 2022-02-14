import { useLocation } from 'react-router-dom'
import { ContentPosition, Footer, HeaderPosition } from '../container'
import * as ROUTES from '../constants/routes'
import { jobPositionData } from '../data/JobPosition_data'
import { footerData } from '../data/Footer_data'

const Position = () => {
    const location = useLocation()

    const checkPath = (path) => {
        switch (path) {
            case ROUTES.MANAGER:
                return jobPositionData.manager
            case ROUTES.TESTER:
                return jobPositionData.tester
            case ROUTES.DESIGNER:
                return jobPositionData.designer
            case ROUTES.DEVELOPER:
                return jobPositionData.developer
            default: break
        }
    }

    const positionData = checkPath(location.pathname)

    return (
        <>
            <HeaderPosition data={positionData.header} />
            <ContentPosition data={positionData.content} />
            <Footer data={footerData} />
        </>
    )
}

export default Position