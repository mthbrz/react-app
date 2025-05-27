import React from 'react'
import './bannerapartment.css'

function Bannerapartment(props) {
  return (
    <div className='bannerflat' style={{ backgroundImage: `url(${props.imageUrl})` }}>
      
    </div>
  )
}
export default Bannerapartment
