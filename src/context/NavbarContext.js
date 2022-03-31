import { useEffect, useState, createContext, useCallback, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

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

    const [isActive, setIsActive] = useState(pathname === ROUTES.HOME ? false : undefined)
    const [isParam, setIsParam] = useState(false)
    const [isEqualParam, setIsEqualParam] = useState(false)
    const [isEqual, setIsEqual] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const listGameElement = useRef('listGame')
    const contactElement = useRef('contact')
    const paramRef = useRef('')
    const pathRoute = useRef(pathname)
    const timerID1 = useRef(0)
    const timerID2 = useRef(0)

    //handle show and hidden dropdown if device is PC
    const handleMouseEnter = () => setDropDown(window.innerWidth > 1280 && !dropDown)
    const handleMouseLeave = () => setDropDown(window.innerWidth > 1280 && !dropDown)

    //handle show and hidden dropdown if device is mobile and tablet
    const handleClickDropDown = () => setDropDown(window.innerWidth <= 1280 && !dropDown)

    //handle show and hidden for mobile menu
    const handleClickMobileMenu = () => {
        setMobileMenu(window.innerWidth <= 860 && !mobileMenu)
        setDropDown(false)
    }

    //handle scroll smooth
    const scrollToSmoothly = (pos, time) => {
        let currentPos = window.pageYOffset
        let start = null
        if (time === null) time = 500
        pos = +pos
        time = +time
        window.requestAnimationFrame(function step(currentTime) {
            start = !start ? currentTime : start
            let progress = currentTime - start
            if (currentPos < pos) {
                window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos)
            } else {
                window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time))
            }
            if (progress < time) {
                window.requestAnimationFrame(step)
            } else {
                window.scrollTo(0, pos)
            }
        })
    }

    //handle switch page if user click item in navbar
    const handleSwitchPage = param => {
        if (param) {
            setIsParam(true)
            setIsEqualParam(paramRef.current === param)
            paramRef.current = param
        }
        if (!param) {
            setIsEqual(pathname === pathRoute.current)
            setIsParam(false)
            setIsEqualParam(false)
            paramRef.current = ''
        }
        setIsShow(false)
        setIsScroll(false)
        setIsMouseHover(false)
        setIsActive(undefined)
        pathRoute.current = pathname
    }

    //caculate position scroll
    const scrollToPosition = useCallback(el => {
        const element = el === 'Games' ? listGameElement.current : contactElement.current
        timerID2.current = setTimeout(() => {
            let position = Math.floor(element?.getBoundingClientRect().top + window.pageYOffset)
            position = paramRef.current === 'Games' ? position - 90 : position - 60
            scrollToSmoothly(position, 1500)
            setIsParam(false)
        }, 1000)
    }, [])


    //handle scroll to position
    useEffect(() => {
        setIsShow(true)
        if (pathname === ROUTES.HOME) {
            timerID1.current = setInterval(() => setIsActive(window.pageYOffset >= 4296), 300)
        }

        if (!isParam && pathname !== pathRoute.current) window.scrollTo(0, 0)
        // if (isEqual) {
        //     window.scrollTo(0, 0)
        //     setIsEqual(false)
        // }
        // console.log(isEqual);


        if (isParam && pathname !== pathRoute.current) {
            window.scrollTo(0, 0)
            scrollToPosition(paramRef.current)
        }
        if (isParam && pathname === pathRoute.current) {
            if (isEqualParam) {
                scrollToPosition(paramRef.current)
            } else {
                scrollToPosition(paramRef.current)
            }
        }

        const handleReload = () => {
            if (window.pageYOffset > 0) window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }

        window.addEventListener('load', handleReload)

        return () => {
            window.removeEventListener('load', handleReload)
            clearInterval(timerID1.current)
            clearTimeout(timerID2.current)
        }
    }, [pathname, isParam, isEqual, isEqualParam, scrollToPosition])

    //handle show or hide navbar, heading page  
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
            if (window.pageYOffset > 0 && window.innerWidth > 860) {
                if (isMouseHover || dropDown) {
                    setIsMouseHover(false)
                }
            }
        }

        const timerIDInterval = setInterval(() => {
            if (window.pageYOffset > 0 && window.innerWidth > 860) {
                if (!isScroll && !isMouseHover) {
                    setNavBarFixed(false)
                }
                setIsScroll(false)
            }
        }, 1500)

        const navbar = navbarElement.current

        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)
        navbar.addEventListener('mouseover', handleMouseOver)
        navbar.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
            navbar.removeEventListener('mouseover', handleMouseOver)
            navbar.removeEventListener('mouseout', handleMouseOut)
            clearInterval(timerIDInterval)
        }
    }, [pathname, isScroll, dropDown, isEqualParam, isMouseHover])

    const value = {
        mobileMenu,
        dropDown,
        isMobile,
        navBarFixed,
        navbarElement,
        isActive,
        listGameElement,
        contactElement,
        isShow,
        handleMouseEnter,
        handleMouseLeave,
        handleClickMobileMenu,
        handleClickDropDown,
        handleSwitchPage
    }

    return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
}

export { NavbarProvider, NavbarContext }