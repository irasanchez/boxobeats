import React from "react";
import { useMetronome } from "react-metronome-hook";
import click from "../assets/click.wav";
import { Toolbar } from "@material-ui/core";
import {
  Card,
  Button,
  Drawer,
  Hidden,
  IconButton,
  TextField,
  Typography,
  Slider,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(8),
  },
}));
const Metronome = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    startMetronome,
    isTicking,
    stopMetronome,
    bpm,
    setBpm,
    setBeatsPerMeasure,
    setSounds,
  } = useMetronome(120, 4, [click, click]);

  const handleChange = (e, newValue) => {
    setBpm(newValue);
  };
  return (
    <Card className={classes.card}>
      <Typography>BPM: {bpm}</Typography>
      {/* <input placeholder="Change BPM" onChange={handleChange} /> */}
      <Slider
        aria-labelledby="metronome-bpm-slider"
        max={300}
        step={4}
        valueLabelDisplay="off"
        onChange={handleChange}
        aria-valuetext={`${bpm}`}
      />
      <Button
        onClick={isTicking ? stopMetronome : startMetronome}
        variant="contained"
      >
        {isTicking ? "Stop" : "Start"}
      </Button>
    </Card>
  );
};

export default Metronome;
