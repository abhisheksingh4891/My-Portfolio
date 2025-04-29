import React from "react";
import Cards from "./Cards";
import Content from "./Content";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills1">
      <div className="skills" id="skills">
        <div className="paraaa">
          <p><u>My Skills</u></p>
        </div>
        <div className="content">
          {Content.map((Content) => (
            <Cards key={Content.id} image={Content.image} name={Content.name} />
          ))}
        </div>
        {/* <div className="vertic"></div> */}
      </div>
    </section>
  );
};

export default Skills;
