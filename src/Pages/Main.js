import React from 'react'
import Education from '../Components/Education/Education'
import Experience from '../Components/Experience/Experience'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/Projects'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'
// import Navbar from '../Components/Navbar/Navbar'


const Main = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Home/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Education/>
        <Footer/>
    </div>
  )
}

export default Main