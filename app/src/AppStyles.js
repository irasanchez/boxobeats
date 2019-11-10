/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { mainBg, textColor, accentColor } from "./assets/cssVariables";

export const app = css`
  margin: 0 auto;
  padding: 4vh 0;
  max-width: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${mainBg};
`;

export const global = css`
  html {
    font-size: 62.5%;
    color: ${textColor};
  }

  p,
  a {
    font-family: "Roboto", sans-serif;
  }

  h1,
  h2,
  h3 {
    font-family: "Sedgwick Ave Display", cursive;
    color: ${accentColor};
  }

  h1 {
    font-size: 3.6rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.4rem;
  }
`;
