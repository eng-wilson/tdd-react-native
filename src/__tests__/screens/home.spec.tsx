import React from "react";
import { render } from "@testing-library/react-native";

import Home from "../../screens/Home";

it("should text input with 'Name' placeholder exists", () => {
  const { getByPlaceholderText } = render(<Home />);

  const inputName = getByPlaceholderText("Name");

  expect(inputName).toBeTruthy;
});
