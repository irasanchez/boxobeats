import React, { Component } from "react";
import { MorphIcon } from "react-svg-buttons";
import RandomBeatList from "./components/RandomBeatList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "playCircle"
    };
  }

  playButtonHandler = () => {
    this.state.type === "playCircle"
      ? this.setState({ type: "pauseCircle" })
      : this.setState({ type: "playCircle" });
  };
  render() {
    return (
      <div className="App">
        <h1>Box-O-Beats: Beatbox Trainer</h1>
        {this.state.type === "playCircle" ? null : <RandomBeatList />}

        <MorphIcon type={this.state.type} onClick={this.playButtonHandler} />
      </div>
    );
  }
}

export default App;
