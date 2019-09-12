import React from "react";
import beatsData from "../../assets/beatsData.json";
import SingleBeat from "../SingleBeat/SingleBeat";

const TotalBeatList = () => {
  return (
    <section className="total-beat-list">
      {beatsData.beats.map(beat => {
        return (
          <SingleBeat
            name={beat.name}
            included={beat.included}
            symbol={beat.symbol}
            tutorials={beat.tutorials}
            prerequisites={beat.prerequisites}
          />
        );
      })}
    </section>
  );
};

export default TotalBeatList;
