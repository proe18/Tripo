import { useContext } from 'react'
import { Dropdown } from '../../components'
import { NavbarContext, ScrollContext } from '../../context'
import * as ROUTES from '../../constants/routes'

const DropDown = () => {
    const { handleClickMobileMenu } = useContext(NavbarContext)
    const { handleScroll } = useContext(ScrollContext)

    return (
        <Dropdown>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <Dropdown.Link
                        to={ROUTES.KIPON}
                        onClick={() => {
                            handleClickMobileMenu()
                            handleScroll()
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
                            handleScroll()
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
                            handleScroll()
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