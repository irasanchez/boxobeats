import React, { useState } from "react";
import beatsData from "./assets/beatsData.json";

import Metronome from "./components/Metronome";

const App = props => {
  //grab data from json file and set it to state
  //FIXME: Must get data dynamically using axios
  const [beats] = useState(beatsData.beats);

  return (
    <div>
      <div>
        <Metronome />
      </div>
    </div>
  );
};

export default App;
