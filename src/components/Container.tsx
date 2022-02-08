import { View, ViewProps, ViewStyle } from "react-native";
import React from "react";
import { Colors, useTheme } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";

interface IProps extends ViewProps {
  style?: ViewStyle;
}

const Container: React.FC<IProps> = ({ children, style, ...rest }) => {
  const theme = useTheme();
  const themeReducer = useSelector((state: any) => state.themeReducer);

  return (
    <View
      style={{ ...style, flex: 1, backgroundColor: theme.colors.background }}
    >
      <StatusBar
        style={"light"}
        backgroundColor={
          themeReducer == "light" ? Colors.green800 : theme.colors.background
        }
      />
      {children}
    </View>
  );
};

export default Container;
