import React from "react";
import "./ExpCard.css";

const ExpCard = (props) => {
  return (
    <div className="expcard">
      <div className="expcontent">
        <ul className="explist">
          <li className="exprole">
            <strong>{props.role}</strong>
          </li>
          <li className="expcompany">{props.company}</li>
          <li className="expdate">{props.date}</li>
        </ul>
        {(props.p1 || props.p2) && (
          <ol className="exppoints">
            {props.p1 && <li>{props.p1}</li>}
            {props.p2 && <li>{props.p2}</li>}
          </ol>
        )}
      </div>
    </div>
  );
};

export default ExpCard;
