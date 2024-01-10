import { Text } from "react-native";
import { TaskProps } from "../../screens/Home";
import { Container, TaskDelete, TaskDone, TaskText } from "./styles";

// O {...others} é utilizado caso queiramos re-estilizar o componente através do Styled, veja um exemplo no arquivo de estilos da Home, onde existe o StyledTask
export function Task({ id, title, done, ...others }: TaskProps) {
  return (
    <Container {...others}>
      <TaskDone>
        <Text>V</Text>
      </TaskDone>

      <TaskText>{title}</TaskText>

      <TaskDelete>
        <Text>X</Text>
      </TaskDelete>
    </Container>
  );
}
