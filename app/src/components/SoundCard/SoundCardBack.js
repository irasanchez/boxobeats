import React from "react";
import TipContainer from "./TipContainer";
const SoundCardBack = ({ beat }) => {
  return (
    <section>
      <p>{beat.symbol}</p>
      <TipContainer beat={beat} />
    </section>
  );
};

export default SoundCardBack;
