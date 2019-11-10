/** @jsx jsx */

import { NavLink } from "react-router-dom";
import { jsx } from "@emotion/core";
import { homeFooter, title, byline, nav, link } from "./homeStyles.js";
/*
 //TODO: make video compilation of beatbox mouths for background
*/
const HomeView = () => {
  return (
    <>
      <h1 css={title}>Box-O-Beats</h1>
      <p css={byline}>a beatbox training app</p>
      <nav css={nav}>
        <NavLink to="/progress" css={link}>
          Progress
        </NavLink>
        <NavLink to="/improv" css={link}>
          Improv
        </NavLink>
        <NavLink to="/focus" css={link}>
          Focus
        </NavLink>
        <NavLink to="/create" css={link}>
          Create
        </NavLink>
      </nav>
      <footer css={homeFooter}>Copyright Ira Sanchez</footer>
    </>
  );
};

export default HomeView;
