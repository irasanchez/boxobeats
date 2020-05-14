import React, { useState } from "react";
import { Route } from "react-router";

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
  const [filtered, setFilter] = useState([]); //used to enable search
  const [navValue, setNavValue] = useState("");

  const getSounds = () => {
    axiosWithAuth()
      .get(`${apiUrl}/sounds`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <CssBaseline />
      <Container className="App" style={styles.Container}>
        <SearchAppBar setFilter={setFilter} />

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/progress">
          <Progress sounds={filtered} />
        </PrivateRoute>
        <PrivateRoute path="/practice">
          <Practice />
        </PrivateRoute>

        <Nav value={navValue} setValue={setNavValue} />
      </Container>
    </>
  );
};

export default App;
