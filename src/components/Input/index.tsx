import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { Container } from "./styles";

interface Props extends TextInputProps {
  active?: boolean;
  testID?: string;
}

const Input = ({ active = false, testID = "", ...rest }: Props) => {
  return (
    <Container active={active} testID={testID}>
      <TextInput {...rest} />
    </Container>
  );
};

export default Input;
