import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { Task } from "../../components/Task";
import { Title } from "../../components/Title";
import { Container, Input } from "./styles";

export interface TaskProps {
  id: number;
  title: string;
  done: boolean;
}

const TASKS = [
  {
    id: 1,
    title: "Desenvolver o APP",
    done: false,
  },
  {
    id: 2,
    title: "Lavar a louça",
    done: false,
  },
  {
    id: 3,
    title: "Formatar o computador",
    done: false,
  },
  {
    id: 4,
    title: "Estudar Styled Components",
    done: true,
  },
];

export function Home() {
  const [tasks, setTasks] = useState(TASKS);
  const [taskName, setTaskName] = useState("");
  const [count, setCount] = useState(4);

  function handleAddNewTask(title: string) {
    const newTask = {
      id: count,
      title,
      done: false,
    };
    setCount(count + 1);
    setTasks([...tasks, newTask]);
  }

  return (
    <Container>
      <StatusBar style="light" />
      <Input
        placeholder="Pesquisar tarefa"
        placeholderTextColor="#ffffff"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TouchableOpacity onPress={() => handleAddNewTask(taskName)}>
        <Text>Adicionar tarefa</Text>
      </TouchableOpacity>
      <Title />
      {/* <Scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
          paddingBottom: 32,
        }}
      >
        {tasks.map((task) => {
          if (!task.done) {
            return (
              <Task
                id={task.id}
                title={task.title}
                done={task.done}
                key={task.id}
              />
            );
          }
        })}
      </Scroll> */}
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
