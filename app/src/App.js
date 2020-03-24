import React, { useState } from "react";
import beatsData from "./assets/beatsData.json";

import Metronome from "./components/Metronome";
import SoundList from "./components/SoundList";
import Nav from "./components/Nav";

const App = props => {
  //grab data from json file and set it to state
  //FIXME: Must get data dynamically using axios
  const [beats] = useState(beatsData.beats);

  return (
    <div className="App">
      <Metronome />
      <SoundList beats={beats} />
      <Nav />
    </div>
  );
};

export default App;
