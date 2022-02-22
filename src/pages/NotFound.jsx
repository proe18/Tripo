import { NotFoundPage, Container, ButtonLink } from '../components'
import * as ROUTES from '../constants/routes'

const NotFound = () => {
    return (
        <NotFoundPage>
            <Container>
                <p>404</p>
                <h1>Ooops!!</h1>
                <p>THIS PAGE DOESN'T EXIST OR IS UNAVAILABLE.</p>
                <ButtonLink to={ROUTES.HOME}>Go Back to Home</ButtonLink>
            </Container>
        </NotFoundPage>
    )
}

export default NotFound