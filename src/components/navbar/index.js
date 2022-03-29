import React from 'react'
import SignupBtn from '../SignupBtn'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Register/Signup'
import About from '../pages/About/About';
const NavBar = () => {
    return (
        <>
            <Router>
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
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="/Login" element={<Login />}/>
                    <Route path="Sign-up" element={<Signup />}/>
                </Routes>
            </Router>
        </>
    )
}
export default NavBar
