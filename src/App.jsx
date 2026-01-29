import React from 'react'

import Advantage from './components/Advantage'
import About from './components/About'
import Facts from './components/Facts'
import Hero from './components/Hero'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Facts />
      <About />
      <Advantage />
    </>
  )
}

export default App