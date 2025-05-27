import React from 'react'
import './apartmentcard.css'
import { NavLink } from 'react-router-dom'

function ApartmentCard(props) {
  const state = {
    user : props.id }

  return (
      <div className="gallery-cards">
      <img src={props.imageUrl} alt={props.title} className="gallery-image"/>
          <NavLink to="/apartment" state={state}>
            <h3>{props.title}</h3>
        </NavLink>
    </div>
  )
}

export default ApartmentCard

