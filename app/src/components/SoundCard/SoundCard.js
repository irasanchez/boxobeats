/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { soundCard } from "./soundCardStyles";

import SoundCardContent from "./SoundCardContent";
import ProgressBar from "./ProgressBar";

//FIXME: Expanded card style does not work for mobile, works for tablet and desktop though

const SoundCard = props => {
  const { sound, pathname } = props; //using this syntax so I can style the li component properly with {...props}.

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
      <SoundCardContent sound={sound} pathname={pathname} />
    </li>
  );
};

export default SoundCard;
