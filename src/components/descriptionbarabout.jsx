import React from 'react'
import './descriptionbarabout.css'


function DescriptionBarAbout(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  const contentClass = (isOpen ? "visible" : "hidden"); + "description-text";
  const chevronClass = (isOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down");

  return (
    <div className='equipmentbarabout'>
      <div className='description-bar'>
        <p className='description-title'>{props.title}</p>
        <i className={chevronClass} onClick={toggleDescription}></i>
      </div>
      <div className='description-content'>
        {isOpen && <p className={contentClass}>{props.content}</p>}
      </div>
    </div>
  )
}

export default DescriptionBarAbout

