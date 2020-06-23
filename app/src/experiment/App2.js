import React, { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Sounds from "./components/Sounds";
import { connect } from "react-redux";
import { getSounds } from "../actions/actions";

const App2 = (props) => {
  useEffect(props.getSounds, []);
  return (
    <div>
      <SearchBar />
      <Sounds />
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
