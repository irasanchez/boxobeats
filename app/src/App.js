/** @jsx jsx */
import { Global, jsx } from "@emotion/core";
import { useState } from "react";
import { Route } from "react-router-dom";
//FIXME: hardcoded data to later be removed after I make some sort of backend
import beatsData from "./assets/beatsData.json";
//component imports
import HomeView from "./components/Home/HomeView";
import ProgressView from "./components/Progress/ProgressView";
import CreateView from "./components/Create/CreateView";
import FocusView from "./components/Focus/FocusView";
import ImprovView from "./components/Improv/ImprovView";
import BottomNav from "./components/BottomNav/BottomNav";

//styles
import { app, global } from "./AppStyles.js";

//NOTE: beatBud is the mascot for the app

const App = props => {
  //grab data from json file and set it to state
  const [beats] = useState(beatsData.beats);

  return (
    <div css={app}>
      <Global styles={global} />
      {/* HOME VIEW */}
      <Route exact path="/" render={() => <HomeView {...props} />} />

      {/* PROGRESS VIEW */}
      <Route
        path="/progress"
        render={props => (
          <ProgressView
            beats={beats}
            onEnter={() => {
              console.log("progress view");
            }}
            match={props.match}
            history={props.history}
            location={props.location}
          />
        )}
      />

      {/* CREATE VIEW */}
      <Route path="/create" render={() => <CreateView beats={beats} />} />

      {/* IMPROV VIEW */}
      <Route
        path="/improv"
        render={props => (
          <ImprovView
            beats={beats}
            match={props.match}
            history={props.history}
            location={props.location}
          />
        )}
        onEnter={() => {
          console.log("progress view");
        }}
      />

      {/* FOCUS VIEW */}
      <Route path="/create" render={() => <FocusView beats={beats} />} />

      <BottomNav />
    </div>
  );
};

export default App;
