import React, { useState } from "react";
import { Route } from "react-router";

import axios from "axios";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Progress from "./components/Progress";
import Practice from "./components/Practice";
import Nav from "./components/Nav";
import SearchAppBar from "./components/AppBar";

import { CssBaseline, Container } from "@material-ui/core";
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
  //grab data from json file and set it to state
  //FIXME: Must get data dynamically using axios
  const [beats, setBeats] = useState([]);
  const [filtered, setFilter] = useState([]); //used to enable search
  const [navValue, setNavValue] = useState("");
  const [current, setCurrent] = useState([]); //sounds to send to practice page

  const addToCurrentSet = (sound) => {
    alert(`Adding ${sound.name} to the practice list.`);
    setCurrent([...current, sound]);
  };

  const getSounds = () => {
    axios.get(`${apiUrl}/sounds`);
  };

  return (
    <>
      <CssBaseline />
      <Container className="App" style={styles.Container}>
        <SearchAppBar beats={beats} setFilter={setFilter} />

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/progress">
          <Progress beats={filtered} setCurrent={addToCurrentSet} />
        </Route>
        <Route path="/practice">
          <Practice beats={beats} current={current} />
        </Route>

        <Nav value={navValue} setValue={setNavValue} />
      </Container>
    </>
  );
};

export default App;
