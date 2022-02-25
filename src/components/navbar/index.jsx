import {
    Inner,
    Container,
    Nav,
    Item,
    Link,
    NavDropDown,
    Icon,
    DropDownIcon
} from './NavBarStyled';

const Navbar = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    );
}

Navbar.Container = function NavbarContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Navbar.Nav = function NavbarNav({ children, ...restProps }) {
    return (
        <Nav {...restProps}>{children}</Nav>
    )
}

Navbar.Item = function NavbarItem({ children, ...restProps }) {
    return (
        <Item {...restProps}>{children}</Item>
    )
}

Navbar.Link = function NavbarLink({ children, ...restProps }) {
    return (
        <Link {...restProps}>{children}</Link>
    )
}

Navbar.NavDropDown = function NavbarNavDropDown({ children, ...restProps }) {
    return (
        <NavDropDown {...restProps}>{children}</NavDropDown>
    )
}

Navbar.Icon = function NavbarIcon({ children, ...restProps }) {
    return (
        <Icon {...restProps}>{children}</Icon>
    )
}

Navbar.DropDownIcon = function NavbarDropDownIcon({ children, ...restProps }) {
    return (
        <DropDownIcon {...restProps}>{children}</DropDownIcon>
    )
}

export default Navbar