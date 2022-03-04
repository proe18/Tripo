import { useEffect, useState, createContext } from 'react'

const NavbarContext = createContext()

const NavbarProvider = ({ children }) => {
    const [dropDown, setDropDown] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [navbarFixed, setNavbarFixed] = useState(true)
    
    //Handle show and hidden dropdown if device is PC
    const handleMouseEnter = () => setDropDown(window.innerWidth > 1280 && !dropDown)
    const handleMouseLeave = () => setDropDown(window.innerWidth > 1280 && !dropDown)

    //Handle show and hidden dropdown if device is mobile and tablet
    const handleClickDropDown = () => setDropDown(window.innerWidth <= 1280 && !dropDown)

    //Handle show and hidden for mobile menu
    const handleClickMobileMenu = () => {
        setMobileMenu(window.innerWidth <= 860 && !mobileMenu)
        setDropDown(false)
    }

    //reset state when switching to PC  
    useEffect(() => {
        const handleNavbar = () => {
            if (window.innerWidth > 860) {
                setMobileMenu(false)
                setDropDown(false)
            }
        }

        window.addEventListener('resize', handleNavbar)

        return () => window.removeEventListener('resize', handleNavbar)
    }, [])

    // setTimeout(() => {
    //     if (window.scrollY > 0) setNavbarFixed(false)
    // }, 1000)

    useEffect(() => {
        // const prePosition = window.scrollY
        const handleScroll = () => {
            // const currentPosition = window.scrollY
            if (window.scrollY >= 0) setNavbarFixed(true)
            // console.log(currentPosition);
        }
        // console.log(prePosition);

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    // console.log(navbarFixed);

    const value = {
        mobileMenu,
        dropDown,
        navbarFixed,
        handleMouseEnter,
        handleMouseLeave,
        handleClickMobileMenu,
        handleClickDropDown
    }

    return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
}

export { NavbarProvider, NavbarContext }