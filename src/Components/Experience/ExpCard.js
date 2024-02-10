import React from "react";
import './ExpCard.css'

const ExpCard = (props) => {
  return (
      <div className="expcard">
      <div className="bn">
        <div className="expcontent">
          <ul className="explis">
            <li className="exprole">
              <b>{props.role}</b>
            </li>
            <li className="company">{props.company}</li>
            <li className="company">{props.date}</li>
          </ul>
          <ol>
            <li>{props.p1}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
