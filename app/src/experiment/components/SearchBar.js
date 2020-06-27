//React
import React, { useState } from "react";
//MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import { gray } from "../../assets/colors";
//Redux
import { connect } from "react-redux";
import { setFilter } from "../../actions/actions";

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: "10vh",
  },
  toolbar: {
    height: "100%",
  },
  search: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    color: "inherit",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState("");

  const changeHandler = (event) => {
    setSearchQuery(event.target.value);
    props.setFilter(event.target.value);
    // ⚠ 👆 will not function properly if value is grabbed from state, will skip letters and return searches late due to state being async
  };

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={changeHandler}
            className={classes.inputInput}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default connect(null, { setFilter })(SearchBar);
