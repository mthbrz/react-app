import React from 'react'
import '../css/descriptionapartment.css'

function Descriptionapartment(props) {

const name = props.host.name
const [firstName, lastName] = name.split(' ');

  return (
    <div className='header-flat'>
        <div className='flat-presentation'>
            <h1>{props.title}</h1>
            <h2>{props.location}</h2>
            <div className='flat-categories'>
                {props.tags.map((tag) => (<h3 key={tag}>{tag}</h3>))}
            </div>
        </div>
        <div className='owner-section'>
            <div className='owner-presentation'>
                <h2><span>{firstName}</span><span>{lastName}</span></h2>
                <div className='badge'style={{ backgroundImage: `url(${props.host.picture})`}}></div>
            </div>
            <div className="rating">
                {[1, 2, 3, 4, 5].map((num) => (
            <i key={num} className={`fa-star fa-solid ${props.rating >= num ? 'active' : 'inactive'}`}></i>
                ))}
            </div>

            </div>
        </div>
  )
}

export default Descriptionapartment
