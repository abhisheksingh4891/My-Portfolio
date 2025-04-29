import React from "react";
import Education from "../Components/Education/Education";
import Experience from "../Components/Experience/Experience";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";

const Main = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        backgroundImage: `
          linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 50%),
          radial-gradient(circle at top right, rgba(255,255,255,0.05), transparent 70%)
        `,
        backgroundBlendMode: "overlay",
        minHeight: "100vh",
        color: "white",
      }}
    >
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
