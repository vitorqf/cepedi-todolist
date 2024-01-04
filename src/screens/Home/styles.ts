import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #28385e;
  padding: 0 16px;
  padding-top: ${Platform.OS === "android" ? 56 : 0}px;
  justify-content: center;
  align-items: center;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
