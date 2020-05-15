import React, { useState } from "react";
import {
  AppBar,
  TextField,
  Typography,
  Toolbar,
  Button,
} from "@material-ui/core";
import { IoMdSearch as SearchIcon } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setFilter, toggleAuth } from "../actions/actions";
import { Link } from "react-router-dom";

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
    props.toggleAuth();
    push("/");
  };

  const changeHandler = (event) => {
    setSearchQuery(event.target.value);
    props.setFilter(event.target.value);
    // ⚠ 👆 will not function properly if value is grabbed from state, will skip letters and return searches late due to state being async
  };

  return (
    <AppBar position="sticky" style={styles.Header}>
      <Toolbar style={styles.Toolbar}>
        <Typography variant="h1" primary="boxosounds" style={styles.h1}>
          <Link to="/sounds">boxobeats</Link>
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
        <Button onClick={handleClick}>Sign out</Button>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, { setFilter, toggleAuth })(
  SearchAppBar
);
