import React from 'react'
import { NavBtnLink, Nav, NavBtn, NavLink, NavMenu, Bars} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavLink to="/">
                    <h1>About</h1>
                </NavLink>
                <NavMenu>
                    <NavBtnLink to="/projects">Projects</NavBtnLink>
                    <NavBtnLink to="/contact">Contact</NavBtnLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
