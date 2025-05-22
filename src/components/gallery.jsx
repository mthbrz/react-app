import React from 'react'
import './gallery.css'
import { NavLink } from 'react-router-dom'

function Gallery() {
  return (
    <div className="gallery">
        <NavLink to="/apartment" className="gallery-cards">
            <h3>Titre de la location</h3>
        </NavLink>
        <NavLink to="/apartment" className="gallery-cards">
            <h3>Titre de la location</h3>
        </NavLink>
        <NavLink to="/apartment" className="gallery-cards">
            <h3>Titre de la location</h3>
       </NavLink>
        <NavLink to="/apartment" className="gallery-cards">
            <h3>Titre de la location</h3>
       </NavLink>
        <NavLink to="/apartment" className="gallery-cards">
            <h3>Titre de la location</h3>
        </NavLink>
        <NavLink to="/apartment" className="gallery-cards">
            <h3>Titre de la location</h3>
        </NavLink>
    </div>
  )
}

export default Gallery
