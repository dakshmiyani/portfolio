import { useState } from 'react'
import { BrowserRouter  } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

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
    <BrowserRouter>
     <div>
     <div className="navbar">
            <nav>
              <ul className="nav-container">
                <li className="home-btn"><Link className='list' to='#home'>Daksh Miyani</Link></li>
                <li className="navlist"><Link to='#about'>About</Link> </li>
                <li className="navlist"><Link to='#experience'>Experience</Link> </li>
                <li className="navlist"><Link to='#skills'>Skills</Link> </li>
                <li className="navlist"><Link to='#projects'>Projects</Link> </li>
                <li className="navlist"><Link to='#education'>Education</Link> </li>
              </ul>
            </nav>
          </div>
     </div>
    
     <section  id="home"> 
     
       <HeroSection/>
       </section>
       <br /><br /><br />
       <section id="about">
        <AboutMe />
       </section>
       <section id="experience">
        <Experience />
       </section>
       <section id="skills">
        <Skills />
       </section>
       <section id="projects">
        <Projects />
       </section>
       
       <section>
        <Phone/>
        
       </section>
       <br />
       <section id="education">
        <Education />
       </section>
       <br /><br />
       <section id="contact">
        <Contact/>
       </section>
       <br />
       </BrowserRouter>
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
