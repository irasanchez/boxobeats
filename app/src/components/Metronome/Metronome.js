import React, { Component } from "react";
import click from "../../assets/click.wav";

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };
    this.click = new Audio(click);
  }

  handleBpmChange = event => {
    const bpm = event.target.value;

    if (this.state.playing) {
      // Stop the old timer and start a new one
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

      // Set the new BPM, and reset the beat counter
      this.setState({
        count: 0,
        bpm
      });
    } else {
      // Otherwise just update the BPM
      this.setState({ bpm });
    }
  };

  startStop = () => {
    if (this.state.playing) {
      //stop the timer
      clearInterval(this.timer);
      this.setState({ playing: false });
    } else {
      //Start a timer with the current BPM
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
      this.setState(
        {
          count: 0,
          playing: true
        },
        this.playClick
      );
    }
  };

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;

    //first beat sounds different than the rest
    //TODO: I need to add a second sound to this. For now, it's always going to sound the same.
    if (count % beatsPerMeasure === 0) {
      this.click.play();
    } else {
      this.click.play();
    }
    //keep track of the beat we're on
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };
  render() {
    const { playing, bpm } = this.state;

    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={this.handleBpmChange}
          />
        </div>
        <button onClick={this.startStop}>{playing ? "Stop" : "Start"}</button>
      </div>
    );
  }
}

export default Metronome;
