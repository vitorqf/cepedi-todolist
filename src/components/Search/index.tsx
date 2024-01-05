import Plus from "../../assets/icons/plus.svg";
import { AddButton, Container, Input } from "./styles";

export function Search() {
  return (
    <Container>
      <Input placeholder="Buscar tarefa" placeholderTextColor="#ffffff" />
      <AddButton>
        <Plus width={24} height={24} />
      </AddButton>
    </Container>
  );
}
