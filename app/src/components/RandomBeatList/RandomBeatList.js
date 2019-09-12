import React from "react";
import beatsData from "../../assets/beatsData.json";
import RandomBeat from "./RandomBeat";
import "./RandomBeatList.css";

const RandomBeatList = () => {
  const allBeats = beatsData.beats.filter(beat => beat.included);
  const shuffledBeats = allBeats.sort(() => 0.5 - Math.random());
  let selectedBeats = shuffledBeats.slice(0, 5); //change 5 to change the amount of beats selected
  console.log(selectedBeats);

  return (
    <section className="random-beat-list">
      {selectedBeats.map(beat => {
        return (
          <RandomBeat
            name={beat.name}
            included={beat.included}
            symbol={beat.symbol}
          />
        );
      })}
    </section>
  );
};

export default RandomBeatList;