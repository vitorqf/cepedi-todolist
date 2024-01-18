import {
    BackButton,
    BackButtonText,
    Container,
    TaskTitle,
    TaskTitleContainer,
    TopContainer,
    TextStatus,
    StatusContainer,
    StatusCard,
    StatusIcon,
    StatusText,
    StatusButtonDel,
    StatusTextContainer
} from "./styles";
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TaskProps } from "../../screens/Home";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

type RootStackParamList = {
    Home: undefined;
    Detail: TaskProps;
  };
  
type Props = NativeStackScreenProps<RootStackParamList>;

export function Detail() {

    const navigation = useNavigation<Props['navigation']>();

    const {task} = useContext(TaskContext);

    return (
        <Container>
            <TopContainer>
                <BackButton onPress={() => navigation.popToTop()}>
                    <Feather name="chevron-left" size={24} color="white" />
                    <BackButtonText>
                        Voltar
                    </BackButtonText>
                </BackButton>
            </TopContainer>

            <TaskTitleContainer>
                <TaskTitle>
                    {task.title}
                </TaskTitle>
            </TaskTitleContainer>

            <TextStatus>Status da tarefa</TextStatus>

            <StatusContainer>
                <StatusCard>
                    <StatusIcon>
                        <Feather name="check-square" size={24} color="white" />
                    </StatusIcon>
                    <StatusTextContainer>
                        <StatusText>{task.done ? 'Realizada' : 'Em aberto'}</StatusText>
                    </StatusTextContainer>
                </StatusCard>

                <StatusButtonDel>
                    <Feather name="trash-2" size={24} color="white" />
                </StatusButtonDel>
            </StatusContainer>

        </Container>
    )
}