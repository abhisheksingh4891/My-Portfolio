import React from "react";
import "./Experience.css";
import ExpCard from "./ExpCard";
import ExpData from "./ExpData";

const Experience = () => {
  return (
    <section id="exp1">
      <div className="exp" id="experience" >
        <div className="exp-header">
          <h2><u>My Experience</u></h2>
        </div>
        <div className="exp-cards">
          {ExpData.map((content) => (
            <ExpCard
              key={content.id}
              role={content.role}
              company={content.company}
              date={content.date}
              p1={content.p1}
              p2={content.p2}
            />
          ))}
        </div>
      </div>
      <div className="vertica111111 ms-3"></div>
    </section>
  );
};

export default Experience;
