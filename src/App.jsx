import { useState } from 'react'


import Navbar from './navbar';
import HeroSection from './section1';
import AboutMe from './secttion2';
import Experience from './section3';
import Skills from './skills';
import Projects from './projects';

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
   
    </>
  )
}


export default App
