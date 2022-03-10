import React from 'react'
import SignupBtn from '../SignupBtn'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements'

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Meet Me Halfway</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>About</NavLink>
                    <NavLink to="/login" activeStyle>Login</NavLink>
                    <NavLink to="/Sign-up"><SignupBtn /></NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar
