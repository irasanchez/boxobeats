import React from "react";
import Metronome from "./Metronome";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Practice = (props) => {
  return (
    <Grid container alignItems="center">
      {props.practiceSet.map((sound) => (
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

const mapStateToProps = (state) => {
  return {
    practiceSet: state.practiceSet,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(Practice);
