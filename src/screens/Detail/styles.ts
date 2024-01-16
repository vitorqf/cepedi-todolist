import { Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #28385e;
  padding: 0 16px;
  padding-top: ${Platform.OS === "android" ? 56 : 16}px;
  gap: 16px;
`;

export const TopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const BackButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 16px;
`;

export const BackButtonText = styled.Text`
    color: #FFF;
    font-size: 16px;
`;

export const TaskTitleContainer = styled.View`
    background-color: #304163;
    border-radius: 4px;
    padding: 8px 16px;
`;

export const TaskTitle = styled.Text`
    color: #FFF;
    font-size: 20px;
`;

export const TextStatus = styled.Text`
    color: #FFF;
    font-size: 16px;
`;

export const StatusContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
`;

export const StatusCard = styled.View`
    background-color: #304163;
    border-radius: 4px;
    flex-direction: row;
    flex: 1;
    gap: 16px;
`;

export const StatusIcon = styled.View`
    background-color: #0E9577;
    border-radius: 4px;
    padding: 16px;
`;

export const StatusTextContainer = styled.View`
    padding: 16px;
`;

export const StatusText = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const StatusButtonDel = styled.TouchableOpacity`
    background-color: #F22424;
    border-radius: 4px;
    padding: 16px;
`;