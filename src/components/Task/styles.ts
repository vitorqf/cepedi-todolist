import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #304163;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TaskMarker = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: #e88a1a;
`;

export const TaskDeleteButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: #f22424;
`;

export const TaskText = styled.Text`
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
`;
