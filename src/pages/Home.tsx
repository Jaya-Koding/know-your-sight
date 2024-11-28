import React from 'react'
import Navbar from '../components/template/Navbar'
import Hero from '../components/template/Hero'
import Step from '../components/template/Step'
import Footer from '../components/template/Footer'
import Contact from '../components/template/Contact'


const Home:React.FC = () => {
  return (
    <div className='select-none'>
      <Navbar />
      <Hero />
      <Step />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home