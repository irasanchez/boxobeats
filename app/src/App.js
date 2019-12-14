/** @jsx jsx */
//Do not move this ^
//dependency imports
import { Global, jsx } from "@emotion/core";
import { useState } from "react";
import { Route, withRouter } from "react-router-dom";

//FIXME: hardcoded data to later be removed after I make some sort of backend
import beatsData from "./assets/beatsData.json";

const App = props => {
  //grab data from json file and set it to state
  //FIXME: Must get data dynamically using axios
  const [beats] = useState(beatsData.beats);

  return <div></div>;
};

export default withRouter(App); //withRouter gives App access to location prop. if <Component /> is not inside of a <Route /> then it doesn't have access to location, match, etc.
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import axios from "axios";
import { Route } from "react-router";
//import beatsURL from env

export default App = () => {
  const beatsURL = process.env.REACT_APP_BEATS_URL;
  //current BPM
  const [BPM, setBPM] = useState(0);
  //beatsData
  const [beats, setBeats] = useState([]);

  //GET request to get all the beats from the backend
  const getData = () => {
    axios
      .get(beatsURL)
      .then(response => setBeats(response)) //make response more specific
      .catch(error => console.log(error));
  };

  return (
    <Header toggler={setSettingsVisibility} />

    // <Route exact path="/" render={(props)=>{<ProgressView beats={beats} />}} />
    // <Route exact path="/improv" render={(props)=>{<ImprovView beats={beats} />}} />
    // <Route exact path="/create" render={(props)=>{<CreateView beats={beats} />}} />
    // <Route exact path="/focus" render={(props)=>{<FocusView beats={beats} />}} />

    // <Nav />
  );
};
