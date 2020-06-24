// React
import React, { useEffect } from "react";
// Components
import ListView from "./views/ListView";
import PracticeView from "./views/PracticeView";
// Redux
import { connect } from "react-redux";
import { getSounds } from "../actions/actions";
//React Router
import { Route } from "react-router";

const App2 = (props) => {
  useEffect(props.getSounds, []);
  return (
    <div style={{ height: "100vh" }}>
      <Route path="/sounds">
        <ListView />
      </Route>
      <Route exact path="/">
        <PracticeView />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sounds: state.filtered,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getSounds })(App2);
