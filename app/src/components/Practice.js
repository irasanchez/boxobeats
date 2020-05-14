import React from "react";
import Metronome from "./Metronome";
import { Grid, Typography, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Practice = (props) => {
  const styles = {
    View: {
      height: "100%",
      maxHeight: "80vh",
    },
    Grid: { height: "100%", display: "flex" },
    GridItem: {
      width: "50%",
    },
  };

  return (
    <Paper style={styles.View}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-around"
        //style={styles.Grid}
      >
        {props.practiceSet.map((sound) => (
          <Grid style={styles.GridItem} item xs={12}>
            <Link to={`/sounds/${sound.id}`}>
              <Typography variant="h3">{sound.name}</Typography>
            </Link>
          </Grid>
        ))}
        <Metronome />
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    practiceSet: state.practiceSet,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(Practice);
