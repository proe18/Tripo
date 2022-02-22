import { useLocation } from 'react-router-dom'
import { PositionForm } from '../components'
import { ContentPosition, Footer, HeaderPosition } from '../container'
import { PositionFormProvider } from '../context'
import * as ROUTES from '../constants/routes'
import { jobPositionData } from '../data/JobPosition_data'
import { footerData } from '../data/Footer_data'

const Position = () => {
    const { pathname } = useLocation()

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

    const positionData = checkPath(pathname)

    return (
        <PositionFormProvider>
            <HeaderPosition data={positionData.header} />
            <ContentPosition data={positionData.content} />
            <PositionForm />
            <Footer data={footerData} />
        </PositionFormProvider>
    )
}

export default Position