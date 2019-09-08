import React from "react";
import OpenBox from "./OpenBox";
import ClosedBox from "./ClosedBox";
const Box = props => {
  return <div>{props.isPlaying ? <OpenBox /> : <ClosedBox />}</div>;
};

export default Box;
