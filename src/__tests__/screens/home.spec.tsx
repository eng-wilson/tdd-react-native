import React from "react";
import { render } from "@testing-library/react-native";

import Home from "../../screens/Home";

describe("Home Screen", () => {
  it("should text input with 'Name' placeholder exists", () => {
    const { getByPlaceholderText } = render(<Home />);

    const inputName = getByPlaceholderText("Name");

    expect(inputName).toBeTruthy;
  });

  it("should render user info", () => {
    const { getByTestId } = render(<Home />);

    const inputName = getByTestId("input-name");

    expect(inputName.props.value).toBe("Wilson");
  });

  it("should render screen title", () => {
    const { getByTestId } = render(<Home />);

    const title = getByTestId("title");

    expect(title.props.children).toBe("Home");
  });
});
