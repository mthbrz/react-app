import React from 'react'
import Bannerapartment from '../components/bannerapartment'
import Descriptionapartment from '../components/descriptionapartment'
import Descriptionbar from '../components/descriptionbar'
import '../components/equipmentbar.css'

function Apartment() {
  return (
    <div>
        <Bannerapartment/>
        <Descriptionapartment/>  
        <div className='equipmentbar'>
        <Descriptionbar />  
        <Descriptionbar />  
        </div>
    </div>
  )
}

export default Apartment
