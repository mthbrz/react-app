import React from 'react'
import '../css/apartmentcard.css'
import { NavLink } from 'react-router-dom'

function ApartmentCard(props) {
 
  return (
      <div className="gallery-cards">
      <img src={props.imageUrl} alt={props.title} className="gallery-image"/>
<NavLink to={`/apartment/${props.id}`}>
        <h3>{props.title}</h3>
      </NavLink>
    </div>
  )
}

export default ApartmentCard

