/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { soundCard } from "./soundCardStyles";

import SoundCardContent from "./SoundCardContent";
import ProgressBar from "./ProgressBar";

//FIXME: Expanded card style does not work for mobile, works for tablet and desktop though

const SoundCard = props => {
  const { sound } = props;

  //TODO: !!! make .moreInfo icon button link expanded card as an overlay Note: you can re-render the soundCard component with different settings in the css prop

  return (
    <li
      id="soundCard"
      css={css`
        ${soundCard}
      `}
      {...props}
    >
      <ProgressBar sound={sound} />
      <SoundCardContent sound={sound} />
    </li>
  );
};

export default SoundCard;
