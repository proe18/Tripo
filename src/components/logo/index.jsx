import { LogoStyled, LogoLink } from './LogoStyled'
import * as ROUTES from '../../constants/routes'

const Logo = ({ mobileMenu }) => {
    return (
        <LogoStyled mobileMenu={mobileMenu}>
            <LogoLink
                to={ROUTES.HOME}
                onClick={() => {
                    if (window.scrollY !== 0) window.scrollTo(0, 0)
                }}
            >
                Tripo Games
            </LogoLink>
        </LogoStyled>
    )
}

export default Logo