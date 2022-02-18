import React from "react";
import { Text, TextInput, Button } from "react-native";

import Input from "../../components/Input";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Text testID="title">Home</Text>

      <Input
        testID="input-name"
        value="Wilson"
        placeholder="Name"
        autoCorrect={false}
      />

      <Input placeholder="Last name" />

      <Button title="Save" onPress={() => {}} />
    </Container>
  );
};

export default Home;
