import React from "react";
//MUI
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
import { purple } from "../assets/colors";
import { Toolbar } from "@material-ui/core";
//Metronome
import { useMetronome } from "react-metronome-hook";
//Assets
import click from "../assets/click.wav";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(8),
    width: "80%",
    maxWidth: "30rem",
    alignSelf: "center",
    height: "10rem",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  slider: {
    marginTop: theme.spacing(3),
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
      <Slider
        aria-labelledby="metronome-bpm-slider"
        aria-valuetext={`${bpm}`}
        className={classes.slider}
        defaultValue={120}
        max={300}
        onChange={handleChange}
        step={4}
        valueLabelDisplay="on"
      />
      <Button
        color="primary"
        onClick={isTicking ? stopMetronome : startMetronome}
        size="large"
        variant="contained"
      >
        {isTicking ? "Stop" : "Start"}
      </Button>
    </Card>
  );
};

export default Metronome;
