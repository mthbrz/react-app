import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Error from './pages/error.jsx'
import Apartment from './pages/apartment.jsx'

const HeaderFooterLayout = () => {
  return <>
<Navbar />
<Outlet />
<Footer />  
  </>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderFooterLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apartment" element={<Apartment/>} />
        <Route path="*" element={<Error />}/>
      </Route>

    </Routes>
  )
}

export default App
