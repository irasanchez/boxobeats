/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const app = css`
  margin: 4vh auto;
  max-width: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const global = css`
  html {
    font-size: 62.5%;
  }

  p,
  a {
    font-family: "Roboto", sans-serif;
  }

  h1,
  h2,
  h3 {
    font-family: "Sedgwick Ave Display", cursive;
  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.4rem;
  }
`;
