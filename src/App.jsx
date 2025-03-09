import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './navbar';
import HeroSection from './section1';
import AboutMe from './secttion2';
import Experience from './section3';
import Skills from './skills';
import Projects from './projects';
import Phone from './projectphone';
import Education from './education';
import Contact from './contact';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    
     <section> 
     
       <HeroSection/>
       </section>
       <br /><br /><br />
       <section>
        <AboutMe/>
       </section>
       <section>
        <Experience/>
       </section>
       <section>
        <Skills/>
       </section>
       <section>
        <Projects/>
       </section>
       
       <section>
        <Phone/>
        
       </section>
       <br />
       <section>
        <Education/>
       </section>
       <br /><br />
       <section>
        <Contact/>
       </section>
       <br />
       <footer>
        <div className='fborder'></div>
             <p style={{color:"white", fontSize:"20px", marginLeft:"50px",marginTop:"50px",marginBottom:"50px"}}>
             &copy; PORTFOILIO developed by <span className='biocyan'>Daksh Miyani</span> 
             </p>
       </footer>
       
   
    </>
  )
}


export default App
