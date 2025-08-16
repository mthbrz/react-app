import React from 'react'
import '../css/banner.css'

const banner = `${import.meta.env.BASE_URL}banner.png`
const bannerAbout = `${import.meta.env.BASE_URL}banner-about.png`

function Banner({ page }) {
  let backgroundImage = ''
  let showText = false

  if (page === 'home') {
    backgroundImage = banner
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
