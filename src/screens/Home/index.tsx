import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Text>Home</Text>

      <TextInput placeholder="Name" autoCorrect={false} />

      <TextInput placeholder="Last name" />

      <Button title="Save" onPress={() => {}} />
    </Container>
  );
};

export default Home;
