import { useContext } from 'react'
import { LogoStyled, LogoLink } from './LogoStyled'
import * as ROUTES from '../../constants/routes'
import { ScrollContext } from '../../context'

const Logo = ({ mobileMenu }) => {
    const { handleScroll } = useContext(ScrollContext)
    return (
        <LogoStyled mobileMenu={mobileMenu}>
            <LogoLink
                to={ROUTES.HOME}
                onClick={() => {
                    handleScroll()
                    if (window.scrollY !== 0) window.scrollTo(0, 0)
                }}
            >
                Tripo Games
            </LogoLink>
        </LogoStyled>
    )
}

export default Logo