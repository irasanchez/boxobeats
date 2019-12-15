import React, { useState, useEffect } from "react";
import { POINT_CONVERSION_COMPRESSED } from "constants";

const TipContainer = ({ beat }) => {
  //isolate 1 random tip from the beat prop. (each tip is an object with tip and user inside)
  const randomTip = beat.tips
    ? beat.tips.sort(() => 0.5 - Math.random()).slice(0, 1)
    : "";

  //set the tips to state
  const [tipState, setTipState] = useState(randomTip[0]);

  //if the beat prop changes, re-render the tip
  useEffect(() => {
    setTipState(randomTip[0]);
  }, []);

  return <div>{tipState ? tipState.tip : null}</div>;
};

export default TipContainer;
