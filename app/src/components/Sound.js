import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import Video from "./Video";
import { TiPlus } from "react-icons/ti";
import { useParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addToPractice, getSoundByID } from "../actions/actions";

const styles = {
  SoundCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "0 5%",
    width: "100%",
    height: "100%",
    header: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
};

const Sound = (props) => {
  const { currentSound } = props;
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    props.getSoundByID(id);
  }, [id]);

  return currentSound ? (
    <div style={styles.SoundCard}>
      <header style={styles.SoundCard.header}>
        <Typography
          primary={currentSound.name}
          variant="h2"
          style={{ textTransform: "capitalize" }}
        >
          {currentSound.name}
        </Typography>
        <Button onClick={() => props.addToPractice(currentSound)}>
          <TiPlus />
          Add to Practice
        </Button>
      </header>

      {pathname.includes("/progress") && currentSound.tutorial ? (
        <section>
          <Typography variant="h3">Tutorial:</Typography>
          <Video youtubeID={currentSound.tutorial} />
        </section>
      ) : null}

      <Typography>
        {currentSound.tips ? (
          <section>
            <Typography variant="h3">Tips:</Typography>

            <Typography>
              <span>💡</span>
              {` Tip: ${
                currentSound.tips[
                  Math.floor(Math.random() * currentSound.tips.length)
                ]
              }`}
            </Typography>
          </section>
        ) : null}
      </Typography>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    sounds: state.sounds,
    error: state.error,
    currentSound: state.currentSound,
  };
};

export default connect(mapStateToProps, { addToPractice, getSoundByID })(Sound);
