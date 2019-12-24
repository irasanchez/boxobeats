import React from "react";
import SoundCard from "../SoundCard/SoundCard";
const Focus = ({ beats }) => {
  const beat = beats.sort(() => 0.5 - Math.random()).slice(0, 1);

  return (
    <main>
      <SoundCard beat={beat} />
    </main>
  );
};

export default Focus;
