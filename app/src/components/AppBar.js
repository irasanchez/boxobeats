import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { IoMdSearch as SearchIcon } from "react-icons/io";

export default function SearchAppBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Progress
        </Typography>
        <div>
          <div>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
