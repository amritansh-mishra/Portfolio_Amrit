import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Skills from './components/Skills/Skills.jsx';
import Education from './components/Education/Education.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';





function App () {
  return (
    <div className ="bg-[#22223B]">
      <div className=''>

      </div>

      
      <div className='relative pt-20'>
        <Navbar />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App;