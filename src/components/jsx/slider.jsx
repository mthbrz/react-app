import React from 'react'
import '../css/slider.css'

function Slider(props) {

  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = React.useState(0);

  const getClassName = (i) => {
    return i === currentPicture ? "active" : "";
   };
   
   const moveToNext =() => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
   }

  const moveToPrevious = () => {
    setCurrentPicture((currentPicture - 1 + pictures.length) % pictures.length);
  }

  return (
    <div className='bannerflat' >
      {pictures.map((pic, i) => (
        <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
      ))} 
      {pictures.length > 1 && (
        <>
         <div className='bannerflat-counter'>
        {currentPicture + 1}/{pictures.length}
      </div>
      <div className='bannerflat-button'>
        <button onClick={moveToPrevious} className='btn'><i className='fa-solid fa-chevron-left'></i></button>
        <button onClick={moveToNext} className='btn'><i className='fa-solid fa-chevron-right'></i></button>
        </div>
        </>)
        }
    </div> 
  )
}
export default Slider
