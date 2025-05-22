import React from 'react'
import './descriptionapartment.css'

function Descriptionaparment() {
  return (
    <div className='header-flat'>
        <div className='flat-presentation'>
            <h1>Cozy loft on the Canal Saint-Martin</h1>
            <h2>Paris, Île-de-France</h2>
            <div className='flat-categories'>
                <h3>Cozy</h3>
                <h3>Canal</h3>
                <h3>Paris 10</h3>
            </div>
        </div>
        <div className='owner-section'>
            <div className='owner-presentation'>
                <h2><span>Alexandre</span><span>Dumas</span></h2>
                <div className='badge'></div>
            </div>
            <div className='rating'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
        </div>
    </div>
  )
}

export default Descriptionaparment
