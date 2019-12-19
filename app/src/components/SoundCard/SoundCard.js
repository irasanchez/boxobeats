import React from "react";
import {
  FlippingCard,
  FlippingCardFront,
  FlippingCardBack
} from "react-ui-cards";
import SoundCardBack from "./SoundCardBack";
import SoundCardFront from "./SoundCardFront";
const SoundCard = ({ beat }) => {
  return (
    <FlippingCard>
      <FlippingCardFront>
        <SoundCardFront beat={beat} />
      </FlippingCardFront>
      <FlippingCardBack>
        <SoundCardBack beat={beat} />
      </FlippingCardBack>
    </FlippingCard>
  );
};

export default SoundCard;
