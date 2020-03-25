import React, { useState } from "react";
import { Route } from "react-router";
import beatsData from "./assets/beatsData.json";

import Create from "./components/Create";
import Focus from "./components/Focus";
import Freestyle from "./components/Freestyle";
import Progress from "./components/Progress";
import Metronome from "./components/Metronome";
import SoundList from "./components/SoundList";
import Nav from "./components/Nav";
import SearchAppBar from "./components/AppBar";

import { CssBaseline } from "@material-ui/core";

const App = props => {
  //grab data from json file and set it to state
  //FIXME: Must get data dynamically using axios
  const [beats] = useState(beatsData.beats);
  const [navValue, setNavValue] = useState(""); //idk what this is for but it's used in BottomNavigation

  return (
    <div className="App">
      <CssBaseline />

      <Route path="/progress">
        <SearchAppBar {...props} />
        <Progress>
          <SoundList beats={beats} soundsNeeded={beats.length} />
        </Progress>
      </Route>
      <Route path="/focus">
        <SearchAppBar {...props} />
        <Focus>
          <SoundList beats={beats} soundsNeeded={1} />
        </Focus>
      </Route>
      <Route path="/freestyle">
        <SearchAppBar {...props} />
        <Freestyle>
          <SoundList beats={beats} soundsNeeded={5} />
        </Freestyle>
      </Route>
      <Route path="/create">
        <SearchAppBar {...props} />
        <Create>
          <SoundList beats={beats} soundsNeeded={2} />
        </Create>
      </Route>
      <Metronome />
      <Nav value={navValue} setValue={setNavValue} />
    </div>
  );
};

export default App;
