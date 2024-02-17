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
          Hello, I'm Abhishek Singh. I'm a last year undergraduate student
          pursuing my bachelors in computer science at Chandigarh University.
          I spend my day working on web apps with Html, JavaScript, React.js
          and Tailwind CSS.
        </p>
      </div>
      <div className="all">
        <div className="bttn">
          <a href="https://github.com/abhisheksingh4891">
            <button>GitHub</button>
          </a>
        </div>
        <div className="bttn">
          <a href="https://www.linkedin.com/in/abhishek-singh-7a39a5219">
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
