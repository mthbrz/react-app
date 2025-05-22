import React from 'react'
import './descriptionbar.css'

function descriptionbar({title, title2}) {
  console.log(title, title2)
  return (
    <div className='description-bar'>
      <h1>{title}</h1>
      <i className="fa-solid fa-chevron-up"></i>
    </div>
  )
}

export default descriptionbar
