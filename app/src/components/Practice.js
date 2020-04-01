import React from "react";

const Practice = props => {
  return (
    <div>
      {props.current.map(sound => (
        <p>{sound.name}</p>
      ))}
    </div>
  );
};

export default Practice;
