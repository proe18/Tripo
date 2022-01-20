import { useState } from 'react'
import { useTheme } from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import { CgClose, CgChevronUp, CgChevronDown } from 'react-icons/cg'
import { Logo } from '../components'
import { Navbar } from '../components'
import { DropDown } from '../container';
import * as ROUTES from '../constants/routes'

const NavBar = () => {
    const theme = useTheme()
    const [dropDown, setDropDown] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [mobileDropDown, setMobileDropDown] = useState(false)

    //Handle show and hidden navbar dropdown if device is PC or Tablet
    const handleMouseEnter = () => setDropDown(!window.innerWidth <= +theme.breakPoint && !dropDown)
    const handleMouseLeave = () => setDropDown(!window.innerWidth <= +theme.breakPoint && !dropDown)
    //Handle show and hidden navbar menu on mobile
    const handleClickMobileMenu = () => setShowMobileMenu(window.innerWidth <= +theme.breakPoint && !showMobileMenu)
    //Handle change icon of item DropDown
    const handleClickMobileDropDown = () => setMobileDropDown(!mobileDropDown)

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
                        <Navbar.Link
                            index='true'
                            to={ROUTES.HOME}
                        >
                            Home
                        </Navbar.Link>
                    </Navbar.Item>
                    <Navbar.Item
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Navbar.NavDropDown
                            onClick={handleClickMobileDropDown}
                        >
                            {!showMobileMenu
                                ? 'Games'
                                : <Navbar.DropDownIcon>
                                    <span>Games</span>
                                    {!mobileDropDown ? <CgChevronDown /> : <CgChevronUp />}
                                </Navbar.DropDownIcon>
                            }
                        </Navbar.NavDropDown>
                        {dropDown && <DropDown mobileMenu={showMobileMenu} />}
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
