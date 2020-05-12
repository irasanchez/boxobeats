import React from "react";
import Metronome from "./Metronome";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Practice = props => {
  return (
    <Grid container alignItems="center">
      {props.current.map(sound => (
        <Grid item xs={12}>
          <Link to={`/progress/${sound.id}`}>
            <Typography variant="h3">{sound.name}</Typography>
          </Link>
        </Grid>
      ))}
      <Metronome />
    </Grid>
  );
};

export default Practice;
