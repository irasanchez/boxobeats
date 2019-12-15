import React from "react";
import {
  FlippingCard,
  FlippingCardFront,
  FlippingCardBack
} from "react-ui-cards";
import SoundCardBack from "./SoundCardBack";

const SoundCard = ({ beat }) => {
  return (
    <FlippingCard>
      <FlippingCardFront>
        <p>{beat.name}</p>
        {/* <SoundCardFront /> */}
      </FlippingCardFront>
      <FlippingCardBack>
        <SoundCardBack beat={beat} />
      </FlippingCardBack>
    </FlippingCard>
  );
};

export default SoundCard;
