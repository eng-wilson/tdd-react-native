import styled, { css } from "styled-components/native";

interface Props {
  active: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: 40px;

  border: ${({ active }) => (active ? `#02c2dd` : `#ddd`)} 2px;
  border-radius: 10px;

  padding: 4px 16px;

  margin-bottom: 16px;
`;
