import React from "react";

const Progress = ({ beats }) => {
  return (
    <main>
      {beats.map(beat => (
        <section>
          <p>{beat.name}</p>
        </section>
      ))}
    </main>
  );
};

export default Progress;
