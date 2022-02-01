import { useState, createContext } from 'react';

const NavbarContext = createContext()

const NavbarProvider = ({ children }) => {
    const [dropDown, setDropDown] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    
    //Handle show and hidden dropdown if device is PC
    const handleMouseEnter = () => setDropDown(window.innerWidth > 1280 && !dropDown)
    const handleMouseLeave = () => setDropDown(window.innerWidth > 1280 && !dropDown)
    //Handle show and hidden mobile menu on mobile
    const handleClickMobileMenu = () => {
        setMobileMenu(window.innerWidth <= 860 && !mobileMenu)
        setDropDown(false)
    }
    //Handle show and hidden dropdown if device is mobile and tablet
    const handleClickDropDown = () => setDropDown(window.innerWidth <= 1280 && !dropDown)

    //Handle resize website
    const handleResize = () => {
        if (window.innerWidth > 860) {
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
        handleClickDropDown,
        handleResize
    }

    return (
        <NavbarContext.Provider value={value}>
            {children}
        </NavbarContext.Provider>
    )
}

export { NavbarProvider, NavbarContext }