import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
  Colors,
} from "react-native-paper";

import BottomNavigator from "./BottomNavigator";
import TrainingDetail from "../screens/TrainingDetail";
import ProteinSources from "../screens/ProteinSources";
import QulityCarbohydrate from "../screens/QulityCarbohydrate";
import OatBenefits from "../screens/OatBenefits";
import { useSelector } from "react-redux";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.green600,
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: Colors.green600,
  },
};

const Stack = createStackNavigator();

const RootStack = () => {
  const themeReducer = useSelector((state) => state.themeReducer);

  return (
    <PaperProvider theme={themeReducer == "light" ? theme : darkTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="dashboard"
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name="dashboard" component={BottomNavigator} />
          <Stack.Screen name="trainingDetail" component={TrainingDetail} />
          <Stack.Screen name="proteinSources" component={ProteinSources} />
          <Stack.Screen
            name="qualityCarbohydrate"
            component={QulityCarbohydrate}
          />
          <Stack.Screen name="oatBenefits" component={OatBenefits} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default RootStack;
