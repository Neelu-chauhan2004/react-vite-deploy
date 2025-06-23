import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero.jsx'
import BrandLogo from './Components/BrandLogo/BrandLogo.jsx'
import Services from './Components/Services/Services.jsx'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import BlogsComp from './Components/BlogsComp/BlogsComp.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black duration-300">
      <Navbar />
      <Hero />
      <BrandLogo />
      <Services />
      <Testimonials />
      <BlogsComp />
      <Footer/>
    </div>
  )
}

export default App