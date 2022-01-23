import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme,
  Colors,
} from "react-native-paper";
import Constants from "expo-constants";
import StackNavigator from "./src/navigators/StackNavigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.green600,
  },
};

export default function App() {
  return (
    <>
      <View style={{ height: Constants.statusBarHeight }}></View>
      <StatusBar style="light" backgroundColor={Colors.green800} />
      <PaperProvider theme={theme}>
        <StackNavigator />
      </PaperProvider>
    </>
  );
}
