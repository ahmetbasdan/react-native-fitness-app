import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomNavigator from "./BottomNavigator";
import TrainingDetail from "../screens/TrainingDetail";
import ProteinSources from "../screens/ProteinSources";
import QulityCarbohydrate from "../screens/QulityCarbohydrate";
import OatBenefits from "../screens/OatBenefits";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="dashboard" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="dashboard" component={BottomNavigator} />
        <Stack.Screen name="trainingDetail" component={TrainingDetail} />
        <Stack.Screen name="proteinSources" component={ProteinSources} />
        <Stack.Screen name="qualityCarbohydrate" component={QulityCarbohydrate} />
        <Stack.Screen name="oatBenefits" component={OatBenefits} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
