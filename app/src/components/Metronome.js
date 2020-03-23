import React from "react";
import { useMetronome } from "react-metronome-hook";
import click from "../assets/click.wav";

const Metronome = props => {
  const {
    startMetronome,
    isTicking,
    stopMetronome,
    bpm,
    setBpm,
    setBeatsPerMeasure,
    setSounds
  } = useMetronome(120, 4, [click, click]);
  return (
    <div>
      <p>{bpm}</p>
      <input placeholder="Change BPM" onChange={e => setBpm(e.target.value)} />
      <button onClick={isTicking ? stopMetronome : startMetronome}>
        {isTicking ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Metronome;
