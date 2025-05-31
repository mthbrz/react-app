import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/css/notfound.css'

function Error() {
  return (
    <div className='error'>
      <h1>404</h1>
      <h2 className='error-text'>Oups! La page que vous demandez n'existe pas.</h2>
        <p>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </p>
    </div>  )
}

export default Error
