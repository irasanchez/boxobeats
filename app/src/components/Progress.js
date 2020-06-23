import React, { useEffect } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Sound from "./Sound";
import SoundList from "./SoundList";
import { GiMicrophone } from "react-icons/gi";
import { TiPlus } from "react-icons/ti";
import { FaAngleDoubleLeft } from "react-icons/fa";

const Progress = (props) => {
  const styles = {
    View: {
      height: "80vh",
      maxHeight: "80vh",
      width: "100%",
    },
    Panels: {
      height: "100%",
      maxHeight: "100%",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
    },
    Paper: {
      height: "100%",
      width: "100%",
      padding: "20px 5%",
    },
    Flex: { display: "flex", direction: "row" },
    Icons: {
      backgroundColor: "#3F51B5",
      color: "white",
      width: "3rem",
      height: "3rem",
      padding: "2%",
      borderRadius: "50%",
    },
    P: {
      width: "80%",
      padding: "0 2%",
    },
  };

  return (
    <Grid container style={styles.View}>
      <Grid item sm={5} style={styles.Panels}>
        <Paper>
          <SoundList />
        </Paper>
      </Grid>

      <Grid item container sm={7} style={styles.Panels}>
        {
          // *next ⬆ responsive
        }
        <Switch>
          <Route path="/sounds/:id">
            <Paper style={styles.Paper}>
              <Sound />
            </Paper>
          </Route>
          <Route exact path="/sounds">
            <Paper style={styles.Paper}>
              <Grid
                container
                spacing={5}
                direction="column"
                style={styles.Paper} //Paper tured out to have the same settings I needed for the grid to work. decided to re-use rather than rewrite
              >
                <Grid item>
                  <Typography variant="h3">Welcome</Typography>
                </Grid>
                <Grid item container>
                  <FaAngleDoubleLeft style={styles.Icons} />
                  <Typography variant="body1" paragraph style={styles.P}>
                    Please select a sound from the list for more information on
                    that sound.
                  </Typography>
                </Grid>
                <Grid item container>
                  <TiPlus style={styles.Icons} />
                  <Typography variant="body1" paragraph style={styles.P}>
                    If you want to add a sound to your practice session, hit the
                    plus sign.
                  </Typography>
                </Grid>
                <Grid item container>
                  <GiMicrophone style={styles.Icons} />
                  <Typography variant="body1" paragraph style={styles.P}>
                    When you're ready to practice, head over to the practice
                    view using the microphone icon.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Progress;
