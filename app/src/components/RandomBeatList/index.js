import React from "react";
import beatsData from "../../assets/beatsData.json";
import Beat from "./Beat";
import "./RandomBeatList.css";

const index = () => {
  const beats = beatsData.beats.filter(beat => beat.included);

  return (
    <section className="random-beat-list">
      {beats.map(beat => {
        return (
          <Beat
            name={beat.name}
            included={beat.included}
            symbol={beat.symbol}
          />
        );
      })}
    </section>
  );
};

export default index;
