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
            Hello, I'm Abhishek Singh, a Full Stack Developer with a Bachelor's
            degree in Computer Science from Chandigarh University. Currently
            working at Metaponder Solutions Pvt Ltd, I specialize in building
            scalable web applications using the MERN stack (MongoDB, Express.js,
            React.js, Node.js), along with TypeScript, Next.js, PostgreSQL, MySQL and modern UI
            libraries like Bootstrap and Tailwind CSS. I focus on developing
            robust user modules and admin panels, integrating APIs, and ensuring
            smooth user experiences. My passion lies in creating efficient,
            dynamic web solutions and collaborating with teams to deliver
            impactful, high-quality software. I thrive on continuous learning
            and enjoy solving complex problems—reflected in my achievements in
            competitive programming and full-stack project development.
          </p>
        </div>
        <div className="all">
          <div className="bttn">
            <a href="https://github.com/abhisheksingh4891">
              <button>GitHub</button>
            </a>
          </div>
          <div className="bttn">
            <a href="https://www.linkedin.com/in/abhisheksingh4891">
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
      {/* <div className="verticalv"></div> */}
    </>
  );
};

export default Home;
