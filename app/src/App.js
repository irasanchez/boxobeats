import React, { useState } from "react";
import beatsData from "./assets/beatsData.json";

import ProgressView from "./components/Progress/ProgressView";
import CreateView from "./components/Create/CreateView";

import "./App.css";

//NOTE: beatBud is the mascot for the app

const App = () => {
  //grab data from json file and set it to state
  const [beats, setBeats] = useState(beatsData.beats);

  return (
    <div className="App">
      <ProgressView beats={beats} />
      <CreateView beats={beats} />
    </div>
  );
};

export default App;
