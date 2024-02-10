import React from "react";
import './Experience.css'
import ExpCard from "./ExpCard";
import ExpData from "./ExpData";

const Experience = () => {
  return (
    <div className="exp" id="experience">
      <div className="exppara">
        <p>My Experience</p>
      </div>
      <div className="expecontent">
        {ExpData.map((content) => (
          <ExpCard
            key={content.id}
            role={content.role}
            company={content.company}
            date={content.date}
            p1={content.p1}
          />
        ))}
      </div>
      <div className="verticalll"></div>
    </div>
  );
};

export default Experience;
