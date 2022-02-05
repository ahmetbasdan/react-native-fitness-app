import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../screens/Dashboard";
import SportsDetail from "../screens/SportsDetail";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="sportsDetail" component={SportsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
