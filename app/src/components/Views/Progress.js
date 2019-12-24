import React from "react";
import SoundCard from "../SoundCard/SoundCard";
import Info from "../Info";
const Progress = props => {
  const { beats } = props;
  return (
    <main>
      <h1>Progress</h1>
      <Info {...props} />
      <section>
        {beats.map(beat => (
          <SoundCard beat={beat} />
        ))}
      </section>
    </main>
  );
};

export default Progress;
