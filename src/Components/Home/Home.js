import React from "react";
import "../Home/Home.css";
import image from "./images/image.jpg";
import Navbar from "../Navbar/Navbar";

// const JPG_File = "http://localhost:3000/Resume.pdf";

const Home = () => {
  // const downloadFile = (url) => {
  //   fetch(url)
  //     .then(response=>response.blob())
  //     .then(blob=>{
  //       const blobURL = window.URL.createObjectURL(new Blob([blob]))
  //       const filename = url.split("/").pop();
  //       const aTag = document.createElement("a");
  //       aTag.href = blobURL;
  //       aTag.setAttribute("download", filename);
  //       document.body.appendChild(aTag);
  //       aTag.click();
  //       aTag.remove();
  //   })
  // };

  return (
    <div id="home">
      <div className="cov">
        <Navbar />

        <div className="home">
          <div className="logo">
            <img src={image} alt="ppic" />
          </div>
          <div className="parag">
            <p>
              Hello, I'm Abhishek Singh. I'm a last year undergraduate student
              pursuing my bachelors in computer science at Chandigarh
              University. I spend my day working on web apps with Html,
              JavaScript, React.js and Tailwind CSS.
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
              <a href="Resume.pdf" download='Abhishek resume'>
                <button>Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="verticalv"></div>
      </div>
    </div>
  );
};

export default Home;
