import { Text } from "react-native";
import { TaskProps } from "../../screens/Home";
import { Container, TaskDelete, TaskDone, TaskText } from "./styles";

import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;


// O {...others} é utilizado caso queiramos re-estilizar o componente através do Styled, veja um exemplo no arquivo de estilos da Home, onde existe o StyledTask
export function Task({ id, title, done, ...others }: TaskProps) {

  const navigation = useNavigation<Props['navigation']>();

  return (
    <Container {...others} onPress={() => navigation.navigate('Detail')}>
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
