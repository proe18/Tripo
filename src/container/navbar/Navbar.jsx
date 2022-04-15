import { useContext } from 'react'
import { FiMenu } from 'react-icons/fi'
import { CgClose, CgChevronUp, CgChevronDown } from 'react-icons/cg'
import { Logo } from '../../components'
import { Navbar } from '../../components'
import { DropDown } from '../../container'
import * as ROUTES from '../../constants/routes'
import * as PAGESTITLE from '../../constants/pages_title'
import { NavbarContext, GalleryContext } from '../../context'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()

    const {
        mobileMenu,
        dropDown,
        isMobile,
        navBarFixed,
        navbarElement,
        isActive,
        handleMouseEnter,
        handleMouseLeave,
        handleClickMobileMenu,
        handleClickDropDown,
        handleSwitchPage
    } = useContext(NavbarContext)
    const { isCloseGallery } = useContext(GalleryContext)

    return (
        <Navbar.Container
            mobileMenu={mobileMenu}
            hideNavbar={isCloseGallery}
            navBar={navBarFixed}
            marginTop={isMobile}
        >
            <Logo mobileMenu={mobileMenu} />
            <Navbar mobileMenu={mobileMenu} ref={navbarElement}>
                <Navbar.Icon
                    mobileMenu={mobileMenu}
                    onClick={handleClickMobileMenu}
                >
                    {!mobileMenu ? <FiMenu /> : <CgClose />}
                </Navbar.Icon>

                <Navbar.Nav mobileMenu={mobileMenu}>
                    <Navbar.Item
                        active={isActive}
                        onClick={() => {
                            handleClickMobileMenu()
                            handleSwitchPage(PAGESTITLE.HOME)
                            navigate(ROUTES.HOME)
                        }}
                    >
                        <span>Home</span>
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
                    <Navbar.Item
                        onClick={() => {
                            handleClickMobileMenu()
                            handleSwitchPage(PAGESTITLE.CAREERS)
                        }}
                    >
                        <Navbar.Link to={ROUTES.CAREERS}>Careers</Navbar.Link>
                    </Navbar.Item>
                    <Navbar.Item
                        onClick={() => {
                            handleClickMobileMenu()
                            handleSwitchPage(PAGESTITLE.ABOUT)
                        }}
                    >
                        <Navbar.Link to={ROUTES.ABOUT}>About</Navbar.Link>
                    </Navbar.Item>
                    <Navbar.Item
                        active={isActive}
                        onClick={() => {
                            handleClickMobileMenu()
                            handleSwitchPage(PAGESTITLE.CONTACT)
                            navigate(ROUTES.HOME)
                        }}
                    >
                        <span>Contact</span>
                    </Navbar.Item>
                </Navbar.Nav>
            </Navbar>
        </Navbar.Container>
    )
}

export default NavBar;
