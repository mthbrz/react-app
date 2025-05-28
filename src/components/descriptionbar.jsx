import React, { useState } from 'react'
import './descriptionbar.css'

function descriptionbar(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  const contentClass = (isOpen ? "visible" : "hidden"); + "description-text";
  const chevronClass = (isOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down");

  return (
    <div className='equipmentbar'>
      <div className='description-bar'>
        <p className='description-title'>{props.title}</p>
        <i className={chevronClass} onClick={toggleDescription}></i>
       {/* <i className="fa-solid fa-chevron-up"></i> */}

      </div>

      <div className='description-content'>
        {isOpen && <p className={contentClass}>{props.content}</p>}
      </div>
    </div>
  )
}

export default descriptionbar
