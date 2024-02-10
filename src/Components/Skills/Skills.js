import React from "react";
import Cards from "./Cards";
import Content from "./Content";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="paraaa">
        <p>My Skills</p>
      </div>
      <div className="content">
        {Content.map((Content) => (
          <Cards key={Content.id} image={Content.image} name={Content.name} />
        ))}
      </div>
      <div className='vertic'></div>
    </div>
  );
};

export default Skills;
