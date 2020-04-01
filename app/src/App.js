import React, { useState } from "react";
import { Route } from "react-router";

import beatsData from "./assets/beatsData.json";

import Progress from "./components/Progress";
import Metronome from "./components/Metronome";
import Practice from "./components/Practice";
import Nav from "./components/Nav";
import SearchAppBar from "./components/AppBar";

import { CssBaseline, Container } from "@material-ui/core";

const styles = {
  Container: {
    height: "100vh",
    width: "100vw",
    minWidth: "100vw",
    maxHeight: "100vh",
    overflowY: "hidden",
    margin: "0 auto",
    padding: "0"
  }
};

const App = props => {
  //grab data from json file and set it to state
  //FIXME: Must get data dynamically using axios
  const [beats, setBeats] = useState(beatsData.beats);
  const [filtered, setFilter] = useState(beatsData.beats);
  const [navValue, setNavValue] = useState(""); //idk what this is for but it's used in BottomNavigation

  return (
    <>
      <CssBaseline />
      <Container className="App" style={styles.Container}>
        <SearchAppBar beats={beats} setFilter={setFilter} />
        <Route path="/progress">
          <Progress beats={filtered} />
        </Route>
        <Route path="/practice">
          <Practice beats={filtered} />
        </Route>

        {/* <Metronome /> */}
        <Nav value={navValue} setValue={setNavValue} />
      </Container>
    </>
  );
};

export default App;
