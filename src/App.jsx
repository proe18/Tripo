import { useContext, useState, useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import { GlobalStyles, Pages } from './GlobalStyles'

import { About, Careers, Home, Games, Position, NotFound, PolicyAndTerms } from './pages'

import { NavBar } from './container'
import { ButtonScrollToTop } from './components'
import { GalleryContext, NavbarContext } from './context'

const App = () => {
    const { pathname } = useLocation()
    const { mobileMenu, isMobile } = useContext(NavbarContext)
    const { isCloseGallery } = useContext(GalleryContext)
    const [showButtonScroll, setShowButtonScroll] = useState(false)

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
            <GlobalStyles />
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
                {isCloseGallery && <ButtonScrollToTop onClick={() => window.scrollTo(0, 0)} hideButton={showButtonScroll} />}
            </Pages>
        </>
    )
}

export default App