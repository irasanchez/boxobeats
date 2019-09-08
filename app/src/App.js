import React, { Component } from "react";
import RandomBeatList from "./components/RandomBeatList";
import PlayButton from "./components/buttons/PlayButton/PlayButton";
import Box from "./components/MainBox/Box";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: true
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
        <h1>Box-O-Beats: Beatbox Trainer</h1>
        {this.state.isPlaying ? <RandomBeatList /> : null}
        <Box isPlaying={this.state.isPlaying} />
        <PlayButton
          handlePlayingToggle={this.handlePlayingToggle}
          isPlaying={this.state.isPlaying}
        />
      </div>
    );
  }
}

export default App;
