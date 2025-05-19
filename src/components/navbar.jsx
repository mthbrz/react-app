import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

function navbar() {
  return (
    <nav className='navbar'>
      <NavLink to="/">
        <div className='navbar-logo'>
            <img src='logo.png' alt='logo' />   
        </div>
        </NavLink>
        <div className='navbar-links'>
          <NavLink to="/"><h2>Accueil</h2></NavLink>
          <NavLink to="/about"><h2>A Propos</h2></NavLink>
           
            </div>
    </nav>
  )
}

export default navbar
