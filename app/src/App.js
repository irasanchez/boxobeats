/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import React, { useState } from "react";
import { Route } from "react-router-dom";
//FIXME: hardcoded data to later be removed after I make some sort of backend
//FIXME: Remove font awesome stuff from package.json and index.html
import beatsData from "./assets/beatsData.json";
//component imports
import HomeView from "./components/Home/HomeView";
import ProgressView from "./components/Progress/ProgressView";
import CreateView from "./components/Create/CreateView";
import FocusView from "./components/Focus/FocusView";
import ImprovView from "./components/Improv/ImprovView";

//styles
import { app, global } from "./AppStyles.js";

//NOTE: beatBud is the mascot for the app

const App = props => {
  //grab data from json file and set it to state
  const [beats, setBeats] = useState(beatsData.beats);

  return (
    <div css={app}>
      <Global styles={global} />
      {/* HOME VIEW */}
      <Route exact path="/" render={() => <HomeView {...props} />} />

      {/* PROGRESS VIEW */}
      <Route path="/progress" render={() => <ProgressView beats={beats} />} />

      {/* CREATE VIEW */}
      <Route path="/create" render={() => <CreateView beats={beats} />} />

      {/* IMPROV VIEW */}
      <Route path="/create" render={() => <ImprovView beats={beats} />} />

      {/* FOCUS VIEW */}
      <Route path="/create" render={() => <FocusView beats={beats} />} />
    </div>
  );
};

export default App;
