import { StatusBar } from "expo-status-bar";
import { Search } from "../../components/Search";
import { Task } from "../../components/Task";
import { Container, Scroll } from "./styles";

const TASKS = [
  {
    id: "1",
    title: "Desenvolver o app",
    done: false,
  },
  {
    id: "2",
    title: "Estudar FlatList",
    done: false,
  },
  {
    id: "3",
    title: "Estudar StyledComponents",
    done: true,
  },
  {
    id: "4",
    title: "Desenvolver o app",
    done: false,
  },
  {
    id: "5",
    title: "Estudar FlatList",
    done: false,
  },
  {
    id: "6",
    title: "Estudar StyledComponents",
    done: true,
  },
  {
    id: "7",
    title: "Desenvolver o app",
    done: false,
  },
  {
    id: "8",
    title: "Estudar FlatList",
    done: false,
  },
  {
    id: "9",
    title: "Estudar StyledComponents",
    done: true,
  },
  {
    id: "10",
    title: "Estudar StyledComponents",
    done: true,
  },
  {
    id: "11",
    title: "Desenvolver o app",
    done: false,
  },
  {
    id: "12",
    title: "Estudar FlatList",
    done: false,
  },
  {
    id: "13",
    title: "Estudar StyledComponents",
    done: true,
  },
];

export function Home() {
  return (
    <Container>
      <StatusBar style="light" />
      <Search />
      <Scroll
        contentContainerStyle={{
          paddingBottom: 56,
          gap: 12,
        }}
        showsVerticalScrollIndicator={false}
      >
        {TASKS.map((task) => (
          <Task key={task.id} />
        ))}
      </Scroll>
    </Container>
  );
}
