import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarIcon } from "../components/bottomNavigator";
import * as icon from "../assets/icons";

import Dashboard from "../screens/Dashboard";
import Profile from "../screens/Profile";
import { Colors } from "react-native-paper";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.green800,
          paddingHorizontal:36,
        },
      }}
    >
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon source={icon.dumbbell} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon source={icon.user} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
