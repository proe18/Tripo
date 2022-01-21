import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import { CgClose, CgChevronUp, CgChevronDown } from 'react-icons/cg'
import { Logo } from '../components'
import { Navbar } from '../components'
import { DropDown } from '../container'
import * as ROUTES from '../constants/routes'

const NavBar = () => {
    const theme = useTheme()
    const [dropDown, setDropDown] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    //Handle show and hidden navbar dropdown if device is PC or Tablet
    const handleMouseEnter = () => setDropDown(window.innerWidth > 1368 && !dropDown)
    const handleMouseLeave = () => setDropDown(window.innerWidth > 1368 && !dropDown)
    //Handle show and hidden navbar menu on mobile
    const handleClickMobileMenu = () => {
        setShowMobileMenu(window.innerWidth <= +theme.breakPoint && !showMobileMenu)
        setDropDown(false)
    }
    //Handle show and hidden navbar dropdown if device is mobile and change icon
    const handleClickMobileDropDown = () => setDropDown(window.innerWidth <= 1368 && !dropDown)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > +theme.breakPoint) {
                setShowMobileMenu(false)
                setDropDown(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Navbar.Container mobileMenu={showMobileMenu}>
            <Logo mobileMenu={showMobileMenu} />
            <Navbar mobileMenu={showMobileMenu}>
                <Navbar.Icon
                    mobileMenu={showMobileMenu}
                    onClick={handleClickMobileMenu}
                >
                    {!showMobileMenu ? <FiMenu /> : <CgClose />}
                </Navbar.Icon>

                <Navbar.Nav mobileMenu={showMobileMenu}>
                    <Navbar.Item onClick={handleClickMobileMenu}>
                        <Navbar.Link index='true' to={ROUTES.HOME}>Home</Navbar.Link>
                    </Navbar.Item>
                    <Navbar.Item
                        dropDown={dropDown}
                        mobileMenu={showMobileMenu}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClickMobileDropDown}
                    >
                        <Navbar.NavDropDown>
                            {!showMobileMenu
                                ? 'Games'
                                : <Navbar.DropDownIcon>
                                    <span>Games</span>
                                    {!dropDown ? <CgChevronDown /> : <CgChevronUp />}
                                </Navbar.DropDownIcon>
                            }
                        </Navbar.NavDropDown>
                        {dropDown && <DropDown handleClickMobileMenu={handleClickMobileMenu}/>}
                    </Navbar.Item>
                    <Navbar.Item onClick={handleClickMobileMenu}>
                        <Navbar.Link to={ROUTES.CAREERS}>Careers</Navbar.Link>
                    </Navbar.Item>
                    <Navbar.Item onClick={handleClickMobileMenu}>
                        <Navbar.Link to={ROUTES.ABOUT}>About</Navbar.Link>
                    </Navbar.Item>
                    <Navbar.Item onClick={handleClickMobileMenu}>
                        <Navbar.Link to={ROUTES.CONTACT}>Concat</Navbar.Link>
                    </Navbar.Item>
                </Navbar.Nav>
            </Navbar>
        </Navbar.Container>
    );
}

export default NavBar;
