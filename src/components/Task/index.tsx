import { Text } from "react-native";
import { TaskProps } from "../../screens/Home";
import { Container, TaskDelete, TaskDone, TaskText } from "./styles";

import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Detail: TaskProps;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export function Task({ id, title, done, ...others }: TaskProps) {

  const navigation = useNavigation<Props['navigation']>();

  function handlePress(){
    navigation.navigate('Detail', {id, title, done});
  }

  return (
    <Container {...others} onPress={handlePress}>
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
