import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../css/constants.css";
import "../../css/landingCss/navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h1>Shoyo.</h1>
        <div className="tabs">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/pricing">PRICING</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
