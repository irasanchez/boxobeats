/** @jsx jsx */
import React from "react"; //Do not delete even if you get a warning about not "using" it or it will break the app
import { NavLink } from "react-router-dom";
import { jsx } from "@emotion/core";
import { homeFooter, title, byline, nav, link } from "./homeStyles.js";
/*
 //TODO: ! make video compilation of beatbox mouths for background
*/
const HomeView = () => {
  return (
    <>
      <h1 css={title}>Box-O-Beats</h1>
      <p css={byline}>
        Welcome to Box-o-Beats, a beatbox training app! <br />
        <br />I plan to use this app to help me hone my skills, but I also
        needed a portfolio project. So why not feed two birds with one scone?
        <br />
        <br />
        Ad of right now, there are 4 modes to assist you in your practice.
        <br />
        <br />
        Get a birds eye view with progress.
        <br />
        <br />
        Practice random sounds rather than relying on the same ones again and
        again in Improv.
        <br />
        <br />
        Focus is where you work on improving the details of one sound.
        <br />
        <br />
        Create is when you play with uncharted territory and see if you can get
        your body to do 2 random sounds at the same time.
        <br />
        <br />
        I hope you enjoy.
        <br />
        <br />
        Tois, Dus, Un, Beatbox!
      </p>
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
