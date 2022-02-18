import React from "react";
import { render } from "@testing-library/react-native";

import Home from "../../screens/Home";

it("should text input with 'Name' placeholder exists", () => {
  const { debug } = render(<Home />);

  debug();
});
