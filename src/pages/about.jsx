import React from 'react'
import Bannerabout from '../components/bannerabout.jsx'
import DescriptionBar from '../components/descriptionbar.jsx'

function About() {
  return (
    <div>
      <Bannerabout/>
      <DescriptionBar title={"mon super titre"}/>
      <DescriptionBar title2={"mon super titre 2"}/>
      <DescriptionBar/>
      <DescriptionBar/>
    </div>
  )
}

export default About
