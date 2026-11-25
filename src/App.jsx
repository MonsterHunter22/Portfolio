import React from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Projects } from './Components/Projects'
import { Process } from './Components/Process'
import { Skills } from './Components/Skills'
import { About } from './Components/About'
import { Testimonials } from './Components/Testimonials'
import { Contact } from './Components/Contacts'
import { Footer } from './Components/Footer'






function App() {

  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Projects/>
        <Process/>
        <Skills/>
        <About/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
