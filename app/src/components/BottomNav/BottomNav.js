import React from "react";
import { FaRegMap, FaRegLightbulb, FaHammer, FaRegEye } from "react-icons/fa";
import style from "./bottomNav.module.css";

const BottomNav = props => {
  const { bottomNav, icon1, icon2, icon3, icon4, icons } = style;
  return (
    <footer className={bottomNav}>
      <nav>
        <FaRegMap id={icon1} className={icons} />
        <FaRegLightbulb id={icon2} className={icons} />
        <FaHammer id={icon3} className={icons} />
        <FaRegEye id={icon4} className={icons} />
      </nav>
    </footer>
  );
};

export default BottomNav;
