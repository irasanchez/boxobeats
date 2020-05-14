import React, { useState } from "react";
import { AppBar, TextField, Typography, Toolbar } from "@material-ui/core";
import { IoMdSearch as SearchIcon } from "react-icons/io";
import { useHistory } from "react-router-dom";

const styles = {
  Header: {
    height: "10vh",
    maxHeight: "10vh",
  },
  h1: { fontSize: "4rem" },
  Toolbar: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 5%",
  },
  form: {
    width: "20%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  color: { color: "white" },
};

function SearchAppBar(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const { push } = useHistory();

  const handleClick = () => {
    localStorage.removeItem("token");
    push("/login");
  };

  const changeHandler = (event) => {
    setSearchQuery(event.target.value); //will not function properly if value is grabbed from state, will skip letters and return searches late
    let current = [];
    let newList = [];

    if (event.target.value !== "") {
      current = props.sounds;
      newList = current.filter((sound) => {
        let name = sound.name.toLowerCase();
        let query = event.target.value.toLowerCase();
        return name.includes(query);
      });
    } else {
      newList = props.sounds;
    }
    props.setFilter(newList);
  };

  return (
    <AppBar position="sticky" style={styles.Header}>
      <Toolbar style={styles.Toolbar}>
        <Typography variant="h1" primary="boxosounds" style={styles.h1}>
          boxosounds
        </Typography>
        <form style={styles.form}>
          <SearchIcon />
          <TextField
            style={styles.color}
            type="text"
            onChange={changeHandler}
            placeholder="Search…"
            inputProps={{ "aria-label": "search", style: styles.color }}
            value={searchQuery}
          />
        </form>
        <button onClick={handleClick}>Sign out</button>
      </Toolbar>
    </AppBar>
  );
}

export default SearchAppBar;
