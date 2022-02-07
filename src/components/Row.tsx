import { View, ViewProps, ViewStyle } from "react-native";
import React from "react";

interface IProps extends ViewProps {
  style?: ViewStyle;
}

const Row: React.FC<IProps> = ({ children, style = {}, ...rest }) => {
  return (
    <View {...rest} style={{ ...style, flexDirection: "row" }}>
      {children}
    </View>
  );
};

export default Row;
