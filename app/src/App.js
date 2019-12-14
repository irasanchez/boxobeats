// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
//import dependencies and hooks
import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import axios from "axios";
import { Route, withRouter } from "react-router";

//import components
import Progress from "./components/Views/Progress";
import Header from "./components/Header";
import Nav from "./components/Nav";

const App = props => {
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

  useEffect(getData, []);

  return (
    <div>
      <Header {...props} />

      <Route exact path="/" render={props => <Progress beats={beats} />} />

      {/* <Route
        exact
        path="/improv"
        render={props => {
          <Improv beats={beats} />;
        }}
      />
      
      <Route
        exact
        path="/create"
        render={props => {
          <Create beats={beats} />;
        }}
      />
      
      <Route
        exact
        path="/focus"
        render={props => {
          <Focus beats={beats} />;
        }}
      />

      <Route
        exact
        path="/focus"
        render={props => {
          <Focus beats={beats} />;
        }}
      />

      <Route
        exact
        path="/account"
        render={props => {
          <Account />;
        }}
      />
    */}
      <Nav />
    </div>
  );
};

//withRouter gives App access to location prop. if <Component /> is not inside of a <Route /> then it doesn't have access to location, match, etc.
export default withRouter(App);
