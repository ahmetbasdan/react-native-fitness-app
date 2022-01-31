import { createStackNavigator } from "@react-navigation/stack";

import BottomNavigator from "./BottomNavigator";

type RootStackParamList = {
  home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default AppStack;
