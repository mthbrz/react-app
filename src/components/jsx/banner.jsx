import React from 'react'
import '../css/banner.css'

function Banner({ page }) {
  let backgroundImage = ''
  let showText = false
  let overlayOpacity = 0.5

  if (page === 'home') {
    backgroundImage = '/banner.png'
    showText = true
    overlayOpacity = 0.5
  } else if (page === 'about') {
    backgroundImage = '/public/banner-about.png'
    showText = false
    overlayOpacity = 0.3
  }

  return (
    <div className='banner' style={{backgroundImage: `url(${backgroundImage})`,}}>
      <div className='banner-overlay' style={{backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,}}></div>
      {showText && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  )
}

export default Banner
