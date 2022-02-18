import React from "react";
import { render } from "@testing-library/react-native";

import Input from ".";

describe("Input Component", () => {
  it("should change border color when active", () => {
    const { getByTestId, debug } = render(
      <Input active={true} testID="active-border-test" />
    );

    debug();

    const input = getByTestId("active-border-test");

    debug();

    expect(input.props.style[0].borderColor).toBe("#02c2dd");
  });
});
