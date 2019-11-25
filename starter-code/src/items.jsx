import React from "react";
import "./Items.css";

export default function Items(props) {
  console.log(props);
  return (
    <div className="one-item">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
