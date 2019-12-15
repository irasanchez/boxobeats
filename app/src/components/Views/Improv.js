import React, { useState, useEffect } from "react";
import SoundCard from "../SoundCard/SoundCard";

const Improv = ({ beats }) => {
  //isolate 5 random beats from the beats prop
  const fiveNewRandomBeats = beats.sort(() => 0.5 - Math.random()).slice(0, 5);

  //set the 5 random beats to state
  const [fiveRandomBeats, setFiveRandomBeats] = useState([]);

  //if the beats prop changes, re-render the random beats
  useEffect(() => {
    setFiveRandomBeats(fiveNewRandomBeats);
  }, [beats]);

  //re-render the random beats when the user asks to
  const getNewRandomBeats = () => {
    setFiveRandomBeats(fiveNewRandomBeats);
  };

  return (
    <main>
      {fiveRandomBeats.map(beat => {
        return <SoundCard beat={beat} />;
      })}
      <span onClick={getNewRandomBeats}>🔃</span>
    </main>
  );
};

export default Improv;
