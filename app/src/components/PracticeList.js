import React from "react";
import Sound from "./Sound";
import { Grid, Typography, Paper, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "96%",
    height: "70%",
    margin: "auto 0",
  },
}));

const PracticeList = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container className={classes.grid}>
      {props.practiceSet.map((sound) => (
        <Sound sound={sound} key={sound.id} />
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    practiceSet: state.practiceSet,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(PracticeList);
