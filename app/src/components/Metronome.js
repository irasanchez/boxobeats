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
import { purple } from "../assets/colors";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(8),
    width: "80%",
    maxWidth: "20rem",
    alignSelf: "center",
    height: "8rem",
    padding: theme.spacing(2),
  },
  button: {
    color: theme.palette.getContrastText(purple.main),
    backgroundColor: purple.main,
    // "&:hover": {
    //   backgroundColor: purple.dark,
    // },
    // TODO: fix this button styling so that the colors work properly in every state
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
        className={classes.button}
        onClick={isTicking ? stopMetronome : startMetronome}
        variant="contained"
        size="large"
      >
        {isTicking ? "Stop" : "Start"}
      </Button>
    </Card>
  );
};

export default Metronome;
