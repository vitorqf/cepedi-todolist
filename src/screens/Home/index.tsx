import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import { FlatList, Text } from "react-native";
import { Task } from "../../components/Task";
import { TaskContext } from "../../context/TaskContext";
import { ButtonAdd, Container, Input, InputContainer } from "./styles";

export interface TaskProps {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [taskName, setTaskName] = useState("");
  const { tasks, createTask } = useContext(TaskContext);

  return (
    <Container>
      <StatusBar style="light" />

      <InputContainer>
        <Input
          placeholder="Adicionar tarefa"
          placeholderTextColor="#ffffff"
          value={taskName}
          onChangeText={setTaskName}
        />
        <ButtonAdd onPress={() => createTask(taskName)}>
          <Feather name="plus" size={24} color="white" />
        </ButtonAdd>
      </InputContainer>

      <FlatList
        style={{
          flex: 1,
          width: "100%",
        }}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: TaskProps }) => (
          <Task id={item.id} title={item.title} done={item.done} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
          paddingBottom: 32,
        }}
        ListEmptyComponent={
          <>
            <Text>Lista vazia</Text>
          </>
        }
      />
    </Container>
  );
}
