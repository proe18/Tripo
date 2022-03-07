import { useEffect, useState, createContext, useRef } from 'react'

const NavbarContext = createContext()

const NavbarProvider = ({ children }) => {
    const [dropDown, setDropDown] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [navBar, setNavBar] = useState(true)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 860)
    const currentPosition = useRef(0)

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
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 860)
            if (window.innerWidth > 860) {
                setMobileMenu(false)
                setDropDown(false)
            }
            setNavBar(true)
        }

        const handleScroll = () => {
            if (window.scrollY > 0 && window.innerWidth > 860) {
                currentPosition.current = window.scrollY
                setNavBar(true)
            }
        }

        const timerID = setInterval(() => {
            const prePosition = currentPosition.current
            if (
                (window.scrollY > 0 && window.innerWidth > 860) && 
                (prePosition === currentPosition.current && dropDown === false)
            ) setNavBar(false)
        }, 3500)

        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
            clearInterval(timerID)
        }
    }, [dropDown])

    const value = {
        mobileMenu,
        dropDown,
        isMobile,
        navBar,
        handleMouseEnter,
        handleMouseLeave,
        handleClickMobileMenu,
        handleClickDropDown
    }

    return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
}

export { NavbarProvider, NavbarContext }