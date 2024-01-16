import { Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";
import { Task } from "../../components/Task";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #28385e;
  padding: 0 16px;
  padding-top: ${Platform.OS === "android" ? 56 : 16}px;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const Input = styled.TextInput`
  background-color: #222;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 0 16px;
  color: #ffffff;
`;

export const StyledTask = styled(Task)`
  background-color: #fff;
`;
