import { useContext, memo } from 'react'
import { LogoStyled, LogoLink } from './LogoStyled'
import * as ROUTES from '../../constants/routes'
import * as PAGESTITLE from '../../constants/pages_title'
import { NavbarContext } from '../../context'

const Logo = ({ mobileMenu }) => {
    const { handleSwitchPage } = useContext(NavbarContext)
    return (
        <LogoStyled mobileMenu={mobileMenu}>
            <LogoLink
                to={ROUTES.HOME}
                onClick={() => handleSwitchPage(PAGESTITLE.HOME)}
            >
                Tripo Games
            </LogoLink>
        </LogoStyled>
    )
}

export default memo(Logo)