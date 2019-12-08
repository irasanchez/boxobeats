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
