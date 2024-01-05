import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #252627;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  color: #ffffff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const AddButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: #1e1e1e;
`;
