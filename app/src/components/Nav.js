/** @jsx jsx */
import { jsx } from "@emotion/core";

import { NavLink } from "react-router-dom";

// icons
// sizes have to be put on the size prop. default is 1em. rem doesn't appear to work.
import { FaRegMap, FaRegLightbulb, FaHammer, FaRegEye } from "react-icons/fa";
import { GiMetronome } from "react-icons/gi";

const Nav = props => {
  return (
    <footer>
      <nav>
        <NavLink to="/progress">
          <FaRegMap />
        </NavLink>
        <NavLink to="/improv">
          <FaRegLightbulb />
        </NavLink>

        <GiMetronome />

        <NavLink to="/create">
          <FaHammer />
        </NavLink>

        <NavLink to="/focus">
          <FaRegEye />
        </NavLink>
      </nav>
    </footer>
  );
};

export default Nav;
