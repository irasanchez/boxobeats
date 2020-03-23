import React from "react";
import SoundList from "../components/SoundList";
import { render } from "@testing-library/react";

test("renders", () => {
  const { queryByTestId } = render(<SoundList beats={[]} />);
});
