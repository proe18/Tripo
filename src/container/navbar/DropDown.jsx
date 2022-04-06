import { useContext } from 'react'
import { Dropdown } from '../../components'
import { NavbarContext } from '../../context'
import * as ROUTES from '../../constants/routes'

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
                            handleSwitchPage()
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
                            handleSwitchPage()
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
                            handleSwitchPage()
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