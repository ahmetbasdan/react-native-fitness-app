import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomNavigator from "./BottomNavigator";
import TrainingDetail from "../screens/TrainingDetail";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="dashboard" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="dashboard" component={BottomNavigator} />
        <Stack.Screen name="trainingDetail" component={TrainingDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
