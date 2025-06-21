import React from 'react'
import Navbar from '../components/Homepage/Navbar/Navbar'
import Hero from '../components/Homepage/Hero/Hero'
import  Card  from '../components/Homepage/Cards/Cards'
import Services from '../components/Homepage/Services/Services'
import Footer from '../components/Homepage/Footer/Footer'
import withRedirectIfAuth from '@/components/withRedirectIfAuth'

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

export default withRedirectIfAuth(Homepage);
