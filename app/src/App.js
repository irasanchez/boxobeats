import React, { Component } from "react";
import RandomBeatList from "./components/RandomBeatList/RandomBeatList";
import PlayButton from "./components/buttons/PlayButton/PlayButton";
import Box from "./components/MainBox/Box";

import "./App.css";

import TotalBeatList from "./components/TotalBeatList/TotalBeatList";
import Metronome from "./components/Metronome/Metronome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
  }

  handlePlayingToggle = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }));
  };

  render() {
    return (
      <div className="App">
        <p>
          Push play to see a random list of sounds to incorporate into your
          practice.
        </p>
        {this.state.isPlaying ? <RandomBeatList /> : null}
        <Box isPlaying={this.state.isPlaying} />
        <PlayButton
          handlePlayingToggle={this.handlePlayingToggle}
          isPlaying={this.state.isPlaying}
        />
        <Metronome />
      </div>
    );
  }
}

export default App;
