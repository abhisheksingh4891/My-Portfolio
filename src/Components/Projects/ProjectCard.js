import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="projectcard">
      <div className="bn">
        <div className="itemconten">
          <ul className="itemlis">
            <li className="nam">
              <b>{props.name}</b>
            </li>
            <li className="tech">
              <b>Technology Used:</b> {props.tech}
            </li>
          </ul>
          <ol>
            <li>{props.p1}</li>
          </ol>
        </div>
        <div style={{display:'flex'}}>
          <div className="btn">
            <a href={props.git}>
              <button>GitHub</button>
            </a>
          </div>
          {/* <div className="btn">
            <a href="./">
              <button>Project</button>
            </a>
          </div> */}
        </div>
      </div>
      <div key={props.id} className="itemm">
        <img src={props.image} alt="pro-img" className="itemimag"></img>
      </div>
    </div>
  );
};

export default ProjectCard;
