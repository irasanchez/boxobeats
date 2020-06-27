import React from "react";
import Sound from "./Sound";
import { Grid, Typography, Paper, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const PracticeList = (props) => {
  return (
    <Container>
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
