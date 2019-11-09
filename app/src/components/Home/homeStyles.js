/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const title = css`
  flex-grow: 0;
`;

export const byline = css`
  flex-grow: 0;
`;

export const nav = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  textAlign: "center",
  fontSize: "1.6rem",
  flexGrow: 1
};

export const link = css`
  text-decoration: none;
  padding: 10px 0;
  flex-grow: 0;
`;

export const homeFooter = css`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  position: absolute;
  bottom: 0;
`;
