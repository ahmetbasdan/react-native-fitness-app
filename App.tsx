import { View } from "react-native";
import Constants from "expo-constants";
import RootStack from "./src/routers/RootStack";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "./src/redux/reducers/configureStore";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{ height: Constants.statusBarHeight }}></View>
        <RootStack />
      </PersistGate>
    </ReduxProvider>
  );
}
