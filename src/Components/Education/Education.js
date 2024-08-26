import React from "react";
import "../Education/Education.css";
import logo from "../Education/logo.png";
const Education = () => {
  return (
    <section id="edu1">
      <div className="edu" id="education">
        <div className="paraa">
          <p><u>My Education</u></p>
        </div>
        <div className="boxii">
          <img src={logo} alt="logo" />
          <div className="listt">
            <ul>
              <li>
                <b>Bachelor of Engineering</b>
              </li>
              <li>Chandigarh University</li>
              <li>Graduated in 2024</li>
              // <li>CGPA 7.98/10</li>
            </ul>
            <ol className="circle">
              <li typeof="bullet">Major in Computer Science</li>
              <li>Major in Software Development</li>
              <li>Major in FullStack Development</li>
              {/* <li></li> */}
            </ol>
          </div>
        </div>
        <div className="vertica"></div>
      </div>
    </section>
  );
};

export default Education;
