import React from 'react'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Service'
import Footer from './components/Footer'
import TestimonialSlider from './components/TestimonialSlider'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Services/>
      <TestimonialSlider/>
      <Footer/>
    </div>
  )
}

export default App