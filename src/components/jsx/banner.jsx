import React from 'react'
import '../css/banner.css'
import bannerHome from '../../assets/banner.png'
import bannerAbout from '../../assets/banner-about.png'

function Banner({ page }) {
  let backgroundImage = ''
  let showText = false

  if (page === 'home') {
    backgroundImage = bannerHome
    showText = true
  } else if (page === 'about') {
    backgroundImage = bannerAbout
    showText = false
  }

  return (
    <div className='banner' style={{backgroundImage: `url(${backgroundImage})`,}}>
      {showText && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  )
}

export default Banner
