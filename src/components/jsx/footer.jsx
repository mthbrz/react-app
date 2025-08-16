import React from 'react'
import '../css/footer.css'
import LogoFooter from '../../assets/logo-footer.png'

function footer() {
  return (
    <div className='footer'>
        <img src={LogoFooter} alt="logo"/>
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default footer
