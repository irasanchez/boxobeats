import React from "react";
import { NavLink } from "react-router-dom";
import style from "./home.module.css";
/*
 //TODO: make video compilation of beatbox mouths for background
*/
const HomeView = () => {
  return (
    <>
      <h1>Box-O-Beats</h1>
      <p>a beatbox training app</p>
      <nav className={style.nav}>
        <NavLink to="/progress">Progress</NavLink>
        <NavLink to="/improv">Improv</NavLink>
        <NavLink to="/focus">Focus</NavLink>
        <NavLink to="/create">Create</NavLink>
      </nav>
      <footer>Copyright Ira Sanchez</footer>
    </>
  );
};

export default HomeView;
