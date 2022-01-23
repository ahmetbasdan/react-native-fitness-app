import { Image, ImageSourcePropType, View } from "react-native";
import { Colors } from "react-native-paper";

interface ITabBarIconProps {
  source: ImageSourcePropType;
  focused: boolean;
}

const TabBarIcon: React.FC<ITabBarIconProps> = ({ source, focused }) => (
  <View>
    <View
      style={{
        backgroundColor: focused == true ? Colors.green600 : Colors.green800,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
      }}
    >
      <Image
        style={{
          tintColor: focused == true ? Colors.grey100 : Colors.grey300,
          width: 24,
          height: 24,
        }}
        source={source}
      />
    </View>
  </View>
);

export default TabBarIcon;
