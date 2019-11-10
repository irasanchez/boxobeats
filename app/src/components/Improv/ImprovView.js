/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import BottomNav from "../BottomNav/BottomNav";
import { improvView } from "./improvStyles";

const ImprovView = props => {
  return (
    <div css={improvView}>
      <p>
        Use these random sounds in your freestyle. If you're comfortable or
        bored, it's time for new sounds.
      </p>
      <BottomNav />
    </div>
  );
};

export default ImprovView;
