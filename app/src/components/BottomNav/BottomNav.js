import React from "react";
import { FaRegMap, FaRegLightbulb, FaHammer, FaRegEye } from "react-icons/fa";
import style from "./bottomNav.module.css";

const BottomNav = props => {
  const { bottomNav } = style;
  return (
    <footer className={bottomNav}>
      <nav>
        <FaRegMap />
        <FaRegLightbulb />
        <FaHammer />
        <FaRegEye />
      </nav>
    </footer>
  );
};

export default BottomNav;
