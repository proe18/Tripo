import { useState } from 'react'
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
    const checkMobile = window.innerWidth <= +theme.breakPoint;

    //Handle show and hidden navbar dropdown if device is PC or Tablet
    const handleMouseEnter = () => setDropDown(!checkMobile && !dropDown)
    const handleMouseLeave = () => setDropDown(!checkMobile && !dropDown)
    //Handle show and hidden navbar menu on mobile
    const handleClickMobileMenu = () => {
        setShowMobileMenu(window.innerWidth <= +theme.breakPoint && !showMobileMenu)
        setDropDown(false)
    }
    //Handle show and hidden navbar dropdown if device is mobile and change icon
    const handleClickMobileDropDown = () => setDropDown(checkMobile && !dropDown)

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
