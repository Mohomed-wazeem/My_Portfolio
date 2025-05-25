import { useState } from 'react'
import './App.css'
import { Hero } from './components/Hero'
import { Header } from './components/Header'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projectscontainer } from './components/Projectscontainer'
import { Contact } from './components/Contact'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projectscontainer/>
    <Services />
    <Contact />
    </>
  )
}

export default App
