import { useContext } from 'react'
import { NavbarContext } from './context/NavbarContext'
import { Route, Routes } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { NavBar } from './container'
import { GlobalStyles, Pages } from './GlobalStyles'
import { About, Careers, Home, Kipon, Position, NotFound } from './pages'

const App = () => {
  const { mobileMenu } = useContext(NavbarContext)

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Pages mobileMenu={mobileMenu}>
        <Routes>
          <Route index path={ROUTES.HOME} element={<Home />} />
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
          ].map((path, index) => <Route path={path} key={index} element={<Kipon />} />)}

          <Route path={ROUTES.POLICY} element={<Home />} />
          <Route path={ROUTES.TERMS} element={<Home />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Pages>
    </>
  )
}

export default App;
