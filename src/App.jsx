import { Route, Routes } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { GlobalStyles, Pages } from './GlobalStyles'
import { NavBar } from './container'
import { About, Careers, Home, Kipon, Robotrix, TreasureBox } from './pages'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Pages>
        <Routes>
          <Route index path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.KIPON} element={<Kipon />} />
          <Route path={ROUTES.ROBOTRIX} element={<Robotrix />} />
          <Route path={ROUTES.TREASURE} element={<TreasureBox />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CAREERS} element={<Careers />} />
          <Route path={ROUTES.CONTACT} element={<Home />} />
        </Routes>
      </Pages>
    </>
  )
}

export default App;
