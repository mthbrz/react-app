import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/flats" element={<h1>Fiche logement</h1>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
