import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { IoMdSearch as SearchIcon } from "react-icons/io";

export default function SearchAppBar(props) {
  const styles = {
    Header: {
      height: "10vh",
      maxHeight: "10vh"
    }
  };
  return (
    <AppBar position="sticky" style={styles.Header}>
      <Toolbar>
        <Typography variant="h1" primary="boxobeats">
          boxobeats
        </Typography>
        <div>
          <SearchIcon />
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
