import React, { useState } from "react";
import { iconTypes, MorphIcon } from "react-svg-buttons";
import RandomBeatList from "./components/RandomBeatList";
import "./App.css";

function App() {
  const [type, setType] = useState("playCircle");
  const playButtonHandler = () => {
    type === "playCircle" ? setType("pauseCircle") : setType("playCircle");
  };
  return (
    <div className="App">
      <RandomBeatList />
      <MorphIcon type={type} onClick={playButtonHandler} />
    </div>
  );
}

export default App;
