import { useContext } from 'react'
import { NavbarContext } from './context/NavbarContext'
import { Route, Routes } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { NavBar } from './container'
import { GlobalStyles, Pages } from './GlobalStyles'
import { About, Careers, Home, Kipon, Robotrix, TreasureBox, Position } from './pages'

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
            <Route path={`*`} element={<Position />} />
          </Route>
          <Route path={ROUTES.CONTACT} element={<Home />} />

          <Route path={ROUTES.KIPON} element={<Kipon />} />
          <Route path={ROUTES.ROBOTRIX} element={<Robotrix />} />
          <Route path={ROUTES.TREASURE} element={<TreasureBox />} />

          <Route path={ROUTES.POLICY} element={<Home />} />
          <Route path={ROUTES.TERMS} element={<Home />} />
        </Routes>
      </Pages>
    </>
  )
}

export default App;
