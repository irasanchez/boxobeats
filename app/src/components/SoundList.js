import React from "react";
import Sound from "./Sound";
const SoundList = props => {
  return (
    <div>
      {props.beats.map(beat => {
        return (
          <Sound key={beat.name}>
            <p>{beat.name}</p>
          </Sound>
        );
      })}
    </div>
  );
};

export default SoundList;

//test that the component renders with props
