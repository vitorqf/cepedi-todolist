import { Text } from "react-native";
import { Container, TaskDelete, TaskDone, TaskText } from "./styles";

export function Task() {
  return (
    <Container>
      <TaskDone>
        <Text>V</Text>
      </TaskDone>

      <TaskText>Hello World</TaskText>

      <TaskDelete>
        <Text>X</Text>
      </TaskDelete>
    </Container>
  );
}
