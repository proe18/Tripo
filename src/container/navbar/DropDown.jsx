import { useContext } from 'react'
import { Dropdown } from '../../components'
import { NavbarContext } from '../../context'
import * as ROUTES from '../../constants/routes'
import * as PAGESTITLE from '../../constants/pages_title'

const DropDown = () => {
    const { handleClickMobileMenu, handleSwitchPage } = useContext(NavbarContext)

    return (
        <Dropdown>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <Dropdown.Link
                        to={ROUTES.KIPON}
                        onClick={() => {
                            handleClickMobileMenu()
                            handleSwitchPage(PAGESTITLE.KIPON)
                        }}
                    >
                        Kipon
                    </Dropdown.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Dropdown.Link
                        to={ROUTES.ROBOTRIX}
                        onClick={() => {
                            handleClickMobileMenu()
                            handleSwitchPage(PAGESTITLE.ROBOTRIX)
                        }}
                    >
                        Robotrix
                    </Dropdown.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Dropdown.Link
                        to={ROUTES.TREASURE}
                        onClick={() => {
                            handleClickMobileMenu()
                            handleSwitchPage(PAGESTITLE.TREASURE)
                        }}
                    >
                        Treasure Box
                    </Dropdown.Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropDown