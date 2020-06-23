//React
import React, { useState } from "react";
//MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { gray } from "../../assets/colors";
//Redux
import { connect } from "react-redux";
import { setFilter } from "../../actions/actions";

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const changeHandler = (event) => {
    setSearchQuery(event.target.value);
    props.setFilter(event.target.value);
    // ⚠ 👆 will not function properly if value is grabbed from state, will skip letters and return searches late due to state being async
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <div>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={changeHandler}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default connect(null, { setFilter })(SearchBar);
