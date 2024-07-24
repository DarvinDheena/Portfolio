import React , { useState } from 'react'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <div className={ styles.App }>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App