import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "react-native-paper";
import * as icons from "../assets/icons";

import TrainingList from "../screens/TrainingList";
import NutritionList from "../screens/NutritionList";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.green600,
          borderTopColor: Colors.green600,
          height: 55,
          paddingHorizontal:'15%'
        },
      }}
    >
      <Tab.Screen
        name="trainingList"
        component={TrainingList}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon source={icons.trainingIcon} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="nutritionList"
        component={NutritionList}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon source={icons.nutritionIcon} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const TabBarIcon = ({ source, focused }) => (
  <View
    style={
      focused
        ? {
            backgroundColor: Colors.green800,
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 12,
          }
        : {}
    }
  >
    <Image
      style={{
        tintColor: Colors.white,
        width: 30,
        height: 30,
      }}
      source={source}
    />
  </View>
);
