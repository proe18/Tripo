import { useContext } from 'react'
import { Dropdown } from '../../components'
import * as ROUTES from '../../constants/routes'
import { NavbarContext } from '../../context/NavbarContext'

const DropDown = () => {
    const { handleClickMobileMenu } = useContext(NavbarContext)

    return (
        <Dropdown>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <Dropdown.Link
                        to={ROUTES.KIPON}
                        onClick={handleClickMobileMenu}
                    >
                        Kipon
                    </Dropdown.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Dropdown.Link
                        to={ROUTES.ROBOTRIX}
                        onClick={handleClickMobileMenu}
                    >
                        Robotrix
                    </Dropdown.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Dropdown.Link
                        to={ROUTES.TREASURE}
                        onClick={handleClickMobileMenu}
                    >
                        Treasure Box
                    </Dropdown.Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropDown