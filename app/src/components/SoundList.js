import React from "react";
import Sound from "./Sound";
const SoundList = props => {
  return (
    <div>
      {props.beats.map(beat => {
        return (
          <Sound>
            <p>{beat.name}</p>
          </Sound>
        );
      })}
    </div>
  );
};

export default SoundList;
