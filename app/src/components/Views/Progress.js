import React from "react";
import SoundCard from "../SoundCard";
import Info from "../Info";
const Progress = props => {
  const { beats } = props;
  return (
    <main>
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
