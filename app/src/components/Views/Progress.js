import React from "react";
import SoundCard from "../SoundCard";

const Progress = ({ beats }) => {
  return (
    <main>
      {beats.map(beat => (
        <section>
          <SoundCard beat={beat} />
        </section>
      ))}
    </main>
  );
};

export default Progress;
