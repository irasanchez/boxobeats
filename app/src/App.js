import React, { useState } from "react";
import { Route } from "react-router";
import { Popper } from "@material-ui/core";
import beatsData from "./assets/beatsData.json";

import Metronome from "./components/Metronome";
import SoundList from "./components/SoundList";
import Nav from "./components/Nav";
import SearchAppBar from "./components/AppBar";

const App = props => {
  //grab data from json file and set it to state
  //FIXME: Must get data dynamically using axios
  const [beats] = useState(beatsData.beats);
  const [navValue, setNavValue] = useState(""); //idk what this is for but it's used in BottomNavigation

  return (
    <div className="App">
      <SearchAppBar />
      <Popper>
        <Metronome />
      </Popper>
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
      <Nav value={navValue} setValue={setNavValue} />
    </div>
  );
};

export default App;
