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
            case `${ROUTES.CAREERS}/${ROUTES.MANAGER}`:
                return jobPositionData.manager
            case `${ROUTES.CAREERS}/${ROUTES.TESTER}`:
                return jobPositionData.tester
            case `${ROUTES.CAREERS}/${ROUTES.DESIGNER}`:
                return jobPositionData.designer
            case `${ROUTES.CAREERS}/${ROUTES.DEVELOPER}`:
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