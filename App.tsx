import { Home } from "./src/screens/Home";
import { Detail } from "./src/screens/Detail";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <RootStack.Screen name="Detail" component={Detail} options={{headerShown: false}}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
