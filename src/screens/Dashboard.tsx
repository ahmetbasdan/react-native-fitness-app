import React from "react";
import { Image } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import { fullBodyIcon, regionalIcon } from "../assets/icons";

import FitnessFullBody from "./FitnessFullBody";
import FitnessRegional from "./FitnessRegional";

const Dashboard = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "fullBody",
      title: "Tüm Vücut",
      icon: () => (
        <Image
          source={fullBodyIcon}
          style={{ tintColor: "#fff", width: 25, height: 25 }}
        />
      ),
    },
    { key: "regional", title: "Bölgesel",   icon: () => (
        <Image
          source={regionalIcon}
          style={{ tintColor: "#fff", width: 25, height: 25 }}
        />
      ), },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    fullBody: FitnessFullBody,
    regional: FitnessRegional,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Dashboard;
