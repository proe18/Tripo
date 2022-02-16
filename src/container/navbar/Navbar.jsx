import { useContext } from 'react'
import { FiMenu } from 'react-icons/fi'
import { CgClose, CgChevronUp, CgChevronDown } from 'react-icons/cg'
import { Logo } from '../../components'
import { Navbar } from '../../components'
import { DropDown } from '../../container'
import * as ROUTES from '../../constants/routes'
import { NavbarContext } from '../../context/NavbarContext'
import { GamesPageContext } from '../../context/GamesPageContext'

const NavBar = () => {
    const {
        mobileMenu,
        dropDown,
        handleMouseEnter,
        handleMouseLeave,
        handleClickMobileMenu,
        handleClickDropDown
    } = useContext(NavbarContext)

    const { isCloseGallery } = useContext(GamesPageContext)

    return (
        <Navbar.Container mobileMenu={mobileMenu} hideNavbar={isCloseGallery}>
            <Logo mobileMenu={mobileMenu} />
            <Navbar mobileMenu={mobileMenu}>
                <Navbar.Icon
                    mobileMenu={mobileMenu}
                    onClick={handleClickMobileMenu}
                >
                    {!mobileMenu ? <FiMenu /> : <CgClose />}
                </Navbar.Icon>

                <Navbar.Nav mobileMenu={mobileMenu}>
                    <Navbar.Item onClick={handleClickMobileMenu}>
                        <Navbar.Link to={ROUTES.HOME}>Home</Navbar.Link>
                    </Navbar.Item>
                    <Navbar.Item
                        dropDown={dropDown}
                        mobileMenu={mobileMenu}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClickDropDown}
                    >
                        <Navbar.NavDropDown>
                            {!mobileMenu
                                ? 'Games'
                                : <Navbar.DropDownIcon>
                                    <span>Games</span>
                                    {!dropDown ? <CgChevronDown /> : <CgChevronUp />}
                                </Navbar.DropDownIcon>
                            }
                        </Navbar.NavDropDown>
                        {dropDown && <DropDown />}
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
    )
}

export default NavBar;
