import React from 'react'
import { NavBtnLink, Nav, NavBtn, NavLink, NavMenu, Bars} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavBtnLink to="/about">About</NavBtnLink>
                    <NavBtnLink to="/skills">Skills</NavBtnLink>
                    <NavBtnLink to="/projects">Projects</NavBtnLink>
                    <NavBtnLink to="/contact">Contact</NavBtnLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
