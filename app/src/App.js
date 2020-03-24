import React, { useState } from "react";
import { Route } from "react-router";
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
      <Route path="/progress">
        <SoundList beats={beats} />
      </Route>
      <Route path="/focus">
        <SoundList beats={beats} />
      </Route>
      <Route path="/freestyle">
        <SoundList beats={beats} />
      </Route>
      <Route path="/create">
        <SoundList beats={beats} />
      </Route>
      <Nav />
    </div>
  );
};

export default App;
