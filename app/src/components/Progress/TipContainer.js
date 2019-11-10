/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import userData from "../../assets/userData.json";
import { tipsTitle, tipsText } from "./progressStyles";

const TipContainer = props => {
  const { shouldIOpenCard, sound } = props;
  return (
    <aside name="tipContainer" css={shouldIOpenCard}>
      <div>
        <h3 css={tipsTitle}>User Tip:</h3>
        <p css={tipsText}>{sound.tips[0].tip} </p>
      </div>
      <div className="imageContainer">
        <img src={userData.userData[0].avatar} />
        <p>{userData.userData[0].username}</p>
      </div>
    </aside>
  );
};

export default TipContainer;
