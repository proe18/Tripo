import { Dropdown } from '../components'
import * as ROUTES from '../constants/routes'

const DropDown = ({mobileMenu}) => {
    return (
        <Dropdown mobileMenu={mobileMenu}>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <Dropdown.Link to={ROUTES.KIPON}>Kipon</Dropdown.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Dropdown.Link to={ROUTES.ROBOTRIX}>Robotrix</Dropdown.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Dropdown.Link to={ROUTES.TREASURE}>Treasure Box</Dropdown.Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropDown