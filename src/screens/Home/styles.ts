import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #28385e;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  padding-top: ${Platform.OS === "android" ? 56 : 0}px;
  gap: 32px;
  padding-bottom: 32px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
