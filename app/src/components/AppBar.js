import React, { useState } from "react";
import { AppBar, TextField, Typography, Toolbar } from "@material-ui/core";
import { IoMdSearch as SearchIcon } from "react-icons/io";

const styles = {
  Header: {
    height: "10vh",
    maxHeight: "10vh"
  },
  color: { color: "white" }
};

export default function SearchAppBar(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const changeHandler = event => {
    setSearchQuery(event.target.value); //will not function properly if value is grabbed from state, will skip letters and return searches late
    let current = [];
    let newList = [];

    if (event.target.value !== "") {
      current = props.beats;
      newList = current.filter(sound => {
        let name = sound.name.toLowerCase();
        let query = event.target.value.toLowerCase();
        return name.includes(query);
      });
    } else {
      newList = props.beats;
    }
    console.log(newList);
    props.setFilter(newList);
  };

  return (
    <AppBar position="sticky" style={styles.Header}>
      <Toolbar>
        <Typography variant="h1" primary="boxobeats">
          boxobeats
        </Typography>
        <form>
          <SearchIcon />
          <TextField
            style={styles.color}
            type="text"
            onChange={changeHandler}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchQuery}
          />
        </form>
      </Toolbar>
    </AppBar>
  );
}
