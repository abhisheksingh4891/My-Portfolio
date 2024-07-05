import React from "react";
import "../Home/Home.css";
import image from "./images/image.jpg";

const Home = () => {
  return (
    <>
      <section id="home1" className="home">
        <div className="blur-overlay"></div> {/* Add the blur overlay */}
        <div className="logo">
          <img src={image} alt="ppic" />
        </div>
        <div className="parag">
          <p>
            Hello, I'm Abhishek Singh. I have graduated with a Bachelor's degree
            in Computer Science from Chandigarh University. Currently, I am
            working as a Full Stack Developer specializing in the MERN stack. I spend my days developing and
            optimizing web applications using HTML, JavaScript, React.js, and
            Bootstrap. My passion lies in creating seamless and efficient user
            experiences through innovative web solutions.
          </p>
        </div>
        <div className="all">
          <div className="bttn">
            <a href="https://github.com/abhisheksingh4891">
              <button>GitHub</button>
            </a>
          </div>
          <div className="bttn">
            <a href="https://www.linkedin.com/in/abhisheksinghsoftwaredeveloper">
              <button>LinkedIn</button>
            </a>
          </div>
          <div className="bttn">
            <a href="Resume.pdf" download="Abhishek resume">
              <button>Resume</button>
            </a>
          </div>
        </div>
      </section>
      <div className="verticalv"></div>
    </>
  );
};

export default Home;
