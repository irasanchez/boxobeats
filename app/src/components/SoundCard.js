import React from "react";
import {
  FlippingCard,
  FlippingCardFront,
  FlippingCardBack
} from "react-ui-cards";

const SoundCard = ({ beat }) => {
  return (
    <FlippingCard>
      <FlippingCardFront>
        <p>{beat.name}</p>
        {/* <SoundCardFront /> */}
      </FlippingCardFront>
      <FlippingCardBack>
        {/* <SoundCardBack /> */}
        <p>{beat.symbol}</p>
      </FlippingCardBack>
    </FlippingCard>
  );
};

export default SoundCard;
