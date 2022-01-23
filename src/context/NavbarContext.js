import { useState, createContext } from 'react';

const NavbarContext = createContext()

const NavbarProvider = ({ children }) => {
    const [dropDown, setDropDown] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    
    //Handle show and hidden navbar dropdown if device is PC or Tablet
    const handleMouseEnter = () => setDropDown(window.innerWidth > 1368 && !dropDown)
    const handleMouseLeave = () => setDropDown(window.innerWidth > 1368 && !dropDown)
    //Handle show and hidden navbar menu on mobile
    const handleClickMobileMenu = () => {
        setMobileMenu(window.innerWidth <= 1000 && !mobileMenu)
        setDropDown(false)
    }
    //Handle show and hidden navbar dropdown if device is mobile and change icon
    const handleClickMobileDropDown = () => setDropDown(window.innerWidth <= 1368 && !dropDown)

    //Handle resize website
    const handleResize = () => {
        if (window.innerWidth > 1000) {
            setMobileMenu(false)
            setDropDown(false)
        }
    }

    const value = {
        mobileMenu,
        dropDown,
        handleMouseEnter,
        handleMouseLeave,
        handleClickMobileMenu,
        handleClickMobileDropDown,
        handleResize
    }

    return (
        <NavbarContext.Provider value={value}>
            {children}
        </NavbarContext.Provider>
    )
}

export { NavbarProvider, NavbarContext }