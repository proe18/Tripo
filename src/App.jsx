import { useContext, useState, useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import { GlobalStyles, Pages } from './GlobalStyles'

import { NavBar } from './container'
import { About, Careers, Home, Games, Position, NotFound, PolicyAndTerms } from './pages'

import { ButtonScrollToTop, ScrollToTop } from './components'
import { NavbarContext } from './context'

const App = () => {
    const { pathname } = useLocation()
    const { mobileMenu } = useContext(NavbarContext)
    const [showButtonScroll, setShowButtonScroll] = useState(window.innerWidth <= 640 && window.scrollY > 680)

    useLayoutEffect(() => {
        const handleShowButtonScroll = () => {
            if (window.innerWidth > 640 || window.scrollY < 680) {
                setShowButtonScroll(false)
            } else {
                setShowButtonScroll(true)
            }
        }

        window.addEventListener('resize', handleShowButtonScroll)
        window.addEventListener('scroll', handleShowButtonScroll)

        return () => {
            window.removeEventListener('resize', handleShowButtonScroll)
            window.addEventListener('scroll', handleShowButtonScroll)
        }
    }, [pathname])

    return (
        <>
            <ScrollToTop>
                <GlobalStyles />
                <NavBar />
                <Pages mobileMenu={mobileMenu}>
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
                        <Route path={ROUTES.CONTACT} element={<Home />} />

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
                    <ButtonScrollToTop hideButton={showButtonScroll}/>
                </Pages>
            </ScrollToTop>
        </>
    )
}

export default App;
