import { Inner, Menu, Item } from './DropDownStyled'
import { Link } from '../navbar/NavBarStyled'

const Dropdown = ({children, ...restProps}) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Dropdown.Menu = function DropdownMenu({children, ...restProps}) {
    return (
        <Menu {...restProps}>{children}</Menu>
    )
}

Dropdown.Item = function DropdownItem({children, ...restProps}) {
    return (
        <Item {...restProps}>{children}</Item>
    )
}

Dropdown.Link = function DropdownLink({children, ...restProps}) {
    return (
        <Link {...restProps}>{children}</Link>
    )
}

export default Dropdown