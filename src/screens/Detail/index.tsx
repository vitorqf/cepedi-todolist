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


export function Detail() {
    return (
        <Container>
            <TopContainer>
                <BackButton>
                    <BackButtonText>
                        {"<"}
                    </BackButtonText>
                    <BackButtonText>
                        Voltar
                    </BackButtonText>
                </BackButton>
            </TopContainer>

            <TaskTitleContainer>
                <TaskTitle>Título da tarefa</TaskTitle>
            </TaskTitleContainer>

            <TextStatus>Status da tarefa</TextStatus>

            <StatusContainer>
                <StatusCard>
                    <StatusIcon>
                        <Feather name="check-square" size={24} color="white" />
                    </StatusIcon>
                    <StatusTextContainer>
                        <StatusText>Realizada</StatusText>
                    </StatusTextContainer>
                </StatusCard>

                <StatusButtonDel>
                    <Feather name="trash-2" size={24} color="white" />
                </StatusButtonDel>
            </StatusContainer>

        </Container>
    )
}