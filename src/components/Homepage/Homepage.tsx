import React from 'react'
import Navbar from '../Homepage/Navbar/Navbar'
import Hero from './Hero/Hero'
import  Card  from './Cards/Cards'
import Services from './Services/Services'
import Footer from './Footer/Footer'

function Homepage() {
  return (
    <div>
        <Navbar />
        <Hero /> 
        <Card />
        <Services />
        <Footer />
      
    </div>
  )
}

export default Homepage
