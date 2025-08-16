import React from 'react'
import '../css/footer.css'
const logoFooter = `${import.meta.env.BASE_URL}logo-footer.png`

function footer() {
  return (
    <div className='footer'>
        <img src={logoFooter} alt="logo"/>
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default footer
