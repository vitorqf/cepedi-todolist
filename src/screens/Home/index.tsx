import { StatusBar } from "expo-status-bar";
import { Task } from "../../components/Task";
import { Title } from "../../components/Title";
import { Container, Scroll } from "./styles";

export function Home() {
  return (
    <Container>
      <StatusBar style="light" />
      <Title />
      <Scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
          paddingBottom: 32,
        }}
      >
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </Scroll>
    </Container>
  );
}
