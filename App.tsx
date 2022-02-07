import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme,
  Colors,
} from "react-native-paper";
import Constants from "expo-constants";
import RootStack from "./src/routers/RootStack";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "./src/redux/reducers/configureStore";
import { PersistGate } from "redux-persist/integration/react";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.green600,
  },
};

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{ height: Constants.statusBarHeight }}></View>
        <StatusBar style="light" backgroundColor={Colors.green800} />
        <PaperProvider theme={theme}>
          <RootStack />
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
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
