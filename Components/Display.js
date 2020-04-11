import React from "react";

function Display(props) {
  return (
    <div>
      <p>{props.name}</p>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleChange(props.id)}
      />
    </div>
  );
}

export default Display;
