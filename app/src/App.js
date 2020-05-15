import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router";
import axios from "axios";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Progress from "./components/Progress";
import Practice from "./components/Practice";
import Nav from "./components/Nav";
import SearchAppBar from "./components/AppBar";
import { CssBaseline, Container } from "@material-ui/core";
import { axiosWithAuth } from "./components/auth/axiosWithAuth";
import { connect } from "react-redux";
import { getSounds } from "./actions/actions";
const apiUrl = process.env.REACT_APP_API_URL;

const styles = {
  Container: {
    height: "100vh",
    width: "100vw",
    minWidth: "100vw",
    maxHeight: "100vh",
    overflowY: "hidden",
    margin: "0 auto",
    padding: "0",
  },
};

const App = (props) => {
  const [navValue, setNavValue] = useState(""); //for mui nav

  useEffect(props.getSounds, []);

  return (
    <>
      <CssBaseline />
      <Container className="App" style={styles.Container}>
        <SearchAppBar />

        <Redirect from="/" to="/sounds" />

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/sounds">
          <Progress sounds={props.filtered} />
        </Route>
        <PrivateRoute path="/practice">
          <Practice />
        </PrivateRoute>

        <Nav value={navValue} setValue={setNavValue} />
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    sounds: state.filtered,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getSounds })(App);
