/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import SoundCardContent from "./SoundCardContent";
import ProgressBar from "./ProgressBar";

import { secondaryBg, textColor } from "../../assets/cssVariables";
//FIXME: Expanded card style does not work for mobile, works for tablet and desktop though

const SoundCard = props => {
  const { sound, pathname } = props; //using this syntax so I can style the li component properly with {...props}.

  //TODO: !!! make .moreInfo icon button link expanded card as an overlay Note: you can re-render the soundCard component with different settings in the css prop

  return (
    <li
      id="soundCard"
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: ${secondaryBg};
        margin: 20px 0;
        padding: 20px 0;
        border-radius: 25px;
        box-shadow: 0 1.5px 7px ${textColor};
      `}
      {...props}
    >
      <ProgressBar sound={sound} />
      <SoundCardContent sound={sound} pathname={pathname} />
    </li>
  );
};

export default SoundCard;
