import React from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className="navbar-links">
          <NavLink to="/">
            <h2>Accueil</h2>
          </NavLink>
          <NavLink to="/about">
            <h2>A Propos</h2>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
