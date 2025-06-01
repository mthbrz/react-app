import React from 'react'
import '../css/banner.css'

function Banner({ page }) {
  let backgroundImage = ''
  let showText = false

  if (page === 'home') {
    backgroundImage = '/banner.png'
    showText = true
  } else if (page === 'about') {
    backgroundImage = '/banner-about.png'
    showText = false
  }

  return (
    <div className='banner' style={{backgroundImage: `url(${backgroundImage})`,}}>
      {showText && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  )
}

export default Banner
