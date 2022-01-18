import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider,DefaultTheme, Colors } from "react-native-paper";
import Constants from "expo-constants";
import Dashboard from "./src/screens/Dashboard";

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:Colors.green600
  }
}

export default function App() {
  return (
    <>
      <View style={{ height: Constants.statusBarHeight }}></View>
      <StatusBar style="light" backgroundColor={Colors.green800} />
      <PaperProvider theme={theme}>
        <Dashboard />
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
