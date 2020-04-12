import React from "react";

function Display(props) {
  const completedStyle = {
    font: "Italic",
    color: "#cdcdcd",
    textDecoration:"line-through"
  }
  return (
    <div>
      <p style = {props.completed ? completedStyle:null}>{props.name}</p>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleChange(props.id)}
      />
    </div>
  );
}

export default Display;
