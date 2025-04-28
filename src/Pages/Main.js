import React from 'react';
import Education from '../Components/Education/Education';
import Experience from '../Components/Experience/Experience';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar'; // Included Navbar for navigation

const Main = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Home />
        <div className="section-spacing">
          <Projects />
        </div>
        <div className="section-spacing">
          <Skills />
        </div>
        <div className="section-spacing">
          <Experience />
        </div>
        <div className="section-spacing">
          <Education />
        </div>
        <Footer />
    </div>
  );
};

export default Main;
