import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { IoMdSearch as SearchIcon } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function SearchAppBar(props) {
  const { pathname } = useLocation();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h3">
          {pathname === "/progress"
            ? "Progress"
            : pathname === "/focus"
            ? "Focus"
            : pathname === "/create"
            ? "Create"
            : pathname === "/freestyle"
            ? "Freestyle"
            : null}
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
