import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const SoundCardFront = ({ beat }) => {
  const playSound = () => {
    // need to look up how to play a soundfile using js.
    return;
  };

  return (
    <section>
      <h1>{beat.name}</h1>
      <p>{beat.description}</p>
      <p>Requires: {beat.prerequisites}</p>
      <FaPlayCircle onClick={playSound} />
    </section>
  );
};

export default SoundCardFront;
