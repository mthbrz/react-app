import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">
            <img src="logo.png" alt="logo" />
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
