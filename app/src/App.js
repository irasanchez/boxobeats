/** @jsx jsx */
//Do not move this ^
//dependency imports
import { Global, jsx } from "@emotion/core";
import { useState } from "react";
import { Route, withRouter } from "react-router-dom";

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
  //FIXME: Must get data dynamically using axios
  const [beats] = useState(beatsData.beats);

  return (
    <div css={app}>
      <Global styles={global} />
      {/* HOME VIEW */}
      <Route
        exact
        path="/"
        render={props => (
          <HomeView
            match={props.match}
            history={props.history}
            location={props.location}
          />
        )}
      />

      {/* PROGRESS VIEW */}
      <Route
        path="/progress"
        render={props => (
          <ProgressView
            beats={beats}
            match={props.match}
            history={props.history}
            location={props.location}
          />
        )}
      />

      {/* CREATE VIEW */}
      <Route
        path="/create"
        render={() => (
          <CreateView
            beats={beats}
            match={props.match}
            history={props.history}
            location={props.location}
          />
        )}
      />

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
      />

      {/* FOCUS VIEW */}
      <Route path="/focus" render={() => <FocusView beats={beats} />} />

      {props.location.pathname !== "/" && <BottomNav />}
    </div>
  );
};

export default withRouter(App); //withRouter gives App access to location prop. if <Component /> is not inside of a <Route /> then it doesn't have access to location, match, etc.
