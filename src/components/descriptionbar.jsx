import React from 'react'
import './descriptionbar.css'

function descriptionbar(props) {
  return (
    <div className='equipmentbar'>
      <div className='description-bar'>
        <p className='description-title'>{props.title}</p>
        <i className="fa-solid fa-chevron-down"></i>
       {/* <i className="fa-solid fa-chevron-up"></i> */}

      </div>

      <div className='description-content'>
        <p className="description-text">{props.content}</p>
      </div>
    </div>
  )
}

export default descriptionbar
