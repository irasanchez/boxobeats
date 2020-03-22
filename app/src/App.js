import React, { useState } from "react";
import beatsData from "./assets/beatsData.json";
import { useMetronome } from "react-metronome-hook";
import click from "./assets/click.wav";
import Test from "./components/test";

const App = props => {
  //grab data from json file and set it to state
  //FIXME: Must get data dynamically using axios
  const [beats] = useState(beatsData.beats);
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
      <Test>
        <p>anything inside of this will be props.children in Test.js</p>
        <p>Test</p>
      </Test>
      <div>
        <button onClick={isTicking ? stopMetronome : startMetronome}>
          {isTicking ? "Stop" : "Start"}
        </button>
        <div>{bpm}</div>
        <input
          placeholder="Change BPM"
          onChange={e => setBpm(e.target.value)}
        />
        <input
          placeholder="Change beats per measure"
          onChange={e => setBeatsPerMeasure(e.target.value)}
        />
        <button onClick={() => setSounds([click, click])}>Change sounds</button>
      </div>
    </div>
  );
};

export default App;
