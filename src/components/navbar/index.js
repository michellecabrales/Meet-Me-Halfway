import React, { useContext, useEffect, useState } from "react";
import SignupBtn from "../SignupBtn";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Register/Signup";
import About from "../pages/About/About";
import Dashboard from "../../Dashboard";
import { logOut } from "../../firebase";
import { Button } from "@mui/material";
import { AppContext } from "../../AppContext";
//import AccountTest from "../AccountTest";

const NavBar = ({ user, loginfn, logoutfn }) => {
  let navigate = useNavigate();

  let [logged_in, setLoggedIn] = useState(false);
  // let logout = () => logoutfn();
  let { logout } = useContext(AppContext);

  useEffect(() => {
    setLoggedIn(user);
  }, [user]);

  let showLoginOrLogoutButton = (user) => {
    return !user ? (
      <>
        <NavLink to="/login" activeStyle>
          Login
        </NavLink>
        <NavLink to="/Sign-up">
          <SignupBtn />
        </NavLink>
      </>
    ) : (
      <Button onClick={logout}>Logout</Button>
    );
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Meet Me Halfway</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>

          {showLoginOrLogoutButton(logged_in, logout)}
        </NavMenu>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login loginfn={loginfn} user={user} />} />
        <Route path="Sign-up" element={<Signup />} />
        <Route path="Dashboard" element={<Dashboard />} />
        
      </Routes>
    </>
  );
};
export default NavBar;
