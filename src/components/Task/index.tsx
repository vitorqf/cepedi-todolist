import Square from "../../assets/icons/square.svg";
import Trash from "../../assets/icons/trash.svg";
import { Container, TaskDeleteButton, TaskMarker, TaskText } from "./styles";

export function Task() {
  function handleTaskMarkerPress() {
    console.log("Tarefa concluida");
  }

  function handleTaskDeletePress() {
    console.log("Tarefa deletada");
  }

  return (
    <Container>
      <TaskMarker onPress={handleTaskMarkerPress} activeOpacity={0.8}>
        <Square width={24} height={24} />
      </TaskMarker>
      <TaskText>Desenvolver o app</TaskText>
      <TaskDeleteButton onPress={handleTaskDeletePress} activeOpacity={0.8}>
        <Trash width={24} height={24} />
      </TaskDeleteButton>
    </Container>
  );
}
