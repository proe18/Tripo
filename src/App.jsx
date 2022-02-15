import { useContext } from 'react'
import { NavbarContext } from './context/NavbarContext'
import { Route, Routes } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { NavBar } from './container'
import { GlobalStyles, Pages } from './GlobalStyles'
import { About, Careers, Home, Games, Position, NotFound, PolicyAndTerms } from './pages'

const App = () => {
  const { mobileMenu } = useContext(NavbarContext)

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Pages mobileMenu={mobileMenu}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CAREERS} element={<Careers />}></Route>
          <Route path={ROUTES.CONTACT} element={<Home />} />

          {[
            ROUTES.MANAGER,
            ROUTES.TESTER,
            ROUTES.DESIGNER,
            ROUTES.DEVELOPER
          ].map((path, index) => <Route path={path} key={index} element={<Position />} />)}

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
      </Pages>
    </>
  )
}

export default App;
