import React from "react";
import playCircleSolid from "../../assets/play-circle-solid.svg";
const PlayButton = props => {
  return <button>PlayButton: {props.whatever}</button>;
};
//this svg is not working. not sure why. may just want to use FontAwesome library
export default PlayButton;
