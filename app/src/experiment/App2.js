// React
import React, { useEffect } from "react";
// Components
import SearchBar from "./components/SearchBar";
import Sounds from "./components/Sounds";
//MUI
import { Container } from "@material-ui/core";
// Redux
import { connect } from "react-redux";
import { getSounds } from "../actions/actions";

const App2 = (props) => {
  useEffect(props.getSounds, []);
  return (
    <div>
      <SearchBar />
      <Container>
        <Sounds />
      </Container>
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
