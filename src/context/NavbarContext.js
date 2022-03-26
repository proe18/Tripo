import { useEffect, useState, createContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const NavbarContext = createContext()

const NavbarProvider = ({ children }) => {
    const { pathname } = useLocation()
    const [dropDown, setDropDown] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [isMouseHover, setIsMouseHover] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    const [navBarFixed, setNavBarFixed] = useState(true)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 860)
    const navbarElement = useRef('navbar')

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
            setNavBarFixed(true)
        }

        const handleScroll = () => {
            if (window.pageYOffset >= 0 && window.innerWidth > 860) {
                setIsScroll(true)
                setNavBarFixed(true)
            }
        }

        const handleMouseOver = () => {
            if (window.innerWidth > 860 && window.pageYOffset >= 0) {
                setIsMouseHover(true)
            }
        }

        const handleMouseOut = () => {
            if (isMouseHover && window.pageYOffset > 0 && window.innerWidth > 860) {
                setIsMouseHover(false)
            }
        }

        const timerID = setTimeout(() => {
            if (window.pageYOffset > 0 && window.innerWidth > 860) {
                if (isScroll && !isMouseHover) {
                    setNavBarFixed(false)
                    setIsScroll(false)
                }
            }
        }, 3000)

        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)
        navbarElement.current.addEventListener('mouseover', handleMouseOver)
        navbarElement.current.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timerID)
        }
    }, [pathname, isScroll, isMouseHover])

    const value = {
        mobileMenu,
        dropDown,
        isMobile,
        navBarFixed,
        navbarElement,
        handleMouseEnter,
        handleMouseLeave,
        handleClickMobileMenu,
        handleClickDropDown
    }

    return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
}

export { NavbarProvider, NavbarContext }