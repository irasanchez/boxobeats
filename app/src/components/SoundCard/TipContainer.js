/** @jsx jsx */

import { jsx } from "@emotion/core";
import userData from "../../assets/userData.json";
import { tipsTitle, tipsText } from "./soundCardStyles";

const TipContainer = props => {
  const { shouldIOpenCard, tips } = props;

  const randomUserTipData = tips[Math.floor(Math.random() * tips.length)];

  return (
    <aside name="tipContainer" css={shouldIOpenCard}>
      <div>
        <h3 css={tipsTitle}>User Tip:</h3>
        <p css={tipsText}>{randomUserTipData.tip}</p>
      </div>
      <div className="imageContainer">
        <img src={userData.userData[0].avatar} alt="avatar" />
        <p>{randomUserTipData.user}</p>
      </div>
    </aside>
  );
};

export default TipContainer;
