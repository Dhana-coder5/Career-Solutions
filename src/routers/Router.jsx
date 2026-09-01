import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/AboutUs'
import Header from '../components/Header'
import Services from '../pages/Services'
import Industries from '../pages/Industries'
import CampusDrives from '../pages/CampusDrive'
import VendorPartnership from '../pages/Vendor Partner'
import Jobs from '../pages/Jobs'
import Employers from '../pages/Employers'
import WhyChooseUs from '../pages/WhyChooseUs'
import RecruitmentProcess from '../pages/RecruitmentProcess'
import SuccessImpact from '../pages/SuccessImpact'

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
          <Route path="/campus" element={<CampusDrives />} />
          <Route path="/vendor" element={<VendorPartnership  />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/employers" element={<Employers/>} />
          <Route path="/why" element={<WhyChooseUs />} />
          <Route path="/recruitment-process" element={<RecruitmentProcess />} />
          <Route path="/success-impact"element={<SuccessImpact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

