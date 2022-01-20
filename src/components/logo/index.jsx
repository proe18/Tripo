import { LogoStyled, LogoLink } from './LogoStyled'
import * as ROUTES from '../../constants/routes'

const Logo = ({mobileMenu}) => {
    return (
        <LogoStyled mobileMenu={mobileMenu}>
            <LogoLink to={ROUTES.HOME}>Tripo Games</LogoLink>
        </LogoStyled>
    )
}

export default Logo