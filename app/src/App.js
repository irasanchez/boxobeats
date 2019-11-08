import React, { useState } from "react";
import beatsData from "./assets/beatsData.json";

import ProgressView from "./components/Progress/ProgressView";

const App = () => {
  //grab data from json file and set it to state
  const [beats, setBeats] = useState(beatsData.beats);

  return (
    <div>
      <ProgressView beats={beats} />
    </div>
  );
};

export default App;
