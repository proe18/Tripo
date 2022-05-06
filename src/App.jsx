import { useContext, useState, useLayoutEffect, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import { GlobalStyles, Pages } from './GlobalStyles'

import { About, Careers, Home, Games, Position, NotFound, PolicyAndTerms } from './pages'

import { footerData } from './data/Footer_data'
import { NavBar, Footer } from './container'
import { ButtonScrollToTop } from './components'
import { GalleryContext, NavbarContext } from './context'

const App = () => {
    const { pathname } = useLocation()
    const { mobileMenu, isMobile } = useContext(NavbarContext)
    const { isCloseGallery } = useContext(GalleryContext)
    const [showButtonScroll, setShowButtonScroll] = useState(false)
    const [isShowFooter, setIsShowFooter] = useState(true)

    useEffect(() => {
        const routes = [
            ROUTES.HOME, 
            ROUTES.ABOUT, 
            ROUTES.CAREERS, 
            ROUTES.KIPON, 
            ROUTES.ROBOTRIX, 
            ROUTES.TREASURE, 
            ROUTES.POLICY, 
            ROUTES.TERMS,
            `${ROUTES.CAREERS}/${ROUTES.MANAGER}`, 
            `${ROUTES.CAREERS}/${ROUTES.TESTER}`, 
            `${ROUTES.CAREERS}/${ROUTES.DESIGNER}`, 
            `${ROUTES.CAREERS}/${ROUTES.DEVELOPER}`
        ]

        const showFooter = routes.some(route => pathname === route)
        setIsShowFooter(showFooter)
    }, [pathname])

    useLayoutEffect(() => {
        const handleShowButtonScroll = () => setShowButtonScroll(window.innerWidth <= 860 && window.scrollY > 580)

        window.addEventListener('resize', handleShowButtonScroll)
        window.addEventListener('scroll', handleShowButtonScroll)

        return () => {
            window.removeEventListener('resize', handleShowButtonScroll)
            window.removeEventListener('scroll', handleShowButtonScroll)
        }
    }, [pathname])

    return (
        <>
            <GlobalStyles mobileMenu={mobileMenu} closeGallery={isCloseGallery} />
            <NavBar />
            <Pages mobileMenu={mobileMenu} positionFixed={isMobile}>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.ABOUT} element={<About />} />
                    <Route path={ROUTES.CAREERS} element={<Careers />}>
                        {[
                            ROUTES.MANAGER,
                            ROUTES.TESTER,
                            ROUTES.DESIGNER,
                            ROUTES.DEVELOPER
                        ].map((path, index) => <Route path={path} key={index} element={<Position />} />)}
                    </Route>

                    {[
                        ROUTES.KIPON,
                        ROUTES.ROBOTRIX,
                        ROUTES.TREASURE
                    ].map((path, index) => <Route path={path} key={index} element={<Games />} />)}

                    {[
                        ROUTES.POLICY,
                        ROUTES.TERMS
                    ].map((path, index) => <Route path={path} key={index} element={<PolicyAndTerms />} />)}

                    <Route path='*' element={<NotFound />} />
                </Routes>
                {isShowFooter && <Footer data={footerData} />}
                {isCloseGallery &&
                    <ButtonScrollToTop
                        onClick={() => window.scrollTo({
                            left: 0,
                            top: 0,
                            behavior: 'smooth'
                        })}
                        hideButton={showButtonScroll}
                    />
                }
            </Pages>
        </>
    )
}

export default App