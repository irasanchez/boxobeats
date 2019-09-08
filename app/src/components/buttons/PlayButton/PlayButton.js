import React from "react";
import PlayIcon from "./PlayIcon";
import PauseIcon from "./PauseIcon";

const PlayButton = props => {
  return (
    <button onClick={props.handlePlayingToggle}>
      {props.isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
};
//this svg is not working. not sure why. may just want to use FontAwesome library
export default PlayButton;
