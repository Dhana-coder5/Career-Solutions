import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/AboutUs'
import Header from '../components/Header'
import Services from '../pages/Services'
import Industries from '../pages/Industries'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
      
        </Routes>
      </BrowserRouter>
    </div>
  )
}

