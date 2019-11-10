/** @jsx jsx */
import { css } from "@emotion/core";

// COLORS
/* Inspired by https://dribbble.com/shots/3771065-Beatbox-Faces
 */

//Licorice (black)
export const mainBg = `rgba(21, 21, 21, 1)`;
//Silver
export const textColor = `#c0c0c0`;
//Old Burgundy
export const secondaryBg = `rgba(70, 36, 52, 1)`;
//Metallic Seaweed
export const accentColorBlue = `rgba(20, 128, 138, 1)`;
//Shamrock Green
export const accentColorGreen = `rgba(0, 158, 96, 1)`;
// white-like color, idk the name
export const highlight = `rgba(232, 232, 232, 1)`;

//POSITIONING AND ALIGNMENT
export const center = `justify-content: center; align-items: center;`;
export const viewSize = `width: 90%;
margin: 0 auto;`;

//DETAILS
export const boxShadow = `-webkit-box-shadow: 0px 3px 5px 0px ${mainBg};
-moz-box-shadow:0px 5px 0px ${mainBg};
box-shadow: 0px 3px 5px 0px ${mainBg};`;

//DYNAMISM
export const hideThisElement = css`
  display: none;
`;
