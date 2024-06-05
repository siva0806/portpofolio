import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Me from './components/Me'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {

  return (
    <div>  
      
      
      
        <Header/> 
        <Me />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        
      

    </div>
  );
}

export default App
