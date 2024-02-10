import React from "react";
import "../Skills/Cards.css";

const Cards = (props) => {
  return (
    <div className="cards">
      <div key={props.id} className="item">
        <img src={props.image} alt="tech-img" className="itemimage"></img>
      </div>

      <div className="itemcontent">
        <h3 className="itemname">
          <b>{props.name}</b>
        </h3>
      </div>
    </div>
  );
};

export default Cards;
